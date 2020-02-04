//1Xndir
var x = prompt('Your N1 number');
var y = prompt('Your N2 number');
if(x%y===0 || y%x===0){
    console.log(1);
} else {
    console.log(0);
};
//2Xndir
var a = prompt('Your N1 Angle');
var b = prompt('Your N2 Angle');
var c = 180 - a - b;
console.log(c);
//3Xndir
var n = prompt('Your number n') ;
var s = n+(Number(n)+Number(n))+(Number(n)+Number(n)+Number(n));
console.log(s)
//4Xndir
var n = prompt ('Your number n');
if (n % 10 === 0){
    console.log(n);
} else if (Math.floor(n / 10) === 0){
    console.log(n);
} else {
    var a = n % 10;
    var x = Math.floor(n/10);
    var s = String(a) + String(x);
    console.log(s)
}
//5xndir
var k = +prompt('Your number k');
var l = +prompt('Your number l');
var p = +prompt('Your number p');
var o = +prompt('Your number o');
var i = +prompt('Your number i');
var u = (k+l+p+o+i)/5;
console.log(u);
