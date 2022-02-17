import { getLocalStorage, setLocalStorage } from "./index";

let cart = [];
if (localStorage.getItem(cart)) {
    cart = getLocalStorage("cart");
}
// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newItem, next) => {
    const exisItem = cart.find((item) => item.id === newItem.id);
    if (!exisItem) {
        cart.push(newItem);
    } else {
        // eslint-disable-next-line no-plusplus
        exisItem.quantity++;
    }
    setLocalStorage("cart", cart);
    next();
};
export const increseQuantityFromCart = () => {

};
export const decreaseQuantityFromCart = () => {

};
export const removeItemFromCart = () => {

};
export const getTotalPrice = () => {

};
