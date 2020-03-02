//1
function getSign (a,b,c){
    let result ;
    let counter = 0 ;
    let arguments = [a,b,c];
   for (let i = 0 ; i  3 ; i++){
       if(arguments[i]  0 ){
           counter ++ ;
       } else if (arguments[i] === 0 ){
           result = 'unsigned';
           return result;
       }
   }
      if(!counter%2){
          result = '+';
      } else{
          result = '-'
      }    
      return result
}
getSign()
//2
function includes (digit,number){
    let strNumber = String(number);
    for ( let i = 0 ; i strNumber.length ; i++){
        if(strNumber[i] == digit){
            return 'Yes'
        } 
    }
          return 'No'
}
includes()
//3
function reverse(number){
    let result = '';
    let strNumber = String(number);
    result = result + strNumber[strNumber.length - 1];
    for(let i = 1; i  strNumber.length - 1 ; i++ ){
        result = result + strNumber[i];
    }
    result = result + strNumber [0];
    return Number(result);
}
reverse()
//4
function sort(a,b,c){
    let array = [a,b,c]
    let isMoved = true;
    while(isMoved){
        isMoved = false;
        for(let i = 0 ; i < array.length-1;i++){
            if(array[i] > array[i+1]){
                isMoved = true;
                let change = array[i];
                array[i] = array[i+1];
                array[i+1] = change;
            }
        }
    }
    return array
}
sort()
//5
var n = +prompt();
var i =0;
var j = 0;
if(n % 2 === 0 && !Math.floor(n/10)){
    i +=1
}
if(n % 3 === 0 && n % 10 === 1){
    j +=1
}
//6
function area (string, a,b){
    if(a === 0 || b === 0){
        return 'Please enter only positive'
    }
    if(string === 'triangle'){
        return (a*b)/2
    }
    if(string === 'rectangle'){
        return a*b
    }
    
}
area()
//7
function difference (number){
    let strNumber = number + '';
    let arrNumber = strNumber.split('')
    let max = arrNumber[0]
    let min= arrNumber[0]
    for(let i = 0 ; i < arrNumber.length ; i++){
    if(max <= arrNumber[i]){
        max = arrNumber[i]
    }
    if(min > arrNumber[i]){
        min = arrNumber[i]
    }
}
return max - min
    
}
difference()
