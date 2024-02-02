// Note this doesn't work with TypeScript OSDK 1.1
// https://stackoverflow.com/a/67975040
function getMethods(obj: object): string[] {
  const isGetter = (x: object, name: string) =>
    Boolean((Object.getOwnPropertyDescriptor(x, name) ?? {})?.get);
  const isFunction = (x: object, name: string) =>
    typeof (x as { [key: string]: unknown })[name] === "function";
  const deepFunctions = (x: object): string[] =>
    (x
      && x !== Object.prototype
      && Object.getOwnPropertyNames(x)
        .filter((name) => isGetter(x, name) || isFunction(x, name))
        .concat(deepFunctions(Object.getPrototypeOf(x)) || []))
    || [];

  const distinctDeepFunctions = (x: object) =>
    Array.from(new Set(deepFunctions(x)));

  return distinctDeepFunctions(obj).filter(
    (name) => name !== "constructor" && !~name.indexOf("__"),
  );
}

export default getMethods;
