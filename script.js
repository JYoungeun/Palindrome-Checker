const userInput = document.getElementById("text-input");
const palindromeCheck = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkForPalindrome = input => {
    const originalInput = input;
  
    if (input === '') {
      alert('Please input a value');
      return;
    }
    // if (input === ''): Checks if input is empty. If so, alert and exit function.
  
    resultText.replaceChildren(); 
    // Clears any existing content inside `resultText`
  
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();
    // Creates new string from 'input', removes non letters/numbers, then converts lowercase.

    let resultMsg = `<strong>${originalInput}</strong> ${
      lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;
    // lowerCaseStr === [...lowerCaseStr].reverse().join('') checks if same as reverse.
    // join('') converts the reversed array back into a string.
    // If reversed string === original, adds "is" to message, otherwise "is not".

    const pTag = document.createElement('p');
    pTag.className = 'user-input';
    pTag.innerHTML = resultMsg;
    resultText.appendChild(pTag);
    // Creates new p element pTag, sets class to user-input, and inerts resultMsg.
    // Appends new p to resultText to display result on page.
  
    resultText.classList.remove('hidden');
    // Removes the hidden class from resultText to ensure it is visible on the page.
  };

palindromeCheck.addEventListener("click", () => {
    checkForPalindrome(userInput.value);
    userInput.value = '';
});

userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkForPalindrome(userInput.value);
        userInput.value = '';
    }
  });