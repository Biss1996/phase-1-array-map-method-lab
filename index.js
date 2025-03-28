const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(" ").map(word => {
      // Handle special cases that require specific capitalization
      if (word.toLowerCase() === "oo") return "OO";
      if (word.toLowerCase() === "api") return "API";
      if (word.toLowerCase() === "nan") return "NaN";
      if (word.toLowerCase() === "jsonp") return "JSONP";

      // Capitalize first letter of each word
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
}
