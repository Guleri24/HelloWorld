package com.guleri24.helloworld.repository;

import com.guleri24.helloworld.model.HelloWorld;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HelloWorldRepository extends JpaRepository<HelloWorld, Long> {
    List<HelloWorld> findByNameContaining(String name);
}
