#!/usr/bin/env node
// @ts-check

const main = async () => {
  try {
    const { postinstall } = await import("../build/esm/scripts/postinstall");
    await postinstall();
  } catch {
    // no-op
  }
};

main();
