import PromptSync from "prompt-sync"
import chalk from "chalk"
import {parse, isValid} from "date-fns"

const prompt = PromptSync()

let salary = Number(prompt("Insert your salary: "))
let percent = Number(prompt("Insert percentage to increase salary: "))
let newSalary = salary*(1+percent/100)

console.log(`This is the new salary: ${chalk.green(newSalary.toFixed(2))}`)

const hoje = new Date()
let birthDate = parse(prompt("Enter your birthDate: "), "dd/MM/yyyy", new Date())

if (!isValid(birthDate)) {
    console.log("Invalid date")
} else {
    console.log(`Your age is: ${hoje.getFullYear()-birthDate.getFullYear()}`)
}

