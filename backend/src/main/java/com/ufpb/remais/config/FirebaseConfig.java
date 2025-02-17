package com.ufpb.remais.config;

import java.io.IOException;
import java.io.InputStream;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;

import com.google.auth.oauth2.GoogleCredentials;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.ufpb.remais.security.model.SecurityProperties;

@Configuration
public class FirebaseConfig {

	@Autowired
	SecurityProperties secProps;

	@PostConstruct
	public void firebaseInit() {
		InputStream inputStream = null;
		try {
			inputStream = new ClassPathResource("firebase_config.json").getInputStream();
		} catch (IOException e3) {
			e3.printStackTrace();
		}
		try {

			FirebaseOptions options = new FirebaseOptions.Builder()
					.setCredentials(GoogleCredentials.fromStream(inputStream)).build();

			if (FirebaseApp.getApps().isEmpty()) {
				FirebaseApp.initializeApp(options);
			}
			System.out.println("Firebase inicializado");

		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}