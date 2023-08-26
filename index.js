import PromptSync from "prompt-sync"
import chalk from "chalk"

const prompt = PromptSync()

console.log("Name input")

const name = prompt("Insert your name: ")

console.log(`Hello, ${name}`) 

const  valor1 = Number(prompt("Enter value #1: "))
const valor2 = Number(prompt("Enter value #2: "))

const total = valor1+valor2
console.log("Result is: " + chalk.green(total.toFixed(2)))