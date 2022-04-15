package com.homework.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.homework.pojo.HotTopic;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface HotTopicMapper extends BaseMapper<HotTopic> {

 /*   List<HotTopic> queryHotTopicList();

    HotTopic queryHotTopicById();

    int addHotTopic(HotTopic hotTopic);

    int updateHotTopic(HotTopic hotTopic);

    int deleteHotTopic(HotTopic hotTopic);*/

}
