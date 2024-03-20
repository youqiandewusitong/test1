function debounce(fn,delay=1000){
    let lasttime=0
    return function(){
        let nowtime=Date.now()
        if(nowtime-lasttime>delay){
            lasttime=nowtime
             fn.apply(this,arguments)
        }
        lasttime=nowtime
    }
}
let text=document.querySelector('#text')
let result=document.querySelector('#result')
text.addEventListener('click',debounce(function(){
    result.innerHTML=text.value
}))