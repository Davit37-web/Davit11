//1
function fibonacci (n){
    let result = [1,1];
    for(let i = 2 ; ;i++){
        if(n <= result[i-2] + result[i+1]){
            return result;
        }
        result.push(result[i-2] + result[i+1])
    }
}
fibonacci()
//2
function sumAndCal(n){
    let numberStr = n + '';
    let sum = 0, prod = 1, answer;
    if(n === 0 ){
        return 'Can not calculate'
    }
    for(let i = 0; i < numberStr.length; i++){
        sum += +numberStr[i];
        prod *= numberStr[i]
    }
    if(prod % sum === 0){
        answer = prod/sum;
        return `Quotient is ${answer}`
    } else{
        answer = prod%sum;
        return `Remainder is ${answer}`
    }
}
console.log(sumAndCal(5))
//3
function minMax (arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(max <= arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
    }
    if(arr.indexOf(max - min) === -1){
        return false
    } else {
        return true
    }
}
minMax()
//4
function secondMax(arr){
    let clone = arr.slice(0);
    for(let i = 0 ; i < clone.length-1 ; i++){
        if(clone[i] > clone[i+1]){
            let change = clone[i];
            clone[i] = clone[i+1];
            clone[i+1] = change;
        }
    }
    let secondMaxClone = clone[clone.length - 2]
    return arr.indexOf(secondMaxClone)
}
    
secondMax()
//5
function mixArr (array,padAmount,repeat){
    let start = [], startRepeat = [], end = [] , endRepeat = [];
    start = array.slice(0,padAmount);
    end = array.slice(array.length - padAmount);
    for(let i = 0 ; i < repeat ; i++){
        for(let j = 0 ; j < padAmount ; j++){
            startRepeat.push(start[i]);
            endRepeat.push(end[j])
        }
    }
    for (let i = 0 ; i < startRepeat.length ; i++){
        array.unshift(startRepeat[startRepeat.legnth - i - 1]);
        array.push(endRepeat[i])
    }
    return array;
}
mixArr() 
//skzbum drvac tver@ undefined em stanum
//6
function rec (n){
    let result = '';
    let char = ' * '
    for(i=0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
           result += char
        }
     result += '\n'
    }
    return result; 
}
console.log(rec(5))
//7
function rec (n){
    let result = '';
    let char = ' * '
    for(i=0 ; i < n ; i++){
        for(let j = 0 ; j < n ; j++){
            if(i === 0 || j===0 || i=== n-1 || j=== n-1){
               result += char;
            }else{
                result += '   '
            }
        }
     result += '/n'
    }
    return result; 
}
console.log(rec(5))













