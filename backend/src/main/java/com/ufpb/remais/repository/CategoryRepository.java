package com.ufpb.remais.repository;

import com.ufpb.remais.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}



