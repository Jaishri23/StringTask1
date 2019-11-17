//Reverse the string 
//Method 1
function reverseString(){
   //var input="hello";
   var input="hello how are you";
   var tocharArray=input.split("");
   //console.log(tocharArray);
   console.log(input.length);
   var left=0;
   var right=tocharArray.length-1;

   for(left=0;left<right;left++, right--){
       var temp=tocharArray[left];
       tocharArray[left]=tocharArray[right];
       tocharArray[right]=temp;
       //console.log(tocharArray)
   }
   var newstring=tocharArray.join("");
   console.log(newstring);
   }

reverseString();


//////////////////////////////////////////////////////////////
//Method 2
var input1="helloo";
var splitarray=input1.split("");
var reversearry=splitarray.reverse();
var newstring1=reversearry.join("");
console.log(newstring1);