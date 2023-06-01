let sbiBank={
    bankName: "State Bank of India",
    location:"Pune",
    accountInfo: "78965412300",
    ifsc:"SBI000005",
    interestRate: "6%",
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Info: ${this.accountInfo}, IFSC code: ${this.ifsc}, Interest rate: ${this.interestRate}`);
    }
}
let axisBank={
    bankName: "Axis Bank",
    location: "Mumbai",
    accountInfo: "32165498720",
    ifsc:"AXIS00002",
    interestRate:"8%",
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Info: ${this.accountInfo}, IFSC code: ${this.ifsc}, Interest rate: ${this.interestRate}`);
    }
}
let hdfcBank={
    bankName: "HDFC BAnk",
    location: "Delhi",
    accountInfo: "78987897899",
    ifsc:"HDFC00003",
    interestRate:"9%",
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Info: ${this.accountInfo}, IFSC code: ${this.ifsc}, Interest rate: ${this.interestRate}`);
    }
}
let yesBank={
    bankName: "YES Bank",
    location: "Solapur",
    accountInfo: "3579514682",
    ifsc:"YES000009",
    interestRate:"10%",
    showDetails:function () {
        console.log(`Bank Name: ${this.bankName}, Location: ${this.location}, Account Info: ${this.accountInfo}, IFSC code: ${this.ifsc}, Interest rate: ${this.interestRate}`);
    }
}


sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();