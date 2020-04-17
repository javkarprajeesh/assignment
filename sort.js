let sort = a =>{
  
    for(let i =0;i<a.length;i++)
    {
      for(let j=0;j<a.length;j++)
      {
        if(a[j]>a[j+1]){
        let temp = a[j];
          a[j]=a[j+1];
          a[j+1]=temp; 
        }
    }
  }
  
  return a;
  
  }
  
 console.log("the sorted array is " + sort([5,85,66,45,56]));