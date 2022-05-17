// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word
function myFunction(str)
{
let codes=[];
for(let i=0;i<str.length;i++)
{
 codes[i]=str.charCodeAt(i)+1;
}
let x='';
for(let i=0;i<codes.length;i++)
{
 x=x+String.fromCharCode(codes[i]);
}
return x;
}
