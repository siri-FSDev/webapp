/*
problem statement:

Yes bank would like to serve customers online,
1. provide account creation via internet
->  Savings
-> Current

 BankAccount -> accountNumber,name,balance,deposit,withdraw,checkbalance
 Savings -> interest,limit_transaction
 Current ->unlimited_transactions

*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.accountBalance = 0;
    }
    BankAccount.prototype.setAccountNumber = function (accountNumber) {
        if (accountNumber.toString().length != 12) {
            console.log("account number should be 12");
            return;
        }
        this.accountNumber = accountNumber;
    };
    BankAccount.prototype.getAccountNumber = function () {
        if (this.accountNumber.toString().length === 12) {
            return this.accountNumber;
        }
    };
    BankAccount.prototype.setCustomerName = function (customerName) {
        if (customerName.length < 4) {
            console.log("customer name should be atleast 4 chars");
            return;
        }
        if (customerName === "") {
            console.log("customer name cannot be empty");
            return;
        }
        this.customerName = customerName;
    };
    BankAccount.prototype.getCustomerName = function () {
        if (this.customerName !== " ") {
            return this.customerName;
        }
    };
    BankAccount.prototype.setAccountBalance = function (accountBalance) {
        this.accountBalance = accountBalance;
    };
    BankAccount.prototype.getAccountBalance = function () {
        return this.accountBalance;
    };
    BankAccount.prototype.setCustomerPAN = function (customerPAN) {
        this.customerPAN = customerPAN;
    };
    BankAccount.prototype.getCustomerPAN = function () {
        return this.customerPAN;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.accountBalance == 0) {
            console.log("your balance is zero");
            return;
        }
        if (this.accountBalance > amount) {
            console.log("current balance", this.accountBalance);
            console.log("withdrawn:" + amount);
            this.accountBalance = this.accountBalance - amount;
            console.log("current balance:", this.accountBalance);
        }
        else {
            console.log("your account balance is low");
        }
    };
    BankAccount.prototype.deposit = function (amount) {
        console.log("current balance:", this.accountBalance);
        this.accountBalance = this.accountBalance + amount;
        console.log("current balance:", this.accountBalance);
    };
    return BankAccount;
}());
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingsAccount.prototype.setinterest = function (interest) {
        if (interest > 2) {
            console.log("Addition 2 percent of interest is added for every $10000");
            return;
        }
        this.interest = interest;
    };
    SavingsAccount.prototype.getinterest = function () {
        if (this.interest.toString().length === 12) {
            return this.interest;
        }
    };
    SavingsAccount.prototype.settransactions = function (limit_transaction) {
        if (limit_transaction > 0 || limit_transaction < 20) {
            console.log("your account belongs to Savings");
            return;
        }
        this.limit_transaction = limit_transaction;
    };
    SavingsAccount.prototype.getlimit_transaction = function () {
        return this.limit_transaction;
    };
    return SavingsAccount;
}(BankAccount));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.setCashBack = function (cashback) {
        if (cashback == true) {
            console.log("account belongs to savings");
            return this.getAccountBalance;
        }
        else {
            console.log("account belongs to checkings");
            return;
        }
    };
    return CurrentAccount;
}(BankAccount));
var sa1 = new SavingsAccount();
sa1.setAccountBalance(0);
sa1.setAccountNumber(111111111111);
sa1.setCustomerName("ravi kumar");
sa1.setCustomerPAN("abcdef");
sa1.deposit(1000);
sa1.withdraw(1200);
sa1.setinterest(3);
sa1.settransactions(12);
var checkingAccount1 = new CurrentAccount();
checkingAccount1.setCashBack(false);
checkingAccount1.setAccountNumber(6666666);
