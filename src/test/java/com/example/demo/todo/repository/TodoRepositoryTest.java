package com.example.demo.todo.repository;

import com.example.demo.todo.entity.ToDo;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class TodoRepositoryTest {

    @Autowired TodoRepository repository;

    @Test
    @DisplayName("특정 할일 데이터를 수정해야 한다")
    void modifyTest() {
        // given
        ToDo toDo = new ToDo();
        toDo.setTitle("하하호호 수정하기");
        toDo.setDone(true);
        toDo.setId("daf34a6e-2a96-45d8-b2ad-061d2fb8a511");

        // when
        boolean flag = repository.modify(toDo);

        // then
        assertTrue(flag);
    }
}