const numbers =[1,2,0,0,4,6,7,8,9,0,3,7,0,12,14]

function moveZeros(){
    const nonZeros = numbers.filter(number=> number !==0 );
    const zeros =    numbers.filter(number=> number ===0 );
    return [...nonZeros, ...zeros]

}
console.log(moveZeros())


function reverseWord(){
   const word = "Hello  World";
   const chars = word.split('');
   const swappedChars = chars.map(char=>{
    if(char === char.toLowerCase()){
        return char.toUpperCase()
    }else{
        return char.toLowerCase()
    }
   })
   console.log(swappedChars);
  let result = swappedChars.join(' ');
  
  console.log(result)

}
  
reverseWord()
