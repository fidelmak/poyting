var displayx = " Akintunde Oluborode";
var i = -2;
var speed = 50;

function type() {
  if (i < displayx.length) {
    document.getElementById("text").innerHTML += displayx.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

// Call the type() function to display the text
type();

const qutes =[
    '{
      title: "1. Lead Up: Lead Yourself",
      summary: "Chapter 1 focuses on the critical aspect of self-leadership. Maxwell argues that effective leadership begins with personal development and discipline. Leaders must take responsibility for their growth, set high standards, and demonstrate a commitment to continuous learning. By leading oneself effectively, leaders establish a strong foundation for influencing others.",
    },
    {
      title: "2. Lead Down: Be a Good Team Player",
      summary: "Leading those under you involves building strong relationships and fostering a positive team culture. Chapter 2 explores the importance of collaboration, support, and creating an environment where team members feel valued and empowered. Maxwell emphasizes that leadership is not about authority but about serving and lifting others up.",
    },
    {
      title: "3. Lead Across: Expand Your Influence",
      summary: "To lead peers effectively, leaders must embrace diversity, collaborate, and solve problems resourcefully. Chapter 3 delves into the dynamics of influencing colleagues positively and maintaining a constructive impact across the organization. It explores strategies for building trust and credibility in a lateral leadership role.",
    },
    {
      title: "4. Lead Across: Work with Those Over You",
      summary: "Building positive relationships with superiors is crucial for effective leadership. Chapter 4 discusses the dynamics of leading when accountable to those above you. Maxwell provides insights into managing expectations, solving problems proactively, and demonstrating reliability to earn the trust of superiors.",
    },
    {
      title: "5. Lead Across: Influence Up",
      summary: "Chapter 5 explores the art of influencing those in higher positions. Leaders can expand their impact by consistently demonstrating competence, being solution-oriented, and adding value to the organization. Maxwell provides practical strategies for gaining the trust and respect of superiors.",
    },
    {
      title: "6. Lead Across: Lead Across Organizationally",
      summary: "This chapter explores how leaders can extend their influence organization-wide. Chapter 6 emphasizes aligning personal goals with organizational objectives, understanding the broader context of leadership, and contributing to the overall success of the organization.",
    },
    {
      title: "7. Lead Across: Be a Leader Developing Leaders",
      summary: "Creating a leadership culture involves mentoring others and actively participating in leadership development. Chapter 7 discusses the significance of leaders fostering the growth of those around them, leaving a lasting legacy within the organization.",
    },
    {
      title: "Conclusion",
      summary: "In the conclusion, Maxwell reinforces the idea that a 360-degree leader plays a vital role in organizational success. Such leaders impact all levels of the organization, creating a positive and influential leadership culture that resonates throughout the entire workplace.",
    },
  ],



const quotes = [
  "The only way to do great work is to love what you do. - Steve Jobs",
  "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
  "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "Life is what happens when you're busy making other plans. - John Lennon",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
  "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "Life is really simple, but we insist on making it complicated. - Confucius",
  "Strive not to be a success, but rather to be of value. - Albert Einstein",
  "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
  "It does not matter how slowly you go, as long as you do not stop. - Confucius",
  "Life is short, and it's up to you to make it sweet. - Sarah Louise Delany",
  "The purpose of our lives is to be happy. - Dalai Lama",
  "The best way to predict the future is to create it. - Peter Drucker",
  "Life is what happens when you're busy making other plans. - Allen Sanders",
  "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey",
  "Life is either a daring adventure or nothing at all. - Helen Keller"
];
  

  const quots=[

  "function addTwoNumbers(a, b) { return a + b; }",

  `
  The difference between let, const, and var is in their scope and ability to be reassigned:
  - let: has block scope and can be reassigned within the block it's declared.
  - const: has block scope and cannot be reassigned after declaration.
  - var: has function scope and can be reassigned throughout the function or globally.
  `,

  "function factorial(n) { if (n === 0 || n === 1) { return 1; } return n * factorial(n - 1); }",

  "function isPrime(num) { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) { if (num % i === 0) return false; } return true; }",

  "function findLargestElement(arr) { return Math.max(...arr); }",

  `
  Closures in JavaScript refer to the ability of a function to remember and access
  variables from its outer (enclosing) scope even after the function has finished executing.
  `,

  "function reverseString(str) { return str.split('').reverse().join(''); }",

  "function removeDuplicates(arr) { return [...new Set(arr)]; }",

  `
  JavaScript handles asynchronous operations using callbacks, promises, and async/await.
  Callbacks were the traditional way, promises provided a better structure, and async/await
  simplifies the syntax for handling promises.
  `,

  "function findCommonElements(arr1, arr2) { return arr1.filter(element => arr2.includes(element)); }",

  `
  Event delegation in JavaScript is a technique where a single event listener is attached to a
  common ancestor, and through the event object, it can be determined which specific child
  element triggered the event.
  `,

  "function isPalindrome(str) { const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); const reversedStr = cleanedStr.split('').reverse().join(''); return cleanedStr === reversedStr; }",

  `
  The bind method in JavaScript is used to create a new function with a specified 'this' value,
  and optionally, a set of initial arguments. It allows for setting the context of the function
  and creating a new function with a fixed 'this' value.
  `,

  "function findSecondSmallestElement(arr) { const sortedArr = arr.sort((a, b) => a - b); return sortedArr[1]; }",

  `
  Prototypal inheritance in JavaScript involves objects inheriting properties and methods from
  their prototype objects. Each object has an internal reference to its prototype, forming a
  chain of prototypes.
  `,

  "function containsOnlyNumbers(str) { return /^\\d+$/.test(str); }",

  `
  Hoisting in JavaScript refers to the behavior where variable and function declarations are
  moved to the top of their containing scope during the compilation phase, allowing them to be
  used before they are declared.
  `,

  "function flattenArray(arr) { return arr.flat(); }",

  `
  The triple equals (===) operator in JavaScript checks both value and type equality,
  while the double equals (==) operator only checks value equality after type coercion.
  `,

  "function findIntersection(arr1, arr2) { return arr1.filter(element => arr2.includes(element)); }",

  "function findMissingNumber(arr) { const n = arr.length + 1; const totalSum = (n * (n + 1)) / 2; const arrSum = arr.reduce((acc, num) => acc + num, 0); return totalSum - arrSum; }",

  `
  The 'this' keyword in JavaScript refers to the current execution context. In the global scope, 'this'
  refers to the global object (window in browsers). In a function, 'this' depends on how the function
  is called. Arrow functions don't have their own 'this' and inherit it from the surrounding scope.
  `,

  "function countOccurrences(arr) { return arr.reduce((acc, element) => { acc[element] = (acc[element] || 0) + 1; return acc; }, {}); }",

  `
  The map function in JavaScript is used to transform each element of an array. It takes a callback
  function as an argument, applies the function to each element, and returns a new array with the results.
  `,

  "function generateRandomPassword(length) { const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let password = ''; for (let i = 0; i < length; i++) { const randomIndex = Math.floor(Math.random() * charset.length); password += charset[randomIndex]; } return password; }",

  // ... (continued for the remaining questions)

  "function findSmallestCommonMultiple(range) { const [min, max] = range.sort((a, b) => a - b); const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b)); const lcm = (a, b) => (a * b) / gcd(a, b); let multiple = min; for (let i = min + 1; i <= max; i++) { multiple = lcm(multiple, i); } return multiple; }",

  "function romanToInteger(roman) { const romanNumerals = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }; let result = 0; for (let i = 0; i < roman.length; i++) { const currentNumeral = romanNumerals[roman[i]]; const nextNumeral = romanNumerals[roman[i + 1]]; if (nextNumeral > currentNumeral) { result += nextNumeral - currentNumeral; i++; } else { result += currentNumeral; } } return result; }",

  `
  Lexical scoping in JavaScript means that the scope of a variable is determined by its position
  within the source code. Functions can access variables from their outer (enclosing) scope.
  `,

  "function calculateEvenFibonacciSum(limit) { let sum = 0; let prev = 1; let current = 1; while (current <= limit) { if (current % 2 === 0) { sum += current; } const temp = current; current += prev; prev = temp; } return sum; }",

  "function isValidURL(str) { try { new URL(str); return true; } catch (error) { return false; } }",

  "function longestIncreasingSubsequence(arr) { const dp = Array.from({ length: arr.length }, () => 1); for (let i = 1; i < arr.length; i++) { for (let j = 0; j < i; j++) { if (arr[i] > arr[j] && dp[i] < dp[j] + 1) { dp[i] = dp[j] + 1; } } } return Math.max(...dp); }",

  `
  The Object.create() method in JavaScript is used to create a new object with the specified prototype
  object and properties. It allows for creating objects that inherit directly from the specified prototype.
  `,

  "function sortByProperty(arr, property) { return arr.sort((a, b) => a[property] - b[property]); }",

  "function sliceStringAndAddEllipsis(str, maxLength) { return str.length > maxLength ? str.slice(0, maxLength - 3) + '...' : str; }",

  "function calculateHammingDistance(str1, str2) { let distance = 0; for (let i = 0; i < str1.length; i++) { if (str1[i] !== str2[i]) { distance++; } } return distance; }",

  "function generateRandomPermutation(arr) { const result = [...arr]; for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; } return result; }",

  "function findFirstNonRepeatingCharacter(str) { const charCount = new Map(); for (const char of str) { charCount.set(char, (charCount.get(char) || 0) + 1); } for (const char of str) { if (charCount.get(char) === 1) { return char; } } return null; }",

  `
  The typeof operator in JavaScript is used to determine the data type of a variable or expression.
  It returns a string indicating the data type, such as 'number', 'string', 'boolean', 'object', etc.
  `,

  "function isPalindromeNumber(num) { const numStr = num.toString(); const reversedNumStr = numStr.split('').reverse().join(''); return numStr === reversedNumStr; }",

  "function maxSubarraySum(arr) { let maxSum = 0; let currentSum = 0; for (const num of arr) { currentSum = Math.max(0, currentSum + num); maxSum = Math.max(maxSum, currentSum); } return maxSum; }",

  "function createQueue() { const queue = []; return { enqueue(item) { queue.push(item); }, dequeue() { return queue.shift(); }, isEmpty() { return queue.length === 0; }, }; }",

  `
  The Object.defineProperty() method in JavaScript is used to define a new property directly on an object,
  or modify an existing property, and return the object. It allows for fine-grained control over property attributes.
  `,

  "function calculateGCD(a, b) { return b === 0 ? a : calculateGCD(b, a % b); }",

  "function isBinarySearchTree(node, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) { if (!node) return true; if (node.value <= min || node.value >= max) return false; return isBinarySearchTree(node.left, min, node.value) && isBinarySearchTree(node.right, node.value, max); }",

  `
  The Object.freeze() method in JavaScript is used to freeze an object, preventing new properties from being added
  to it, existing properties from being removed, and values from being changed. It returns the frozen object.
  `,

  "function createLinkedList() { return { head: null, add(value) { const newNode = { value, next: null }; if (!this.head) { this.head = newNode; } else { let current = this.head; while (current.next) { current = current.next; } current.next = newNode; } }, }; }",

  "function countSetBits(num) { let count = 0; while (num) { count += num & 1; num >>= 1; } return count; }",

  `
  The Object.assign() method in JavaScript is used to copy the values of all enumerable own properties from
  one or more source objects to a target object. It returns the modified target objects '`
  
    
    ]
      function generateQuote() {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            const randomQuote = quotes[randomIndex];
            document.getElementById("quote").innerText = randomQuote;
        }


// No need to append the result of type() since it doesn't return anything

// Optionally, you can use the following line to append a text node to the element
// var display = document.getElementById("text").appendChild(document.createTextNode(displayx));
