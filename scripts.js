const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.77,
    SAR: 3.76,
    INR: 84.14,
    PKR: 277.24
};

document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;
    let amount = document.getElementById('amount').value; // Corrected line

    // Convert amount to a number
    amount = parseFloat(amount);

    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let baseAmount = amount / fromAmount;
    let convertedAmount = baseAmount * toAmount;

    document.getElementById('result').textContent = `Converted Amount: ${Math.round(convertedAmount)}`;
});

