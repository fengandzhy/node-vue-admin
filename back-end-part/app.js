const express = require('express');
const app = express();

// 导入cors中间健
const cors = require('cors');

// 全局挂载
app.use(cors());

app.listen(3007, ()=>{
    console.log('http://127.0.0.1:3007');
});
