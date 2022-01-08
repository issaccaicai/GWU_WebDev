var subtotal = 0;
var taxAmount = 0.10;
var shippingAmount = 1000;


for (var i = 0; i < titles.length; i++) {

    var total = calculateTotal(quantities[i], prices[i]);
    subtotal += total;
    outputCartRow(filenames[i], titles[i], quantities[i], 
      prices[i], total);

}

var TaxCost = calculateTaxCost(subtotal, taxAmount);
var ShippingCost = calculateShippingCost(subtotal, shippingAmount);
var GrandTotal = calculateGrandTotal(subtotal, TaxCost, ShippingCost);
