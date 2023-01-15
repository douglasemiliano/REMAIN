package com.ufpb.remais.controller;

import com.ufpb.remais.model.Category;
import com.ufpb.remais.model.Material;
import com.ufpb.remais.model.Role;
import com.ufpb.remais.model.User;
import com.ufpb.remais.repository.RoleRepository;
import com.ufpb.remais.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.Optional;


@RestController
@RequestMapping("/public/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<User> addUser (@RequestBody  User user){
        if (!this.userRepository.existsByUid(user.getUid())){
            user.setCreatedAt(new Date());
            user.addRole(this.roleRepository.findByNameContaining("USER"));
            User u = this.userRepository.save(user);
            return new ResponseEntity<User>(u, HttpStatus.OK);
        }
        Optional<User> u = this.getByUID(user.getUid());
        return ResponseEntity.ok(u.get());
    }

    @GetMapping("")
    public Page<User> getAllUsers(){
        PageRequest pageRequest = PageRequest.of(0,10);
        return new PageImpl<>(this.userRepository.findAll(), pageRequest, 10);
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getById(@PathVariable Long id) {
        Optional<User> user = this.userRepository.findById(id);
        if (!this.userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());
    }

    @GetMapping("/search={uid}")
    public ResponseEntity<User> getUserByUid(@PathVariable String uid) {
        Optional<User> user = this.getByUID(uid);
        if (!this.userRepository.existsByUid(uid)){
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user.get());

    }


    public Optional<User> getByUID(String uid) {
        return this.userRepository.getUserByuid(uid);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id){
        if (!this.userRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        this.userRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @PatchMapping("/{userId}/set-role")
    @ResponseStatus(HttpStatus.OK)
    public User setUserRole(@PathVariable Long userId, @RequestBody Role role){
        User user = this.userRepository.getById(userId);
        user.setUpdatedAt(new Date());
        user.addRole(role);
        return this.userRepository.save(user);
    }
}
