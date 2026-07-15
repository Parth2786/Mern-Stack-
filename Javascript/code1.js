class Rectangle {
    constructor(name, mobile, email, amount = 0) {
        this.accountHolderName = name;
        this.mobile = mobile;
        this.email = email;
        this.balance = amount;
    }

    // Method to deposit money
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited ₹${amount}. New balance: ₹${this.balance}`);
        } else {
            console.log("Deposit amount must be positive.");
        }
    }

    // Method to withdraw money
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew ₹${amount}. Remaining balance: ₹${this.balance}`);
        } else {
            console.log("Insufficient balance or invalid amount.");
        }
    }

    // Method to display account details
    displayDetails() {
        console.log(`Account Holder: ${this.accountHolderName}`);
        console.log(`Mobile: ${this.mobile}`);
        console.log(`Email: ${this.email}`);
        console.log(`Balance: ₹${this.balance}`);
    }
}

// Creating object with initial balance
let obj1 = new Rectangle('Parth', '9303366954', 'vishwakarmaparth20@gmail.com', 5000);

// Using methods
obj1.displayDetails();
obj1.deposit(2000);
obj1.withdraw(1500);
obj1.displayDetails();
