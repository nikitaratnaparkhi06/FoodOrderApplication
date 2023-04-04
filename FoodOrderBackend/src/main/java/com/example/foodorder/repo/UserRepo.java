package com.example.foodorder.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodorder.model.User;

@Repository
public interface UserRepo extends JpaRepository<User,String>{

}
