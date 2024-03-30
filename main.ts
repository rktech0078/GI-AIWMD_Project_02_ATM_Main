#! /usr/bin/env node

import inquirer from "inquirer";

let myPin: number = 5949;
let myBalance: number = 10000;

let answerPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin: ",
  },
]);

if (answerPin.pin === myPin) {
  console.log("Correct Pin");

  let answerOperations = await inquirer.prompt([
    {
      name: "operators",
      type: "list",
      message: "Select Your Operation: ",
      choices: ["withdraw", "check balance", "fast cash"], // Corrected "fact cash" to "fast cash"
    },
  ]);

  if (answerOperations.operators === "withdraw") {
    let answerAmount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter your amount: ",
      },
    ]);

    if (answerAmount.amount < myBalance) {
      myBalance -= answerAmount.amount;
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log("Insufficient balance");
    }
  } else if (answerOperations.operators === "check balance") {
    console.log(`Your current balance is ${myBalance}`);
  } else if (answerOperations.operators === "fast cash") {
    let answerFastCash = await inquirer.prompt([
      {
        name: "Fast",
        type: "list",
        message: "Select your cash: ",
        choices: ["500", "1000", "5000"],
      },
    ]);

    const fastCashAmount = parseInt(answerFastCash.Fast); // Convert to number

    if (fastCashAmount > 0 && fastCashAmount <= myBalance) {
      myBalance -= fastCashAmount;
      console.log(`Your remaining balance is ${myBalance}`);
    } else {
      console.log("Invalid amount or insufficient balance");
    }
  }
} else {
  console.log("Invalid Attempt");
}
