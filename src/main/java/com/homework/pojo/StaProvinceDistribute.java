package com.homework.pojo;

import lombok.Data;

import java.util.Date;

@Data
public class StaProvinceDistribute {
    private int stapdId;
    private String stapdProvinceName;
    private String stapdSentimentNum;
    private Date stapdDate;
}
