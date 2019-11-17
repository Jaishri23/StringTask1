//Reverse the words of a string
function reverseString1(){
var input="hello how are you";
var str=input.split("");
var len=str.length;
var first=0; var temp;
var count=0;
for(var i=0;i<len;i++){
    if(str[i]!=' ' && i!=len-1){
        count++;
    }
    else{
        temp=str[count-1];
        str[count-1]=str[first];
        str[first]=temp;
        first=i+1;
        count++;
    }   
}
for(var i=0;i<len;i++){
        console.log(str[i]);
    }
}
reverseString1();

