// This script checks if the input string is a palindrome and updates the result on the page.
document.getElementById('check-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('text-input').value.trim();
    const resultDiv = document.getElementById('result');

    if (!inputValue) {
        alert('Please input a value.');
        return;
    }

    // Normalize the input: remove non-alphanumeric characters and convert to lowercase
    const normalizedInput = inputValue.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = normalizedInput.split('').reverse().join('');

    // Check if the normalized input is a palindrome
    if (normalizedInput === reversedInput) {
        resultDiv.textContent = `${inputValue} is a palindrome.`;
    } else {
        resultDiv.textContent = `${inputValue} is not a palindrome.`;
    }

    // Make the result visible
    resultDiv.classList.remove('hidden');
});