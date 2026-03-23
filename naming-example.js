// Example: Descriptive variable and function names
// -------------------------------------------------
// Using clear, descriptive names makes code easier to read and maintain.

// --- Before: vague names ---
function calc(a, b) {
  const r = a * b * 0.1;
  return r;
}

const x = 5;
const y = 200;
const z = calc(x, y);

// --- After: descriptive names ---
function calculateDiscount(quantity, unitPrice) {
  const discountRate = 0.1;
  const discountAmount = quantity * unitPrice * discountRate;
  return discountAmount;
}

const itemQuantity = 5;
const itemUnitPrice = 200;
const totalDiscount = calculateDiscount(itemQuantity, itemUnitPrice);

console.log(`Total discount: ${totalDiscount}`); // 100
