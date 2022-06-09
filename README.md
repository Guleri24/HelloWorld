# HelloWorld
A hello world application in Spring Boot and Angular

https://user-images.githubusercontent.com/43719098/172848623-fd44d9c8-06ea-4fea-8ac6-db309d1b4c84.mp4

# Requirements
Java 18
NodeJS 18
Angular 14.0.0

# Build from source

## Optional
* To try the UI 
```
  ng serve
```
link: http://localhost:4200/



## Integrating Angular With SpringBoot  
1. Build HelloWorldFrontend
```
  ng build --configuration prod
```
It is going to create static files.

2. Build HelloWorldBackend
Build and run the Spring Boot server with commands:
```
  mvn clean install
  mvn spring-boot:run
```
First command is going to copy the static files form frontend to backend as defined in pom.xml (line: 

Open browser with url: http://localhost:8080/

