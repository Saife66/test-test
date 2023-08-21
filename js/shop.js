let total = 0;
let discount = 0;

if (total == 0) {
  const buyButton = document.getElementById("purchase-btn");
  buyButton.disabled = true;
}



function productSelectClick(target) {
  const productTitle = target.childNodes[3].innerText;
  const productPrice = target.childNodes[5].innerText.split(" ")[0];
  const selectedProductContainer = document.getElementById("selectedProduct");

  const li = document.createElement("li");
  li.innerText = productTitle;
  li.classList.add("selected-items");
  selectedProductContainer.appendChild(li);

  const totalContainer = document.getElementById("total");
  total = parseInt(total) + parseInt(productPrice);
  totalContainer.innerText = total + " TK";

  const inTotal = parseInt(total) - parseInt(discount);
  const inTotalContainer = document.getElementById("in-total");
  inTotalContainer.innerText = inTotal + " TK";

  const buyButton = document.getElementById("purchase-btn");
  buyButton.removeAttribute('disabled');

  const getTheApply = document.getElementById("apply-btn");
  if (total >= 200) {
      document.getElementById("apply-btn").removeAttribute("disabled");
  }

 
 
}

function couponApply() {
  const couponCode = document.getElementById("coupon_input").value;
  const validCouponCodes = ["SELL200"];
  const percentage = 0.2;
  const totalPrice = parseInt(
    document.getElementById("total").innerText.split(" ")[0]
  );

 

  if (validCouponCodes.includes(couponCode)) {
    discount = totalPrice * percentage;
    const discountContainer = document.getElementById("discount");
    discountContainer.innerText = discount.toFixed(2) + " TK";

    const inTotalContainer = document.getElementById("in-total");
    const inTotal = totalPrice - discount;
    inTotalContainer.innerText = inTotal + " TK";
    document.getElementById("coupon_input").value = "";
  }
  
}


 

function goHome() {
  const totalContainer = document.getElementById("total");
  const inTotalContainer = document.getElementById("in-total");
  const discountContainer = document.getElementById("discount");

  totalContainer.innerText = "00.00 TK";
  inTotalContainer.innerText = "00.00 TK";
  discountContainer.innerText = "00.00 TK";

  const selectedProduct = document.getElementById("selectedProduct");
  selectedProduct.innerHTML = '';
}
