let findElement = (a,b) =>{
    
    for(let i=0;i<b.length;i++)
    {
      if(a==b[i]){
        return i;
      }
    }
    
  }
  
 console.log("[1,85,7,5,3,8,43] index of 8 is : "+ findElement(8,[1,85,7,5,3,8,43]));