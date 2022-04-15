package com.homework.controller;

import com.homework.pojo.StaWordFrequency;
import com.homework.service.StaWordFrequencyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StaWordFrequencyController {

    @Autowired
    private StaWordFrequencyService staWordFrequencyService;

    @RequestMapping("/queryStaWordFrequency")
    public List<StaWordFrequency> queryStaWordFrequencyList(){
        return staWordFrequencyService.list();
    }
}
