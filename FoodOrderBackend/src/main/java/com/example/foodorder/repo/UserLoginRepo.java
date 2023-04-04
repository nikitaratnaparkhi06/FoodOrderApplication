package com.example.foodorder.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.foodorder.model.User;
import com.example.foodorder.model.UserLogin;

@Repository
public interface UserLoginRepo extends JpaRepository<UserLogin,String>{

	UserLogin findByUserId(int userId);

}
