package com.ufpb.remais.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ufpb.remais.model.UserLogin;
import com.ufpb.remais.repository.UserloginRepository;

@RestController
public class UserLoginController {

	@Autowired
	private UserloginRepository userLoginRepository;

	@GetMapping("/users")
	public List<UserLogin> getAll() {
		return userLoginRepository.findAll();
	}

	@PostMapping("/users")
	public String saveUserLogin(@RequestBody UserLogin userLogin) {
		userLoginRepository.save(userLogin);
		return "Usuario salvo";
	}
}
