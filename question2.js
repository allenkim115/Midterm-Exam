/*Converts the string into an array of characters (split('')) and then reverses the array of characters.(reverse())
   Lastly joins the array back into a single string (join(''))
*/
function reverseString(str) {
    return str.split('').reverse().join(''); 
  }

console.log(reverseString("hello"));  // Output: "olleh"
