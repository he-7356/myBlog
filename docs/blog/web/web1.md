
<h3>Promise 执行流程</h3>

1.当新对象保持“pending”状态时，原Promise链将会中止执行。

2.return new Promise(()=>{}); // 返回“pending”状态的Promise对象

3.从如何停掉 Promise 链说起(promise内存泄漏问题)
 

    promise 放在try catch里面有什么结果

1.Promise 对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也即是说，错误总会被下一个catch语句捕获

2.当Promise链中抛出一个错误时，错误信息沿着链路向后传递，直至被捕获