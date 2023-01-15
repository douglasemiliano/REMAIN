package com.ufpb.remais.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.ufpb.remais.model.Image;
import com.ufpb.remais.repository.ImageRepository;

@RestController
@RequestMapping("/public/image")
public class ImageController {

	@Autowired
	private ImageRepository imageRepository;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Image addImage(@RequestBody Image image) {
		return this.imageRepository.save(image);
	}
	
	@GetMapping("")
	public Page<Image> getAll(){
		PageRequest pageRequest = PageRequest.of(0, 10);
		return new PageImpl<>(this.imageRepository.findAll(), pageRequest, 10);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Image> getById(@PathVariable Long id) {
		Optional<Image> image = this.imageRepository.findById(id);
		if (!this.imageRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		return ResponseEntity.ok(image.get());
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		if (!this.imageRepository.existsById(id)) {
			return ResponseEntity.notFound().build();
		}
		this.imageRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
