//模拟服务器返回数据 --开始
var appData=require('../data.json');
var find=appData.find;
var home=appData.home;
var infor=appData.infor;
var my=appData.my;
var webpack = require('webpack');
var express=require('express');
var app=express();

var apiRoutes=express.Router();

apiRoutes.get('/find',function(req,res){

  res.json({
    errno:0,
    data:find
  });
});
apiRoutes.get('/home',function(req,res){

  res.json({
    errno:0,
    data:home
  });
});
apiRoutes.get('/infor',function(req,res){

  res.json({
    errno:0,
    data:infor
  });
});
apiRoutes.get('/my',function(req,res){

  res.json({
    errno:0,
    data:my
  });
});

app.use('/api',apiRoutes);