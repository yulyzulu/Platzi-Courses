function calculateDiscountedPrice(price, discount) {
  const discountPricePercentage = 100 - discount;
  const discountPrice = (price * discountPricePercentage) / 100;
  return discountPrice;
}

function priceDiscount() {
  const price = document.getElementById("Price");
  const priceValue = price.value;

  const discount = document.getElementById("Discount");
  const discountValue = discount.value;

  const discountPrice = calculateDiscountedPrice(priceValue, discountValue);

  const result = document.getElementById("Result");
  result.innerText = "El precio con descuento es de $" + discountPrice;
}