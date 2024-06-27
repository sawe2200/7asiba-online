document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculateButton').addEventListener('click', function() {
        const itemValue = parseFloat(document.getElementById('itemValue').value);
        const productPrice = parseFloat(document.getElementById('productPrice').value);
        const resourcesCosts = parseFloat(document.getElementById('resourcesCosts').value);
        const returnRate = parseFloat(document.getElementById('returnRate').value);
        const craftAmount = parseFloat(document.getElementById('craftAmount').value);

        if (isNaN(itemValue) || isNaN(productPrice) || isNaN(resourcesCosts) || isNaN(returnRate) || isNaN(craftAmount)) {
            alert('Please fill in all fields with valid numbers.');
            return;
        }

        const fee = itemValue * 0.1125;
        const profit = (productPrice - resourcesCosts + (resourcesCosts / 100 * returnRate) - fee) * craftAmount;
        const profitPercentage = ((profit / (resourcesCosts * craftAmount)) * 100).toFixed(2);

        document.getElementById('fee').textContent = fee.toFixed(2);
        document.getElementById('profit').textContent = profit.toFixed(2);
        document.getElementById('profitPercentage').textContent = profitPercentage + '%';
    });
});
