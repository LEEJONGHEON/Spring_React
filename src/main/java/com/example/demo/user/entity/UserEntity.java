package com.example.demo.user.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.UUID;

@Setter @Getter @ToString
@AllArgsConstructor
public class UserEntity {
    // DB table과 동일한 데이터 구조 선언
    private String id;
    private String username;
    private String email;
    private String password;

    // 회원 고유 id 설정
    public UserEntity() {
        this.id = UUID.randomUUID().toString();
    }
}
