// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b)
{
let count=0;
let pos=-1;
while((pos=b.indexOf(a,pos+1))>-1)
{
 count++;
 console.log(pos);
}
return count;
}
