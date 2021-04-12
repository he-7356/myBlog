# 遇见 react setState 同步异步分析

### 在日常工作中遇到了 setState 同步异步的总结

一、合成事件和生命周期函数里是异步的

二、在原生事件和 setTimeout 里是同步的

三、异步 setState 可能会被合并的问题

同时，异步的 setState 中还有一个问题，就是进行多次相同的异步 setState 操作时，更新前会被合并。

```
onChange = () => {
this.setState({
count: this.state.count + 1,
},() => {
console.log("this.state.count :>> ", this.state.count);
});

    this.setState({
      count: this.state.count + 1,
    },() => {
      console.log("this.state.count :>> ", this.state.count);
    });

    this.setState({
      count: this.state.count + 1,
    },() => {
      console.log("this.state.count :>> ", this.state.count);
    });

    this.setState({
      count: this.state.count + 1,
    },() => {
      console.log("this.state.count :>> ", this.state.count);
    });

};
```

::: tip 提示
this is a tip
:::
