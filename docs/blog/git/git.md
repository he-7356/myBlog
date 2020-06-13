#我是git页面
1、Git的版本控制？
2、vue-axios
3、vue-router
4、vue的理解


后台管理系统的介绍：7434931.html
项目描述：
1、如何实现交互 axios的做法
https://www.cnblogs.com/zhouxiaohouer/p/8028485.html
//get:
            axios({
                method:'GET',
                url:'http://www.zhouxiaohouer.com/api/getsth',
                params:{
                    name:'黄焖鸡米饭',
                    price:34
                }
            }).then(res=>{
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })

        //post:
            axios({
                method:'POST',
                url:'http://www.zhouxiaohouer.com/api/poststh',
                data:{
                    name:'黄焖鸡米饭',
                    price:34
                },
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded'
                  },
                transformRequest: [function (data, headers) {
                    //转换data数据的数据格式，一般返回一个序列化的字符串
                    //axios内封装了一个qs模块，引入后可以直接转换
                    return data;
                }],
            }).then(res=>{
                console.log(res.data)
            }).catch(err=>{
                console.log(err)
            })

2、设置主要有什么功能
修改用户信息
3、报表如何做的

4、内容管理主要有哪些内容管理

如何搭建Apache+PHP+MySql ： 
https://www.cnblogs.com/xiaovw/p/8854896.html

博客网站：https://github.com/CB-ysx/myblog
Vue学习博客：https://www.w3cplus.com/blog/vue