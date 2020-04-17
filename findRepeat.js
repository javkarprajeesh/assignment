let findRepeat = a =>{
    let b = a.split("");
    console.log(b);
  
    for(let i=0;i<a.length;i++){
      for(let j=i+1;j<=a.length;j++){
        if(b[j]==b[i]){
          return b[i];
        }
      }
    }
    return null;
  }
  
  console.log("string Prajeesh and first repeated charracter is " + findRepeat("Prajeesh"));