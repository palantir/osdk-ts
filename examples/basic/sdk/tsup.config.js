import { defineConfig } from "tsup";

export default defineConfig(async (options) =>
  (await import("mytsup")).default(options),
);
