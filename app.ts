import axios from "axios";

// type alias
type User = { uid: number; name: string };
type Order = User & { total: number; subtotal: number };

let user: User;

async function getUser() {
  const response = await axios.get<User>("/user");
  user = response.data;
}

function getOrder(user: User): Order {
  const subtotal = +document.querySelector<HTMLInputElement>("#subtotal").value;
  const total = getTotal(subtotal);

  return {
    ...user,
    total,
    subtotal,
  };
}

function getTotal(subtotal: number) {
  const shipping = Math.round(subtotal) > 100 ? 0 : 5;
  return subtotal + shipping;
}

const order = getOrder({ uid: 1, name: "Andrei" });
order.name;
