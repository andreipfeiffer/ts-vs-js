# TS vs. JS

Teaches TypeScript benefits over vanilla JavaScript.

```bash
npm i
```

<br />

## Show TS benefits without using TS

- install 3rd party libs using TS, like `axios`
- use axios in `.js`
- show code-completion of `axios.get()`
- explain `d.ts` files -> where they come from
- explain JSDoc syntax alternative, but hand-written
- paste the code in `.ts` -> see error
- create `getUser()`, move axios inside
- call the api in `.js` -> result type?
- set explicit return type in `.ts`

<br />

## Type checking & inference

- create `getOrder()` function
- read `subtotal` value from a DOM input
- pass it to `getTotal()` to add shipping if > `Math.round(subtotal) > 100`
- create `user` variable
- everything works in `.js`, but you get type errors in `.ts`
- add `noImplicitAny` in config
- infer from usage, remove string, cast to number in consumer

<br />

## Custom types / aliases (model/schema)

- pass `{ id, name }` type to `axios`
- infer from usage
- define custom `type User`

<br />

## Type-safety

- manual rename -> get compile error
- refactor rename

<br />

## Contracts

- create new `type Order` (`User & total & subtotal`)
- make it explicit in return type
- see missing prop
- add a new prop on type -> see contract violation
- add argument `user` to function -> see contract violation

<br />

## Unused code

- add `noUnusedLocals` in config
- remove unused code
