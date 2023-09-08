//ordenar de mayor a menor y sacar su cuadrado
const num=[2,1,4,10,7,10];


    for(i=1;i<num.length;i++){
      for(j=0;j<i;j++){
        if (num[i]<num[j]) {
           
          //console.log("hola");
          numNew=num[j];
          num[j]=num[i];
          num[i]=numNew;          
        }       
      }
    }
    for(i=0;i<num.length;i++){
      num[i]=Math.pow(num[i],2);  
    }
    console.log(num);


