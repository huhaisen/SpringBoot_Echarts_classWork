package com.homework.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.homework.pojo.BarTestTable;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface BarTestTableMapper extends BaseMapper<BarTestTable> {
}
