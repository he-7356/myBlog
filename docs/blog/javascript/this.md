# this 指向问题
### 想要理解this，你可以先记住以下两点：

1：this永远指向一个对象；

2：this的指向完全取决于函数调用的位置；

举例： 1、全局作用域 this=>window
```
<script>
   console.log(this); //this->window
</script>
```

2、在普通函数中：谁调用我，我就指向谁,
```
 var obj = {
            fn1:function() {
                console.log(this); 
            },
            fn2:function(){
                fn3() 
            }
        }
        function fn3() {
            console.log(this); 
        }
        fn3();//this->window
        obj.fn1();//this->obj
        obj.fn2();//this->window
```

3、箭头函数中的this
箭头函数没有自己的this，箭头函数的this就是上下文中定义的this，因为箭头函数没有自己的this所以不能用做构造函数。


4、事件绑定中的this
事件源.onclik = function(){ } //this -> 事件源

事件源.addEventListener(function(){ }) //this->事件源

```
var div = document.querySelector('div'); 
    div.addEventListener('click',function() {
        console.log(this); //this->div
    });
    
    div.onclick = function() {
    console.log(this) //this->div
    }
````

5、定时器中的this
定时器中的this->window，因为定时器中采用回调函数作为处理函数，而回调函数的this->window

```
setInterval(function() {
        console.log(this); //this->window 
    },500)
    
    setTimeout(function() {
        console.log(this); //this->window 
    },500)
原文链接：https://blog.csdn.net/chen_junfeng/article/details/109235442
```

6、构造函数配合new使用, 而new关键字会将构造函数中的this指向实例化对象，所以构造函数中的this->实例化对象

new关键字会在内部发生什么

```
//第一行，创建一个空对象obj。
var obj  ={};
//第二行，将这个空对象的__proto__成员指向了构造函数对象的prototype成员对象.
obj.__proto__ = CO.prototype;
//第三行，将构造函数的作用域赋给新对象，因此CA函数中的this指向新对象obj，然后再调用CO函数。于是我们就给obj对象赋值了一个成员变量p，这个成员变量的值是” I’min constructed object”。
CO.call(obj);
//第四行，返回新对象obj。
return obj;

```

```
function Person(name,age) {
        this.name = name;
        this.age = age;
    }
    var person1 = new Person();
    person1.name = 'andy';
    person1.age = 18;
    console.log(person1);//Person {name: "andy", age: 18}
    var person2 = new Person();
    person2.name = 'huni';
    person2.age = 20;
    console.log(person2);// Person {name: "huni", age: 20

```

::: tip 提示
原文链接：https://blog.csdn.net/chen_junfeng/article/details/109235442
:::
