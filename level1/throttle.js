function throttle(fn,delay=5000){
    let lasttime=0
    return function(){
        let nowtime=Date.now()
        if(nowtime-lasttime>delay){
            lasttime=nowtime
             fn.apply(this,arguments)
        }
    }
}
let text=document.querySelector('#text')
let result=document.querySelector('#result')
text.addEventListener('click',throttle(function(){
    result.innerHTML=text.value
}))