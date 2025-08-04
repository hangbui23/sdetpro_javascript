const readLine = require('readline-sync');

let bankAccount1 =
{
    accountNumber: '123456',
    routingNumber: '34567890',
    balance: 1000
};

let bankAccount2 = JSON.parse(JSON.stringify(bankAccount1));
bankAccount2.accountNumber = '5689321';

let bankAccounts = [bankAccount1, bankAccount2]

function findAccountNumber(accountNumner) {
    return bankAccounts.find(acc => acc.accountNumber === accountNumner);
}

function updateBalance(account, amount) {
    if (Number.isNaN(amount) || amount <= 0) {
        console.log('Invalid amount. Please enter a valid number greater than 0.');
    } else if (account.balance >= amount) {
        account.balance -= amount;
        console.log(`Balance updated successfully. New balance is ${account.balance}`);
    } else {
        console.log('Insufficient balance. Please enter a valid amount.');
    }
}

function displayAccount(account) {
    console.log('Account Number: ' + account.accountNumber);
    console.log('Balance: ' + account.balance);
}

let choice = -1;
while (choice !== 0) {
    console.log('======== Banking Application =========');
    console.log('1. Find an account');
    console.log('2. Update balance');
    console.log('0. Exit the program');
    const choice = Number(readLine.question('Input your choice: '));
    if (choice === 0) {
        console.log('Exiting the program...');
        break;
    }
    else {
        let accountNumber = readLine.question('Input your account number: ');
        let account = findAccountNumber(accountNumber);
        switch (choice) {
            case 1:
                if (account) {
                    displayAccount(account)
                }
                else {
                    console.log(`Account ${accountNumber} not found!`);
                }
                break;
            case 2:
                if (!account) {
                    console.log(`Account ${accountNumber} not found!`);
                }
                else {
                    const amount = Number(readLine.question('Input your amount: '));
                    updateBalance(account, amount);
                }
                break;
            default:
                console.log('Invalid choice, please try again.');
        }
    }
}



