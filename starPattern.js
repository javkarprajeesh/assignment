starPattern = (n) =>  {

    for (i = 1; i <= n; i++) {
     let row = '';
  
      for ( j = 1; j <= i; j++) {
        row += '*';
      }
  
      console.log(row);
    }
  }


  starPattern(5);