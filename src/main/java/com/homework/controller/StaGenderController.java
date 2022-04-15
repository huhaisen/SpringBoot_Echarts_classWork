package com.homework.controller;

import com.homework.pojo.StaGender;
import com.homework.service.StaGenderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StaGenderController {

    @Autowired
    private StaGenderService staGenderService;

    @RequestMapping("/queryStaGender")
    public List<StaGender> queryStaGenderList(){
        return staGenderService.list();
    }
}
