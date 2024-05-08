function convert() {
    // Get input values
    var amount = parseFloat(document.getElementById('amount').value);
    var fromCurrency = document.getElementById('from').value;
    var toCurrency = document.getElementById('to').value;
  
    // Exchange rates (approximate rates as of January 2022)
    var exchangeRates = {
      'USD': { 'USD': 1, 'EUR': 0.82, 'GBP': 0.71, 'INR': 75.16, 'AUD': 1.30, 'PKR': 156.17 },
      'EUR': { 'USD': 1.22, 'EUR': 1, 'GBP': 0.87, 'INR': 88.33, 'AUD': 1.52, 'PKR': 182.56 },
      'GBP': { 'USD': 1.41, 'EUR': 1.15, 'GBP': 1, 'INR': 102.55, 'AUD': 1.77, 'PKR': 213.08 },
      'INR': { 'USD': 0.013, 'EUR': 0.011, 'GBP': 0.0097, 'INR': 1, 'AUD': 0.017, 'PKR': 12.06 },
      'AUD': { 'USD': 0.77, 'EUR': 0.66, 'GBP': 0.56, 'INR': 59.18, 'AUD': 1, 'PKR': 120.50 },
      'PKR': { 'USD': 0.0064, 'EUR': 0.0055, 'GBP': 0.0047, 'INR': 0.083, 'AUD': 0.0083, 'PKR': 1 }
    };
  
    // Calculate the converted amount
    var convertedAmount = amount * exchangeRates[fromCurrency][toCurrency];
  
    // Display the result
    document.getElementById('result').innerHTML = amount + ' ' + fromCurrency + ' = ' + convertedAmount.toFixed(2) + ' ' + toCurrency;
  }
  