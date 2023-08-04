package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Generated;
@Data
@Entity
@Table(name="user_db")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer userId;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String nickname;

    @Column(nullable = false)
    private String password;
}
