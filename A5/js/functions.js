function calculateTotal(quantity, price) {
    var total;
    total = quantity * price;
    return total;
}

function calculateTaxCost(subtotal, taxRate) {
    var tax;
    tax = subtotal * taxRate;
    return tax;
}

function calculateShippingCost(subtotal, shippingAmount) {
    if (subtotal < shippingAmount) {
        return 40;
    }
    else {
        return 0;
    }
}

function calculateGrandTotal(subtotal, TaxCost, ShippingCost) {
    var grandTotal;
    grandTotal = subtotal + TaxCost + ShippingCost
    return grandTotal;   
}

function outputCartRow(file, title, quantity, price, total) {
    document.write('<tr>');
    document.write('<td><img src="images/' + file + '"></td>');
    document.write('<td>' + title + '</td>');
    document.write('<td style="text-align: center;">' + quantity + '</td>');
    document.write('<td style="text-align: center;">$' + price.toFixed(2) + '</td>');
    document.write('<td style="text-align: center;">$' + total.toFixed(2) + '</td>');
    document.write('</tr>');            
}


function tableMoney(moneyValue) {
    document.write("$" + moneyValue.toFixed(2));   
}
        
