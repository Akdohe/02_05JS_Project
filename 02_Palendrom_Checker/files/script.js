const input = document.getElementById("ip")

function reverseString(str){
    //take string conert to array and reverse it if meaning of word is same then its an palendrom
    return str.split("").reverse().join("")
}
function check(){
    const value = input.value;
  //  alert(value) palendrom means same spealling when reverse the word or string 
const reverse = reverseString(value)
if(value === reverse){
    alert ("P A L E N D R O M")
}else{alert("Not Palendrom")}
// clearing the value from ip field
input.value= ""


}