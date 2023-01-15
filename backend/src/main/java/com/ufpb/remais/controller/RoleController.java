package com.ufpb.remais.controller;

import com.ufpb.remais.model.Category;
import com.ufpb.remais.model.Role;
import com.ufpb.remais.model.User;
import com.ufpb.remais.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/public/role")
public class RoleController {

    @Autowired
    private RoleRepository roleRepository;

    @GetMapping("")
    public List<Role> getAllRole(){
        return this.roleRepository.findAll();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Role addrole(@RequestBody Role role){
        return this.roleRepository.save(role);
    }

}
