package com.example.foodorder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.foodorder.model.UserLogin;
import com.example.foodorder.repo.UserLoginRepo;


@RestController
//@RequestMapping("/users")
@CrossOrigin("http://localhost:4200/")
public class UserLoginController {

	@Autowired
	 
    private UserLoginRepo repo;
	 
    @PostMapping("/login")
    
    public ResponseEntity<?> loginUser( @RequestBody UserLogin userData){
   	 
   	  System.out.println(userData);
   	 UserLogin users = repo.findByUserId(userData.getUserId());
  	 // if(userData.getPassword().equals(users.getPassword())){
  	      return ResponseEntity.ok(repo.save(userData));
   // }else {
  	 // return (ResponseEntity<?>) ResponseEntity.internalServerError();
  	      
  	        }
}
