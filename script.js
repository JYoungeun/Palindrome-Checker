const userInput = document.getElementById("text-input");
const palindromeCheck = document.getElementById("check-btn");
const resultText = document.getElementById("result");

const checkForPalindrome = input => {
    const originalInput = input;
  
    if (input === '') {
      alert('Please input a value');
      return;
    }
  
    resultText.replaceChildren(); 
  
    const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, '').toLowerCase();

    let resultMsg = `<strong>${originalInput}</strong> ${
      lowerCaseStr === [...lowerCaseStr].reverse().join('') ? 'is' : 'is not'
    } a palindrome.`;

    resultText.innerHTML = `<p>${resultMsg}</p>`;
  
    resultText.classList.remove('hidden');
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
