package com.ufpb.remais.security;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseAuthException;
import com.google.firebase.auth.FirebaseToken;

import com.ufpb.remais.model.User;
import com.ufpb.remais.security.model.Credentials;
import com.ufpb.remais.security.model.SecurityProperties;
import com.ufpb.remais.security.utils.CookieUtils;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class SecurityFilter extends OncePerRequestFilter {

	@Autowired
	SecurityService securityService;

	@Autowired
	SecurityProperties restSecProps;

	@Autowired
	CookieUtils cookieUtils;

	@Autowired
	SecurityProperties securityProps;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		verifyToken(request);
		filterChain.doFilter(request, response);
	}

	private void verifyToken(HttpServletRequest request) {
		String session = null;
		FirebaseToken decodedToken = null;
		Credentials.CredentialType type = null;
		boolean strictServerSessionEnabled = securityProps.getFirebaseProps().isEnableStrictServerSession();
		Cookie sessionCookie = cookieUtils.getCookie("session");
		String token = securityService.getBearerToken(request);
		logger.info(token);
		try {
			if (sessionCookie != null) {
				session = sessionCookie.getValue();
				decodedToken = FirebaseAuth.getInstance().verifySessionCookie(session,
						securityProps.getFirebaseProps().isEnableCheckSessionRevoked());
				type = Credentials.CredentialType.SESSION;
			} else if (!strictServerSessionEnabled) {
				if (token != null && !token.equalsIgnoreCase("undefined")) {
					decodedToken = FirebaseAuth.getInstance().verifyIdToken(token);
					type = Credentials.CredentialType.ID_TOKEN;
				}
			}
		} catch (FirebaseAuthException e) {
			e.printStackTrace();
			// log.error("Firebase Exception:: ", e.getLocalizedMessage());
		}
		User user = firebaseTokenToUserDto(decodedToken);
		if (user != null) {
			UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(user,
					new Credentials(type, decodedToken, token, session), null);
			authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			SecurityContextHolder.getContext().setAuthentication(authentication);
		}
	}

	private User firebaseTokenToUserDto(FirebaseToken decodedToken) {
		User user = null;
		if (decodedToken != null) {
			user = new User();
			user.setUid(decodedToken.getUid());
			user.setFirstName(decodedToken.getName());
			user.setEmail(decodedToken.getEmail());
			user.setPhotoUrl(decodedToken.getPicture());
			user.setEmailVerified(decodedToken.isEmailVerified());
		}
		return user;
	}

}
