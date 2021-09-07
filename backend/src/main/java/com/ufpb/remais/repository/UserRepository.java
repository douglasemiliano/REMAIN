package com.ufpb.remais.repository;

import com.ufpb.remais.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

//    Optional findByUid(String uid);
       Boolean existsByUid(String uid);
       Optional<User> getUserByuid (String uid);
}
