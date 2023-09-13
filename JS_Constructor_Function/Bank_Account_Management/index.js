function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
}

BankAccount.prototype.deposit = function (amount) {
    if (amount > 0) {
        this.balance += amount;
        console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else {
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdraw = function (amount) {
    if (amount > 0 && this.balance >= amount) {
        this.balance -= amount;
        console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else {
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
};

BankAccount.prototype.checkBalance = function () {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
};

BankAccount.prototype.isActive = function () {
    if(this.balance === 0){
        this.active = false;
    }else {
        this.active;
    }
    return this.active;
};

function getTotalBalance(accounts) {
    let totalBalance = 0;
    for (const account of accounts) {
        if (account.isActive()) {
            totalBalance += account.balance;
        }
    }
    
    return totalBalance;
}

const account1 = new BankAccount(156892347, "Ram Prasad", "Savings", 100000);
const account2 = new BankAccount(156892348, "Gbbar", "Current", 5100000);
const account3 = new BankAccount(156892349, "Bahadur Singh", "Savings", 420);
const account4 = new BankAccount(156892350, "Kachra Seth", "Current", 150);

account1.deposit(500);
account1.checkBalance();
account2.withdraw(20000);
account2.checkBalance();
account3.deposit(1000);
account3.checkBalance();
account4.withdraw(150);
account1.checkBalance();
console.log(`Account 2 is active: ${account2.isActive()}`);
console.log(`Account 3 is active: ${account3.isActive()}`);

const accounts = [account1, account2, account3];
const totalBalance = getTotalBalance(accounts);
console.log(`Total balance of all active accounts: ${totalBalance}`);