package com.ufpb.remais.controller;

import com.ufpb.remais.model.Category;
import com.ufpb.remais.model.Material;
import com.ufpb.remais.model.User;
import com.ufpb.remais.repository.MaterialRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;

@RestController
@RequestMapping("public/material")
public class MaterialController {

    @Autowired
    public MaterialRepository materialRepository;

    @GetMapping("")
    public Page<Material> getAllMaterials(
            @PageableDefault(page = 0, size = 12) Pageable pageable){
        return this.materialRepository.findAll(pageable);
    }

    @GetMapping("/author/{id}")
    public Page<Material> getByAuthor(
            @PageableDefault(page = 0, size = 12, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable, @PathVariable String id) {
        return this.materialRepository.getMaterialByAuthorUid(id, pageable);
    }

    @GetMapping("/category/{id}")
    public Page<Material> getByCategory(
            @PageableDefault(page = 0, size = 12, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable, @PathVariable Long id) {
        return this.materialRepository.getMaterialByCategoryId(id, pageable);
    }

    @GetMapping("/search={title}")
    public Page<Material> search(
        @PageableDefault(page = 0, size = 12, sort = "createdAt", direction = Sort.Direction.DESC) Pageable pageable, @PathVariable String title) {
        System.err.println(title);
            return this.materialRepository.findByTitleContaining(title, pageable);
        }


    @GetMapping("/{id}")
    public ResponseEntity<Material> getById(@PathVariable Long id) {
        Optional<Material> material = this.materialRepository.findById(id);
        if (!this.materialRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(material.get());
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Material addMaterial(@RequestBody Material material){
        material.setTitle(material.getTitle().toLowerCase());
        material.setCreatedAt(new Date());
        return this.materialRepository.save(material);
    }

    @PatchMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public Material incrementView(@PathVariable Long id){
        Material material = this.materialRepository.getById(id);
        material.setUpdatedAt(new Date());
        material.setViews(material.getViews()+1);
        return this.materialRepository.save(material);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Material> update(@PathVariable Long id, @RequestBody Material material) {

        if(!this.materialRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        material.setId(id);
        this.materialRepository.save(material);
        return ResponseEntity.ok(material);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {

        if (!this.materialRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }

        this.materialRepository.deleteById(id);;
        return ResponseEntity.noContent().build();
    }

}
