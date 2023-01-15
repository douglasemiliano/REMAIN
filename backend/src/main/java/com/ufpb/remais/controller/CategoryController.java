package com.ufpb.remais.controller;

import com.ufpb.remais.model.Category;
import com.ufpb.remais.model.Image;
import com.ufpb.remais.model.Material;
import com.ufpb.remais.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("/public/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @GetMapping("")
    public Page<Category> getAllCategory(
            @PageableDefault(page = 0, size = 30) Pageable pageable){
        return this.categoryRepository.findAll(pageable);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getById(@PathVariable Long id) {
        Optional<Category> category = this.categoryRepository.findById(id);
        if (!this.categoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(category.get());
    }

    @PatchMapping("/{id}")
    public Category editCategory (@PathVariable Long id, @RequestBody Category category){
        System.out.println(this.categoryRepository.existsById(id));
        Category c = this.categoryRepository.getById(id);
        c.setImage(category.getImage());
        return this.categoryRepository.save(c);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Category addCategory(@RequestBody Category category){
        return this.categoryRepository.save(category);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        if (!this.categoryRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        this.categoryRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

}
