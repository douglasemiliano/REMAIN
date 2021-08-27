package com.ufpb.remais.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ufpb.remais.model.UserLogin;

@Repository
public interface UserloginRepository extends JpaRepository<UserLogin, Long> {

}
