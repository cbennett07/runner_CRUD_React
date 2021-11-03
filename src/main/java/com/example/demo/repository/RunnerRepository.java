package com.example.demo.repository;

import com.example.demo.model.Runner;
import org.springframework.data.repository.CrudRepository;

public interface RunnerRepository extends CrudRepository<Runner, Long> {
    //custom repo methods here
}
