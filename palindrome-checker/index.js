const inputElement = document.querySelector('.js-input');
const checkButton = document.querySelector('.js-check-button');
const resultElement = document.querySelector('.js-result-label');

checkButton.addEventListener('click', () => {
  const value = inputElement.value;
  inputElement.value = '';
  // Palindrome is a word that is like its reverse, i.e. dad
  const reversed = [...value].reverse().join('');
  if (value !== '') {
    if (reversed === value) {
      resultElement.innerHTML = `'${value}' is a Palindrome 👍🏼`;
    } else {
      resultElement.innerHTML = `'${value}' is NOT a Palindrome! ❌`;
    }
  }
});
