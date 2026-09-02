# Tips for good coding style

## Prefer functions over classes

In general, this codebase uses functions more than classes. A primary reason is they tree shake better. Additionally, it is generally frowned upon to create a static or class method that does not use `this`. Such a method could just be a function which lets it optimize better in final builds. If you are implementing an interface, you might have to ignore this best practice.
