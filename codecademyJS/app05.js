let input = 'a whale of a deal!';
const vowels = ['a','i','u','e','o'];
let resultArray = [];
for(let i =0;i<input.length;i++){
  //console.log('i is '+i);
  for(let j=0;j<vowels.length;j++){
    //console.log('j is '+j);

    if(input[i] === vowels[j]){
      //console.log('i,j is '+input[i]);
       if(input[i] === 'u'){
         resultArray.push(input[i]);
         resultArray.push(input[i]);
       }else if(input[i] === 'e'){
          resultArray.push(input[i]);
         resultArray.push(input[i]);
      }else{
         resultArray.push(input[i]);
      }
    }
  }
}
console.log(resultArray);
let resultString = (resultArray.join('')).toUpperCase();
console.log(resultArray.join(''));
console.log(resultString);