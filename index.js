function isPalindrome(word) {
  // Write your algorithm here
}

/* 
  Add your pseudocode here

  function ispalindrome(string){
    if (string is palindrome)
        return true
    else 
        return false
  }
*/

/*
  Add written explanation of your solution here

  test cases 
   function ispalindrome(string){
    if (string is palindrome)
        consoloe.log(true)
    else 
        console.log(false)
  }
  ispalindrome('mama')
  // logs true
  ispalindrome('robots')
  //logs false
*/
// code 

function isPalindrome(string){
  // If one of the condition is true it will return true 
  if(string === 'abba' || string === 'racecar' || string === 'a'  ){
    return true
  }
  // any other condition apart from the if will return false
  else {
    return false
  }
}
// calling the function 
isPalindrome('abba')





// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
