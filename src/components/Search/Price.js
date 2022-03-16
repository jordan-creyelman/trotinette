 const Price  =(arrayScooter,price) =>{
  price=Math.round(price)
  console.log(price)
  var i = 0;
  var results=[];
  var find = false; 
  var tour = false
  var pricePlus=0;
  while (i <arrayScooter.length&&find===false){  
          
      if(Math.round(arrayScooter[i].price)===price ||Math.round(arrayScooter[i].price)===pricePlus){
          results.push(i); 
      }
      if(results.length ===2){
        find =true;
      }
      if(i===arrayScooter.length-1&&find ===false){
        i=-1;
        price =price -1;
        if(tour ===false){
          tour =true
          pricePlus= price +2;
        }
        else{
           pricePlus+=1; 
        } 
    }
    i++;
  }  
  
  var x = 0;
  var y;
  var final_results=[];

  while (x<arrayScooter.length){
        y=0;
        while(y<results.length){
          if(x ===results[y]){
            final_results.push(arrayScooter[x]);
          }
          y++;
        }
       x++; 
  }
  return final_results;
  
}
export default Price