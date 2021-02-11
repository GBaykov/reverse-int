module.exports = function reverse (n) {

 let result = "";
   let str = String(Math.abs(n));
 for (i= str.length-1; i >=0; i=i-1){
 result =  result +str[i] ;

 }
 return result;
}
