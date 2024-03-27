#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let user_answer = await inquirer.prompt([
    {
        type : 'string',
        name : 'userId',
        message : 'please Entre you ID?'
    },
    {
        type : 'number',
        name : 'pincode',
        message : 'Please Entre your pincode?'
    },

    {
        type : 'list',
        name : 'AccountType',
        message :'Please Select your account type?',
        choices : ['Current', 'Saving'],
    },

    {
        type : 'list',
        name : 'transactiontype',
        message : 'please select your transaction type?',
        choices : ['Withdrawal', 'Fast cash', 'Check balance']

    },

    {
        type : 'list',
        name : 'amount',
        message: 'Please select your amount',
        choices : [1000, 2000, 5000, 7000,1000],
        when(user_answer) {
            return user_answer.transactiontype === 'Fast cash'
            
        },
    },

    {
        type : 'number',
        name : 'amount',
        message: 'Please Entre your amount',
        when(user_answer) {
            return user_answer.transactiontype === 'Withdrawal'
            
        },
    }


]);

console

if (user_answer.pincode) {

    const balance :number = 10000;
    const entre_amount = user_answer.amount;

    if (entre_amount <= balance) {

        let remaining = balance - entre_amount;

        console.log(chalk.green(`you have Withdrawal ${entre_amount} RS. and your remaining balance is ${remaining} RS.`));
        
    }else if (user_answer.transactiontype === 'Check balance') {
        console.log(chalk.blue(`Your balance is ${balance}`))
        
    }else{
        console.log(chalk.red('insuficient balance'));
    };

   


};

