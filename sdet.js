function isPalindrome(s=''){
  let substring = ""

  if (s.length == 1 || s.length == 0 ){ //words that are length 1 are considered a palindrome
    console.log("This IS a palindrome");
    return true;
  }
  else {
    if (s[0] === s[s.length -1 ]){
      substring = s.slice(1,(s.length-1)) //takes the 1st and last item of the array string and removes them 
      return (isPalindrome(substring)); //recurive function of the sliced string
    }
    else{
      return console.log("This is a NOT a palindrone");
    }

  }     
}

function reverseTheWords(s =''){
  const  arr= s.split(' '); //put this into an array
  let final= "";
  arr.reverse(); //JS has a built in reverse function
  for (let i =0; i< arr.length;  i++){
    final+= `${arr[i]} `; //add the words back into a string
  }
  console.log(final); 
}

function filterZeros(arrayOfNumbers=[]){
  let f = arrayOfNumbers.filter((n) => ( n!=0));  //JS has built in filter function if it meets the criteria in the callback funciton
  console.log(f);
}


let word = "tacocat";

isPalindrome(word);
reverseTheWords("This is a sentence");
filterZeros([1,6,0,0,0,7,9]);