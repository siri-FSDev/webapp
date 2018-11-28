
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

class BankAccount{
    private accountNumber:number;
    private customerName:string;
    private accountBalance:number=0;
    private customerPAN:string;
 
     setAccountNumber(accountNumber:number):void{
          if(accountNumber.toString().length!=12){
              console.log("account number should be 12");
              return;
          }
           this.accountNumber=accountNumber;
     }
     getAccountNumber():number{
         if(this.accountNumber.toString().length === 12){
             return this.accountNumber;
         }
     }
     setCustomerName(customerName:string):void{
         if(customerName.length < 4){
             console.log("customer name should be atleast 4 chars");
             return;
         }
         if(customerName === ""){
             console.log("customer name cannot be empty");
             return;
         }
           this.customerName=customerName;
     }
      getCustomerName():string{
          if(this.customerName!== " "){
              return this.customerName;
          }
      }
      setAccountBalance(accountBalance):void{
              this.accountBalance=accountBalance;
      }
      getAccountBalance():number{
         return this.accountBalance;
      }
      setCustomerPAN(customerPAN:string):void{
              this.customerPAN=customerPAN;
      }
      getCustomerPAN():string{
           return this.customerPAN;
      }
      withdraw(amount:number){
            if(this.accountBalance == 0){
                    console.log("your balance is zero");
                    return;
            }
            if(this.accountBalance>amount){
                   console.log("current balance",this.accountBalance);
                   console.log("withdrawn:"+amount);
                   this.accountBalance=this.accountBalance-amount;
                   console.log("current balance:",this.accountBalance);
            }
            else
            {
                console.log("your account balance is low");
            }
      }
      deposit(amount){
              console.log("current balance:", this.accountBalance);
             this.accountBalance=this.accountBalance+amount;
             console.log("current balance:", this.accountBalance);
      }
 }
 
 class SavingsAccount extends BankAccount{
    private interest:number;
    private limit_transaction:number;

    setinterest(interest:number):void{
        if(interest > 2){
            console.log("Addition 2 percent of interest is added for every $10000");
            return;
        }
         this.interest=interest;
   }
   getinterest():number{
       if(this.interest.toString().length === 12){
           return this.interest;
       }
   }
   settransactions(limit_transaction:number):void{
    if(limit_transaction >0 || limit_transaction <20){

        console.log("your account belongs to Savings");
        return;
    }
     this.limit_transaction=limit_transaction;
}
getlimit_transaction():number{
   return this.limit_transaction;
}


 }
 class CurrentAccount extends BankAccount{
    private cashback:boolean;

    setCashBack(cashback:boolean){

        if(cashback==true){
            console.log("account belongs to savings");
            return this.getAccountBalance;
        }
        else{
            console.log("account belongs to checkings");
            return;
        }
    }
    
 }
 var sa1=new SavingsAccount();
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
 
 