function Loan(){
    const userName = document.getElementById("username").value;
    const cibilScore = document.getElementById("cibil").value;
    const monthlyIncome = document.getElementById("salary").value;

    // Loan Validation

    if(cibilScore > 800 && monthlyIncome > 100000){
        alert(userName + " Congratulations! You are eligible for 5Lakhs loan")
    }
    else if(cibilScore > 780 && monthlyIncome > 80000){
        alert(userName + " Congratulations! You are eligible for 2Lakhs loan")
    }
    else if(cibilScore > 750 && monthlyIncome > 50000){
        alert(userName + " Congratulations! You are eligible for 1Lakhs loan")
    }
    else if(cibilScore > 720 && monthlyIncome > 30000){
        alert(userName + " Congratulations! You are eligible for 50K loan")
    }
    else{
        alert(userName + " Better Luck Next Time ")
    }

}