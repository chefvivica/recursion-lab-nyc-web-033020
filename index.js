// Code your solution here!

function printString(str){
  console.log(str[0])
  if(str.length > 1){
    let sub = str.substring(1, str.length)
    printString(sub)
  }else{
    "we are done"
  }
}


function reverseString(str){
  if(str < 2){
    return str
  }else{
    return reverseString(str.substring(1, str.length))+str[0] 
  }
}

function isPalindrome(str) {
  if(str.length < 2) {
    return true
  }
  else if(str[0] == str[str.length-1]){
      return isPalindrome(str.slice(1,str.length-2))
  }
  else{
    return false
  }
  
}