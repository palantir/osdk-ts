import { consola as defaultConsola, createConsola } from "consola";

export const consola = createConsola({
  // https://github.com/unjs/consola/issues/251
  async prompt(...params) {
    const response = (await defaultConsola.prompt(...params)) as any;
    if (
      typeof response === "symbol" &&
      response.toString() === "Symbol(clack:cancel)"
    ) {
      defaultConsola.fail("Operation cancelled");
      process.exit(0);
    }
    return response;
  },
});
