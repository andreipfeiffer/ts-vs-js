import axios from "axios";

type User = {
  name: string;
  id: number;
};

type Order = User & {
  total: number;
};

let user: User;

async function getUser() {
  const response = await axios.get("/user");
  user = response.data;
}

function getPrice(value: number) {
  const SHIPPING = Math.round(value) > 100 ? 0 : 5;
  return value + SHIPPING;
}

function getOrder(current_user: User): Order {
  const subtotal = +document.querySelector<HTMLInputElement>("#subtotal").value;

  return {
    ...user,
    total: getPrice(subtotal),
  };
}

const order = getOrder({ id: 1, name: "" });
console.log(order.id);
