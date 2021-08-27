package com.ufpb.remais.security.endpoints;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("public")
public class PublicEndpoint {

	@GetMapping("test")
	ResponseEntity<String> getPublic() {
		return ResponseEntity.ok("OK");
	}
	
	@GetMapping("/")
	public String index() {
		return "index";
	}
	
	@GetMapping("/signup")
	public String signup() {
		return "signup";	
	}
	
}
