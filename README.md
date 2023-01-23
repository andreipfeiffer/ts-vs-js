# Type-Safety for skeptics

TypeScript benefits over vanilla JavaScript.

```bash
npm i
```

<br />

## 3rd party types

- install 3rd party libs using TS, like `axios`
- use axios in `.js`
- show code-completion of `axios.get()`
- explain `d.ts` files -> where they come from
- paste the code in `.ts` -> see error

## Own types

- create `getProducts()`, move axios inside
- call the api in `.js` -> show code-completion of `response.data`
- type cannot be "guessed" for HTTP requests (read docs, execute + console.log, etc)
- set explicit `Product[]` return type in `.ts`

## Strict type-checking

- create `getOrder(productId)` function in `.js`
- find the product

- read `quantity` value from a DOM input
- calculate `total`
- return `Order`
- everything works in `.js`, but you get type errors in `.ts`

- fix DOM query for `value`
- set `strict: true` to fix `productId` -> infer from usage
- fix DOM query fallback
- fix product find

- call `getOrder()` see error missing param

## Inferrence

- see that we haven't specify types for: `products`, `product`, `price`, `order`
- we only need to explicitly specify them at the border: _HTTP_, _DOM_, _3rd party_
- add new field on order return, see it inferred

## Contracts

- define explicit `Order` type, with `total` instead of `price` + without `quantity`
- set it to `getOrder` -> see type errors

## Type-safety

- manual rename `id` in `uuid` -> get compile error
- refactor rename `price` in `unitPrice`
