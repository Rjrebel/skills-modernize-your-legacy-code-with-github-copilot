// Node.js implementation of COBOL student account management system
// Preserves business logic, data integrity, and menu options

const readline = require('readline');

let storageBalance = 1000.00;

function displayMenu() {
  console.log('--------------------------------');
  console.log('Account Management System');
  console.log('1. View Balance');
  console.log('2. Credit Account');
  console.log('3. Debit Account');
  console.log('4. Exit');
  console.log('--------------------------------');
}

function readBalance() {
  return storageBalance;
}

function writeBalance(newBalance) {
  storageBalance = newBalance;
}

function creditAccount(amount) {
  writeBalance(readBalance() + amount);
  console.log(`Amount credited. New balance: ${storageBalance.toFixed(2)}`);
}

function debitAccount(amount) {
  if (readBalance() >= amount) {
    writeBalance(readBalance() - amount);
    console.log(`Amount debited. New balance: ${storageBalance.toFixed(2)}`);
  } else {
    console.log('Insufficient funds for this debit.');
  }
}

function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  function promptMenu() {
    displayMenu();
    rl.question('Enter your choice (1-4): ', (choice) => {
      switch (choice.trim()) {
        case '1':
          console.log(`Current balance: ${readBalance().toFixed(2)}`);
          promptMenu();
          break;
        case '2':
          rl.question('Enter credit amount: ', (amt) => {
            const amount = parseFloat(amt);
            if (!isNaN(amount) && amount > 0) {
              creditAccount(amount);
            } else {
              console.log('Invalid amount.');
            }
            promptMenu();
          });
          break;
        case '3':
          rl.question('Enter debit amount: ', (amt) => {
            const amount = parseFloat(amt);
            if (!isNaN(amount) && amount > 0) {
              debitAccount(amount);
            } else {
              console.log('Invalid amount.');
            }
            promptMenu();
          });
          break;
        case '4':
          console.log('Exiting the program. Goodbye!');
          rl.close();
          break;
        default:
          console.log('Invalid choice, please select 1-4.');
          promptMenu();
      }
    });
  }

  promptMenu();
}

main();
