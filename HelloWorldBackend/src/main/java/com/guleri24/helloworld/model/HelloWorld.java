package com.guleri24.helloworld.model;

import javax.persistence.*;

@Entity
@Table(name = "hellowords")
public class HelloWorld {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "name")
    private String name;

    public HelloWorld() {
    }

    public HelloWorld(String name) {
        this.name = name;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "HelloWorld [name = " + name + "]";
    }
}
