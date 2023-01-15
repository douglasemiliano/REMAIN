package com.ufpb.remais.repository;

import com.ufpb.remais.model.Material;
import com.ufpb.remais.model.Role;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoleRepository extends JpaRepository <Role, Long> {

    Role findByNameContaining(String title);
}
