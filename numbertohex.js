
let map  = {
  1 : 'I',
  4 : 'IV',
  5 : 'V',
  9 : 'IX',
  10 : 'X',
  40 : 'XL',
  50 : 'L',
  90 : 'XC',
  100 : 'C',
  400 : 'CD',
  500 : 'D',
  900 : 'CM',
  1000 : 'M'
};

var result  = '';

const numberToRoman = (num,map) => {
  
//function to get the literal  
   getLiteral= (higherbound) =>{
    if(num >= higherbound){
      let modulus = num % higherbound; 
      let quotient = (num /  higherbound)|0;
            
      for (let i=0; i<quotient ; i++){
        result+= map[higherbound];
      } 

      return numberToRoman(modulus,map)
    } 
  }
  
  
  //check the higher bound
  if (num!=0){
    let range = []
    let higherbound = 0; 

    for (var key in map){
      if (num>=key){

        range.push(key);
      }
    }
    higherbound = Math.max(...range);
    getLiteral(higherbound)
	}else{
  	console.log(result)
  }
}
numberToRoman(3549,map);
