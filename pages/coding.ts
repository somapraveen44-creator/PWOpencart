//swap two numbers without using a third variable
function swap(a:number,b:number):string{
let temp=b;
b=a;
a=temp;
return `a is ${a},b is ${b}`
}
//2nd
function swap1(a:number,b:number):string{
a=a+b;
b=a-b;
a=a-b;
return `a is ${a},b is ${b}`
}
function swap2(a:number,b:number):string{
a=a*b;
b=a/b;
a=a/b;
return `a is ${a},b is ${b}`
}
console.log(swap(1,3));
//reverse a number
function reverse(n:number):number{
let rev=0;
while(n>0){
  let num = n%10;
n =Math.trunc(n/10);
rev =rev*10+num;
}
  return rev;
}
console.log(reverse(123))
//palindrome number

function reversepn(n:number):boolean{
  let original=n;
let rev =0;
while(n>0){
  let num =n%10;
  n = Math.trunc(n/10);
  rev=rev*10+num;
}
if(original===rev){
  return true;
}
  return false;
}

console.log(reversepn(12321))
//reverse a string
function reverses(s:string):string{
let rev="";
for(let i=s.length-1;i>=0;i--){
 rev +=s[i];
}

return rev;
}
console.log(reverses("hello world"))

//palindorme string
function reverseps(s:string):boolean{
  let original =s;
let rev="";
for(let i=s.length-1;i>=0;i--){
 rev +=s[i];
}
if(original==rev){
  return true;
}
return false;

}
console.log(reverses("abcba"))

//count no of digits in a number
function count(n:number):number{
let count=0;
while (n>0){
  n=Math.trunc(n/10)
  count++
}
  return count;
}
console.log(count(9900559508))


//count even and odd digits in a number
function count1(n:number):{ecount:number,ocount:number}{
let ecount=0;
let ocount=0;
while (n>0){
  const num=n%10
  n=Math.trunc(n/10)
  if(num%2===0){
  ecount++}
  else{
    ocount++;
  }
}
  return {ecount,ocount};
}
console.log(count1(9900559508))

//count no of vowels and consonants in a string
function count2(s:string):{vcount:number,ccount:number}{
  let vcount=0;     
  let ccount=0;
  for(let i=0;i<s.length;i++){
    const char=s[i].toLowerCase();
    if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
      vcount++;
    }
    else if(char>='a' && char<='z'){
      ccount++;
    }
  }
  return {vcount,ccount};
}
console.log(count2("Hello World"))
// sum of digits in a number
function sum(n:number):number{
  let sum=0;
  while(n>0){
    const num =n%10;
    sum+=num;
    n=Math.trunc(n/10)
  }
  
  return sum;

}
console.log(sum(9900559508))
//largest of three numbers
function largest (x:number,y:number,z:number):number{

  if(x>y && x>z){
    return x
  }
  else if(y>z && y>x){
    return y
  }
  else{
    return z;
  }
}
console.log(largest(12,32,11))
//largest of three numbers using ternary operator
function largest1(x:number,y:number,z:number):number{
  return (x>y && x>z)?x:(y>z && y>x)?y:z;
}
console.log(largest1(12,32,11))
//fibonacci series
function fibonacci(n:number):number{
    let a=0;
    let b=1;
    let c=0;
    for(let i=2;i<n;i++){
        c=a+b;
        a=b;
        b=c;
    }
    return c;
}
console.log(fibonacci(10));
//prime number
function isPrime(n:number):boolean{
  if(n<=1) return false;
  for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i===0){
      return false;
    }
  }
  return true;
}
console.log(isPrime(17));
//Factorial of a number
function factorial(n:number):number{
  let fact=1;
  for(let i=1;i<=n;i++){
    fact*=i;
  }
  return fact;
}
console.log(factorial(5));