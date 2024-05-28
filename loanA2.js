function sendOTP() {
    // Generate a random 6-digit OTP
    var otp = Math.floor(100000 + Math.random() * 900000);
    alert("Your OTP is: " + otp);
    // Here, you could send this OTP to the user's email address using a backend service
}

function verifyOTP() {
    var otp = document.getElementById("otp").value;
    // Here, you can add logic to verify OTP
    // For simplicity, let's assume OTP is verified successfully
    document.getElementById("otpPage").style.display = "none";
    document.getElementById("addressPage").style.display = "block";
}

function nextPage() {
    document.getElementById("addressPage").style.display = "none";
    document.getElementById("loanTenurePage").style.display = "block";
}

function prevPage() {
    document.getElementById("otpPage").style.display = "block";
    document.getElementById("addressPage").style.display = "none";
    document.getElementById("loanTenurePage").style.display = "none";
}

function calculateEMI() {
    var tenure = parseInt(document.getElementById("tenure").value);
    var loanAmount = 100000; // Example loan amount, you can get it from user input
    var interestRate = 10; // Example interest rate in percentage
    var monthlyInterestRate = interestRate / 12 / 100;
    var emi = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -tenure));
    document.getElementById("interestRate").innerText = "Interest Rate: " + interestRate + "%";
    document.getElementById("emi").innerText = "EMI: $" + emi.toFixed(2) + " per month";
}

document.getElementById("loanTenureForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    // Here you can submit the form data to your backend server
    alert("Loan application submitted successfully!");
});