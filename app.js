import axios from "axios";

let user;

async function getUser() {
  const response = await axios.get("/user");
  user = response.data;
}

function getPrice(value) {
  const SHIPPING = Math.round(value) > 100 ? 0 : 5;
  return value + SHIPPING;
}

function getOrder(current_user) {
  const subtotal = document.querySelector("#subtotal").value;

  return {
    ...user,
    total: getPrice(subtotal),
  };
}

const order = getOrder();
console.log(order.missing);
