package com.homework.controller;

import com.homework.pojo.HotTopic;
import com.homework.service.HotTopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HotTopicController {

    @Autowired
    private HotTopicService hotTopicService;

    /*@GetMapping("queryHotTopicList")
    public List<HotTopic> queryHotTopicList(){
        List<HotTopic> hotTopicList = hotTopicMapper.queryHotTopicList();
        for (HotTopic hotTopic: hotTopicList) {
            System.out.println(hotTopic);
        }

        return hotTopicList;
    }*/
    @RequestMapping("/queryHotTopicList")
    public List<HotTopic> queryHotTopicList(){
        return hotTopicService.list();
    }
}
