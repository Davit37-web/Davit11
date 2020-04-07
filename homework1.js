//1
function printX(n){
  let res  = '';
	for(let i = 1; i < 2*n; i++){ 
			for(let j = 1; j < 2*n; j++){   
				 if(i==j || j==2*n-i) {
                        res += '*'
                 } else{ 
                        res += ' '
                        }
			      }
		        res += '\n';
	        }	
	        return res;
                    }
console.log(printX(5))
//2
function printFrequency(arr){
    let counter = [];
    let prev;
    let i = 0;
    let obj = {};
    arr.forEach(key => obj[key] = '');
    for(let j = 0; j < arr.length; j++){
        if(arr[j] !== prev) {
            counter.push(1);
        } else {
                counter[counter.length - 1] ++;
        }
        prev = arr[j];
        }
    for( let key in obj) {
        obj[key] = counter[i]/arr.length;
        i++
    }
        return obj;
}
printFrequency([])
//3
function numbersAndStrings(arr){
    let counter1 = 0;
    let counter2 = 0;
    for(let i = 0; i < arr.length; i++){
        if(typeof(arr[i]) === 'number'){
            counter1++
        } else if (typeof(arr[i]) === 'string'){
            counter2++ 
        }
    }
    return `Numbers : ${counter1} , Strings : ${counter2} `
}
numbersAndStrings([])
//4
function longestWord(sentence){
    let arr = sentence.split(' ');
    let longest = 0;
    let maxStr;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > longest){
            longest = arr[i].length;
            maxStr = arr[i];
        }
    }
    return maxStr;
}
longestWord('');
//5
function longestLastSubString(sentence) {
    let result = '';
    for(let i = 0; i<sentence.length ; i++ ){
        let longSubstr = '';
    for(let j = 1; i<sentence.length ; j++ ){
        if(longSubstr.indexOf(sentence[j])  === -1 || sentence[j] === ' '){
            longSubstr += sentence[j];
        } else {
            break;
        }
    }
    if( longSubstr >= result.length) {
        result = longSubstr;
    }
    }
    return result  
}
longestLastSubString(''); //Ays xndir@ lav chei haskacel,qo bacatrac dzevnem grel Davit jan
//6
function codeChars(str) {
    let codeArr = [];
    for(let i = 0 ; i < str.length; i += 3){
        codeArr.push(str.slice(i, i+3));
    }
    for(let j = 0 ; j < codeArr.length ; j++){
        if(codeArr[j].length === 3 ){
            let firstLetter = codeArr[j][0];
            codeArr[j] = codeArr[j].slice(1);
            codeArr[j] = codeArr[j] + firstLetter;
        }
    }
   let result = codeArr.join('');
   return result
}
codeChars('');
//7 && 8 nayelem


