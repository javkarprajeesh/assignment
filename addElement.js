addElement = () =>{
    let addElements = a =>{
        let sum = 0;
        for(let i=0;i<a.length;i++){
          sum=sum+a[i];
        }
        return sum;
      }
      
      console.log(addElements([2,4,6,5]));
}