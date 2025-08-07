# Refactoring tips

It is important when refactoring and modifying code that we do not unwrap/abstract logging code. It is specifically the way it is because I know it will be removed at build time for our consumers.

So if you see something like this:

```ts
if (process.env.NODE_ENV !== "production") {
  this.logger?.child({ methodName: "maybeUpdateAndRevalidate" }).debug(
    "example debug message",
  );
}
```

we want it to stay in that form
