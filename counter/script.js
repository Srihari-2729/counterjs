const countvalue=document.getElementById("count")
console.log(countvalue.textContent)
let c=0
function incr(){
    if(c<20){
        c++
        countvalue.textContent=c
    }else{
        alert("Maximum Number Limit Reached")
    }
}
function decr(){
    if(c>0){
        c--
        countvalue.textContent=c
    }else{
        alert("Minimum Number Limit Reached")
    }
}
function rese(){
    c=0
    countvalue.textContent=c
}