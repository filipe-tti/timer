var sec=0
var min=0
var interval
var hr =0

function twoDigits (digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return (digit)
    }

}

function start(){
    watch()
    interval = setInterval(watch,1)
}

function pause(){
    clearInterval(interval)
}

function stop(){
    clearInterval(interval)
    min = 0
    sec = 0
    document.getElementById('watch').innerText='00:00:00'
}


function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        
        if(min==60){
            hr++
            min = 0
        }

    }
    
    document.getElementById('watch').innerText= twoDigits(hr)+ ':'+ twoDigits(min)+':'+twoDigits(sec) 
}