let num = "934902553";

if(num>0){
    let numString = num.toString().split('');
    //console.log(typeof(numString));
    for (let x = 0; x < numString.length-1; x++) { 
       for (let y = 0; y < numString.length-1; y++) {
       if(numString[y]<numString[y+1]){
        aux = numString[y];
		numString[y] = numString[y+1];
		numString[y+1] = aux;

       }
     }
    }
    console.log(numString.join(''));
    
   // for(let x = numString.length-1; x >=0; x--){ }
   
   
}else{
    console.log("no es posible hacer la operacion ");
}