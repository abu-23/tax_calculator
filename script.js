function calculateTax() {
    const income = parseFloat(document.getElementById("income").value);
    let tax = 0;

    // Tax calculation method 1 - Incremental Approach 

    if (income <= 12570) {
        tax = 0;
    } else if (income <= 50270) {
        tax = (income - 12570) * 0.20;
    } else if (income <= 125140) {
        tax = (50270 - 12570) * 0.20 + (income - 50270) * 0.40;
    } else {
        tax = (50270 - 12570) * 0.20 + (125140 - 50270) * 0.40 + (income - 125140) * 0.45;
    }

    // Tax calculation - method 2 

    // if (income <= 12570) {
    //     tax = 0;
    // } else if (income <= 50270) {
    //     tax = income * 0.20;
    // } else if (income <= 125140) {
    //     tax = income * 0.40;
    // } else {
    //     tax = income * 0.45;
    // }

    // Display the result
    const resultDiv = document.getElementById("result");
    if(income){
        resultDiv.innerHTML = `<p>For an income of <b>£ ${income.toFixed(2)}</b>, your tax is <b> £ ${tax.toFixed(2)}</b></p>`;
    }
    else {
        resultDiv.innerHTML = `<p style="color:red;font-size:small">Enter a valid income</p>`;
    }
}

// Function to handle 'Enter' key event
document.getElementById('income').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent form submission
        calculateTax(); // Call the tax calculation function
    }
});