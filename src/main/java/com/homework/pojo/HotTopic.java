package com.homework.pojo;

import lombok.Data;

@Data
//@NoArgsConstructor
//@AllArgsConstructor
public class HotTopic {

    private int topicId;
    private String topicName;
    private double positiveValue;
    private double negativeValue;

}
