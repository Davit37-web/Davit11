//1
function bigNumbersArray(arr,n){
    let result = [];
    for(let i = 0 ; i < arr.length ; i++){
        if (arr[i] > n){
            result.push(arr[i]);
        } 
    }
    if (result.length === 0 ){
        return 'Such values do not exist.';
    }
    return result;                
}
bigNumbersArray([],)
//2
