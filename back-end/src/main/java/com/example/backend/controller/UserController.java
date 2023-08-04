package com.example.backend.controller;

import com.example.backend.entity.User;
import com.example.backend.service.UserService;
import org.hibernate.annotations.Cache;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path = "api/users/")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAll(){
        return userService.getUsers();
    }

    @GetMapping("{userId}")
    public Optional<User> getById(@PathVariable("userId") Integer userId){
        return userService.getUser(userId);
    }


    @PostMapping
    public void saveUpdate(@RequestBody User user){
        userService.saveOrUpdate(user);
    }

    @DeleteMapping("{userId}")
    public void Delete(@PathVariable("userId") Integer userId){
        userService.delete(userId);
    }

}
