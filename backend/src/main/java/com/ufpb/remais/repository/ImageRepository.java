package com.ufpb.remais.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ufpb.remais.model.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {

}
