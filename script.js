const cart = document.getElementById('cart');
const cartBtn = document.getElementById('cartBtn');

cartBtn.onfocus = function cartShow() {
    cart.show();
}
cart.onblur = function cartHide() {cart.close();}



