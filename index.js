#! user/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.94,
    BHD: 0.38,
    PKR: 278,
    INR: 83,
    GBP: 0.8,
};
let user_answer = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "BHD", "PKR", "INR", "GBP"],
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "BHD", "PKR", "INR", "GBP"],
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    },
]);
let fromAmount = currency[user_answer.from];
let toAmount = currency[user_answer.to];
let amount = user_answer.amount;
let baseAmount = amount / fromAmount;
let covertedAmount = baseAmount * toAmount;
console.log(covertedAmount.toFixed(2));
