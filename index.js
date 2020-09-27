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
   let sub = str.substring(0, str.length)
    return str[length-1]+ sub
    if(sub.length >1){
      return reverseString(sub)
    }else{
      return -1
    }
  
}