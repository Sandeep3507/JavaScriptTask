// Task 1: Reverse every word in a sentence
function reverseWordsInSentence(sentence) {
  const words = sentence.split(' ');
  const reversedWords = words.map(word => reverseWord(word));
  const reversedSentence = reversedWords.join(' ');
  return reversedSentence;
}

function reverseWord(word) {
  return word.split('').reverse().join('');
}

// Task 2: Sort an array in descending order
function sortArrayDescending(arr) {
  return arr.sort((a, b) => b - a);
}

// Task 1 - Input and Output
const inputSentence = prompt("Enter a sentence:");
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log("Reversed Sentence:", reversedSentence);

// Task 2 - Input and Output
const inputArray = prompt("Enter an array (comma-separated numbers):").split(',').map(Number);
const sortedArray = sortArrayDescending(inputArray);
console.log("Sorted Array (Descending):", sortedArray);
