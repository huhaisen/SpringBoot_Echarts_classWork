package com.homework.controller;

import com.homework.pojo.BarTestTable;
import com.homework.service.BarTestTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class BarTestTableController {

    @Autowired
    private BarTestTableService barTestTableService;

    @RequestMapping("/queryBarTestTableList")
    public List<BarTestTable> queryBarTestTableList(){
        return barTestTableService.list();
    }

}
