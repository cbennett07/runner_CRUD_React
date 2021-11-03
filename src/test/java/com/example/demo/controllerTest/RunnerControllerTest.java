package com.example.demo.controllerTest;

import ch.qos.logback.classic.pattern.DateConverter;
import com.example.demo.model.Runner;
import com.example.demo.repository.RunnerRepository;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.transaction.annotation.Transactional;

import java.text.SimpleDateFormat;
import java.util.Date;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@SpringBootTest
@AutoConfigureMockMvc

public class RunnerControllerTest {

    @Autowired
    MockMvc mvc;

    @Autowired
    RunnerRepository repository;

    @Test
    @Transactional
    @Rollback
    void createRunner() throws Exception{

        MockHttpServletRequestBuilder request = post("/runner")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\n" +
                        "    \"name\": \"CARTER BENNETT\",\n" +
                        "    \"bib\": \"110\",\n" +
                        "    \"hours\": 5,\n" +
                        "    \"minutes\": 35,\n" +
                        "    \"seconds\": 40\n" +
                        "}");
        mvc.perform(request)
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name",is("CARTER BENNETT")));

    }
}
