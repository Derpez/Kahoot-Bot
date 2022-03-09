//Copyright 2022 Derpez || Fair Use Allowed. Rebranding Allowed

//So far answering a question is manual and is answered thru the console. 
// Box answer order: 0 1
//                   2 3
//Answer with either 0, 1, 2, or 3 depending on the box of the answer. 
// To submit the answer hit Enter.

var Kahoot = require("kahoot.js-updated");
var colors = require('colors'); // If errors change var to const
var readline = require("readline-sync"); // If errors change var to const
var version = "v1.00 ";
var author = "by Derpez (Enter To Continue)";

// The questions asked at the beggining of the script. If name is changed it also has to change on the var = on line 12 - 15
let watermark = readline.question(colors.red.bold("FORCEPOINT " + version + author)); 
let pinasked = readline.question(colors.red.bold("Game Pin: ")); 
let nameasked = readline.question(colors.red.bold("Bot Name: "));
let botcountasked = readline.question(colors.red.bold("Number Of Bots(Don't Recommend Over 2000): "));

var kahoots = [];
var pin = pinasked;
var name = nameasked;
var bot_count = botcountasked;

for(var i=0; i<bot_count; i++){

  kahoots.push(new Kahoot);

  kahoots[i].join(pin, name + " " + String(i)).catch(error => {
    console.log("Failed To Join " + error.description + " " + error.status)
  });
  kahoots[i].on("Joined", () => {
    console.log("Successfully Joined Game...")
  });
  kahoots[i].on("QuestionStart", (question) => {
  console.log("A New Question Has started...");
  let answerasked = readline.question(colors.red.bold("Answer: "));
  question.answer(answerasked);
  });
  kahoots[i].on("QuizStart", () => {
  console.log("Quiz Started...");
  });
  kahoots[i].on("Disconnect", (reason) => {
    console.log("Disconnected From Game Because " + reason);
  });
}
