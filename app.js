import axios from "axios";

let user;

async function getUser() {
  const response = await axios.get("/user");
  user = response.data;
}

function getOrder() {
  const subtotal = document.querySelector("#subtotal").value;
  const total = getTotal(subtotal);

  return {
    ...user,
    total,
    subtotal,
  };
}

function getTotal(subtotal) {
  const shipping = Math.round(subtotal) > 100 ? 0 : 5;
  return subtotal + shipping;
}

const order = getOrder();
order.missing;
