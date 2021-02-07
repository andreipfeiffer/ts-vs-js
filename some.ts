import axios from "axios";

type User = { id: number; full_name: string };
type Order = User & { total: number };

let user: User;

async function getUser() {
  const response = await axios.get<User>("/user");
  user = response.data;
}

function getOrder(current_user: User): Order {
  const subtotal = +document.querySelector<HTMLInputElement>("#subtotal").value;

  return {
    ...current_user,
    total: getTotal(subtotal),
  };
}

function getTotal(subtotal: number) {
  const shipping = Math.round(subtotal) > 100 ? 0 : 5;
  return subtotal + shipping;
}

const order = getOrder({ id: 1, full_name: "Andrei" });
order.total;
