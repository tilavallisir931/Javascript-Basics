// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number
function myFunction(a)
{
 let flag=true;
 let primeno=0;
 while(flag)   
 {
 flag=false;
 for(let i=2;i<=a/2;i++)
 {
     if(a%i==0)
     {
         flag=true;
         break;
     }
 }
 if(flag==false)
  primeno=a;
 else
  a++; 
} 
 return primeno; 
}
console.log(myFunction(2000));
