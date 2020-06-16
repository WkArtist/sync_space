const Mock = require('mockjs')
const data = Mock.mock({
    'list|16': [{
        'id|+1': 1,
        name: '前端第 @id 期',
        openDate: '@date'
    }]
}).list

const Class = require('../models/Class');
Class.bulkCreate(data);

