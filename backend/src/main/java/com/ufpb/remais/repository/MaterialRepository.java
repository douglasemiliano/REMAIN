package com.ufpb.remais.repository;

import com.ufpb.remais.model.Material;
import com.ufpb.remais.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MaterialRepository extends JpaRepository<Material, Long> {

    List<Material> getMaterialByAuthorId (Long id);

    List<Material> findAllByAuthorIdOrderByCreatedAtDesc(Long id);

}
