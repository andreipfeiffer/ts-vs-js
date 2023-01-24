import axios from "axios";

import { Reservation } from "./reservations";

async function getReservation(id: number) {
  const result = await axios.get<Reservation>(`/reservation/${id}`);
  return result.data;
}

// [{ id: 1, name: "book", price: 10 }]

type Product = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  productId: number;
  quantity: number;
  price: number;
};

async function getProducts() {
  const result = await axios.get<Product[]>("/products");
  return result.data;
}

async function getOrder(productId: number): Promise<Order> {
  const products = await getProducts();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    throw `Product id ${productId} was not found!`;
  }

  const element = document.querySelector<HTMLInputElement>("input#quantity");
  const quantity = element ? element.valueAsNumber : 0;

  const price = product.price * quantity;

  return {
    productId,
    price,
    quantity,
  };
}

const order = await getOrder(1);
order.price