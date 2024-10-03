// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    let cleanedStr = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
    // Check if the cleaned string is the same forwards and backwards
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

document.getElementById('check-btn').addEventListener('click', function () {
    let inputText = document.getElementById('text-input').value;
    let resultElement = document.getElementById('result');

    // Check if input is empty
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    // Check if the input is a palindrome
    let palindromeCheck = isPalindrome(inputText);
    if (palindromeCheck) {
        resultElement.textContent = `${inputText} is a palindrome`;
    } else {
        resultElement.textContent = `${inputText} is not a palindrome`;
    }
});
