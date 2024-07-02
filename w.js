#! usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.bgWhite.bgCyanBright("\n\t\t\t WORD COUNTER\n"));
console.log("*".repeat(70));
let ans = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your sentence..."
    }
]);
let words = ans.sentence.trim().split(" ");
console.log("*".repeat(70));
console.log(chalk.bold("\n\n=> Words:\n ", words));
console.log(chalk.bold(`\n => Word Count:${words.length}`));
console.log("\n\t\t\t--Thank you--");
