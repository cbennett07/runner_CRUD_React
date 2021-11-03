package com.example.demo.controller;

import com.example.demo.model.Runner;
import com.example.demo.repository.RunnerRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin
public class RunnerController {

    private final RunnerRepository repository;

    public RunnerController(RunnerRepository repository) {
        this.repository = repository;
    }
    //CREATE
    @PostMapping("/runner")
    public Runner createRunner(@RequestBody Runner newRunner){
        return this.repository.save(newRunner);
    }

    //READ
    @GetMapping("/runner/{id}")
    public Runner getRunner(@PathVariable Long id){
        return this.repository.findById(id).get();
    }

    //UPDATE
    @PatchMapping("/runner/{id}")
    public Runner updateRunner(@RequestBody Map<String, Object> newRunner, @PathVariable Long id){
        Runner oldRunner = this.repository.findById(id).get();
        newRunner.forEach((key, value)-> {
            switch (key) {
                case "name":
                    oldRunner.setName((String) value);
                    break;
                case "bib":
                    oldRunner.setBib((String) value);
                    break;
                case "hours":
                    oldRunner.setHours((Integer) value);
                    break;
                case "minutes":
                    oldRunner.setMinutes((Integer) value);
                    break;
                case "seconds":
                    oldRunner.setSeconds((Integer) value);
                    break;
            }
        });
        return this.repository.save(oldRunner);
    }

    //DELETE
    @DeleteMapping("/runner/{id}")
    public void deleteRunner(@PathVariable Long id){
        this.repository.deleteById(id);
    }
    //LIST
    @GetMapping("/runner")
    public Iterable<Runner> listRunners(){
        return this.repository.findAll();
    }

}
