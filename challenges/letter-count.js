function stringCount(stringToSplit) {
  var arrayOfStrings = stringToSplit.split('');//splits into array
  var sortedString = arrayOfStrings.sort();//sorts array alphabetically
  var current = null;
  var count = 0;
  for (var i = 0; i < sortedString.length; i++) {
      if (sortedString[i] != current) {
          if (count > 0) {
                console.log(current + ' = ' + count);
                console.log(current + ' = ' + count/sortedString.length);//% bonus
              }
              current = sortedString[i];//
              count = 1;//if only one character
          } else {
              count++;//adds on
          }
      }
      if (count > 0) {
          console.log(current + ' = ' + count);//puts out repetition value
          console.log(current + ' = ' + count/sortedString.length);//% bonus
      }
}
//notesc

// document.write
// function letterCount(words){
//   for (var i = 0; i > words.length; i++){

/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
