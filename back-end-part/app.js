const express = require('express');
const app = express();

// const http = require('http');
// const port = '3000';
//
// let app = http.createServer((req,res)=>{
//     res.end('Hello world');
// });

app.listen(3007, ()=>{
    console.log('http://127.0.0.1:3007');
});
