var sec=0
var min=0
var interval
var hr =0

var isRunning = false

const twoDigits  = (digit) =>{
    if(digit<10){
        return('0'+digit)
    }else{
        return (digit)
    }

}

const start = ()=> {
    
    if(!isRunning){
        watch()
        interval = setInterval(watch,1) 
        
    }

    isRunning = true
    
}

const pause =() =>{
    clearInterval(interval)
    isRunning=false
}

const stop=()=>{
    clearInterval(interval)
    min = 0
    sec = 0
    document.getElementById('watch').innerText='00:00:00'
    isRunning=false
}


const watch = ()=> {
    sec++
    if(sec==60){
        min++
        sec=0
        
        if(min==60){
            min = 0
            hr++
        }

    }
    
    document.getElementById('watch').innerText= twoDigits(hr)+ ':'+ twoDigits(min)+':'+twoDigits(sec) 
}