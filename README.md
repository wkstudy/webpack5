# webpack5


## 错误记录
1. Cannot read property 'appendChild' of null
![问题](./pic/1.jpg)

解决：index.html里的js引入位置不对,应该放到body里面： [refer](https://blog.csdn.net/qq_43211839/article/details/96143587)