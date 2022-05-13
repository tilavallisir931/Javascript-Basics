// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b)
{
//first create a function to remove the % character
const remove=(s)=>s.replace('%','');  
//call function to remove % character from both a and b parameters
let ra=remove(a);
let rb=remove(b); 
//convert first string first letter to uppercase and remaining as it is
let fw=ra[0].toUpperCase()+ra.slice(1);
//reverse the second string by converting it into array
let revb=Array.from(rb).reverse().join('');
return fw+revb;
}


