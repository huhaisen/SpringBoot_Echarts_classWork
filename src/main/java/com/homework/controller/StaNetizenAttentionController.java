package com.homework.controller;

import com.homework.pojo.StaNetizenAttention;
import com.homework.service.StaNetizenAttentionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.sql.SQLOutput;
import java.util.List;

@RestController
public class StaNetizenAttentionController {
    @Autowired
    private StaNetizenAttentionService staNetizenAttentionService;

    @RequestMapping("/queryStaNetizenAttention")
    public List<StaNetizenAttention> queryStaNetizenAttentionList(){
        return staNetizenAttentionService.list();
    }
}
