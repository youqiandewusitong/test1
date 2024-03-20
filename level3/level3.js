// 第一步
// 1、执行console.log(1),输出1
// 2、执行foo()，先执行console.log('start');
// 由于await bar()则暂且先执行bar()(bar为同步)执行console.log("bar")，后面再执行console.log('end')(微任务)
// 3、setTimeout为宏任务，后面再执行
// 4、然后执行Promise里面的操作，首先执行同步任务(console.log("p1"))
// console.log("p2")位于.then后面为微任务后面在执行
// 5、执行console.log(2)主线直接执行

// 综上第一步先执行console.log(1)、console.log('start')、console.log("bar")console.log("p1")、console.log(2)

// 第二步
// 1、先执行微任务
// 从上到下先console.log('end')再console.log("p2")
// 2、再完成宏任务
// 执行console.log("time")


// 最后的顺序为`1 start bar p1 2 end p2 time`
async function foo() {
    console.log("start");
    await bar();
    console.log("end");
}

async function bar() {
    console.log("bar");
}

console.log(1);

setTimeout(() => {
    console.log("time");
});

foo();

new Promise((resolve) => {
    console.log("p1");
    resolve();
}).then(() => {
    console.log("p2");
});

console.log(2);

