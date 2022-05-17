// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string
function myFunction(a, b)
{
 const rev=a.split('').reverse();
 let temp='';
 rev.forEach((value,index)=>{
  if(index%3==0 && index>0)
   temp=temp+b+value;
  else
    temp=temp+value;   
 });
 const result=temp.split('').reverse().join('');
 return result;
}
