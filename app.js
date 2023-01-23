import axios from "axios";

// [{ id: 1, name: "book", price: 10 }]

async function getProducts() {
  const result = await axios.get("/products");
  return result.data;
}

async function getOrder(productId) {
  const products = await getProducts();
  const product = products.find((p) => p.id === productId);

  const quantity = document.querySelector("input#quantity").valueAsNumber;

  const price = product.price * quantity;

  return {
    productId,
    price,
    quantity,
  };
}

const order = await getOrder(1);
order.price;
