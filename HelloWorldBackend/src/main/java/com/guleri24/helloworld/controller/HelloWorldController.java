package com.guleri24.helloworld.controller;

import com.guleri24.helloworld.model.HelloWorld;
import com.guleri24.helloworld.repository.HelloWorldRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping("/api")
public class HelloWorldController {

    @Autowired
    HelloWorldRepository helloWorldRepository;

    @GetMapping("/helloworlds")
    public ResponseEntity<List<HelloWorld>> getAllHelloWorlds(
            @RequestParam(required = false) String name) {
        try {
            List<HelloWorld> helloWorlds = new ArrayList<>();

            if (name == null)
                helloWorlds.addAll(helloWorldRepository.findAll());

            else
                helloWorlds.addAll(helloWorldRepository.findByNameContaining(name));

            if (helloWorlds.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(helloWorlds, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("helloworlds/{id}")
    public ResponseEntity<HelloWorld> getHelloWorldsById(
            @PathVariable("id") long id) {
        Optional<HelloWorld> helloWorldData = helloWorldRepository.findById(id);

        return helloWorldData
                .map(helloWorld -> new ResponseEntity<>(helloWorld, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/helloworlds")
    public ResponseEntity<HelloWorld> createHelloWorld(
            @RequestBody HelloWorld helloWorld) {
        try {
            HelloWorld _helloWorld = helloWorldRepository
                    .save(new HelloWorld(helloWorld.getName()));
            return new ResponseEntity<>(_helloWorld, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/helloworlds/{id}")
    public ResponseEntity<HelloWorld> updateHelloWorlds(
            @PathVariable("id") long id,
            @RequestBody HelloWorld helloWorld) {
        Optional<HelloWorld> helloWorldData = helloWorldRepository.findById(id);

        if (helloWorldData.isPresent()) {
            HelloWorld _helloWorld = helloWorldData.get();
            _helloWorld.setName(helloWorld.getName());
            return new ResponseEntity<>(helloWorldRepository.save(_helloWorld), HttpStatus.OK);
        } else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/helloworlds/{id}")
    public ResponseEntity<HttpStatus> deleteHelloWorld(@PathVariable("id") long id) {
        try {
            helloWorldRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/helloworlds")
    public ResponseEntity<HttpStatus> deleteAllHelloWorlds() {
        try {
            helloWorldRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

