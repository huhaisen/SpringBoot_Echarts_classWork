package com.homework.controller;


import com.homework.pojo.StaProvinceDistribute;
import com.homework.service.StaProvinceDistributeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StaProvinceDistributeController {
    @Autowired
    private StaProvinceDistributeService staProvinceDistributeService;

    @RequestMapping("/queryStaProvinceDistribute")
    public List<StaProvinceDistribute> queryStaProvinceDistributeList(){
        return staProvinceDistributeService.list();
    }
}
