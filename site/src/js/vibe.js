
const phrases = [
  'Hi there, code monkey',
  'Time for Coffee!',
  'You are getting very sleeepy!',
  'I will now barf in your shoes...'
];

let vibe = phrases[Math.floor(Math.random() * Math.floor(phrases.length))]

document.querySelector(".vibe").append(vibe)

console.log(vibe);