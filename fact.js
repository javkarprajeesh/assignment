fact = (num) =>{
    if (num==0){
        return 1
    }
    if (num < 0 ){
        return "Not a valid input"
    }
    return num*fact(num-1)
}


console.log(fact(5))