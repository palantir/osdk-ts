#!/usr/bin/env node
// @ts-check

const main = async () => {
  let postinstall;
  try {
    const exported = await import("../build/esm/scripts/postinstall.js");
    postinstall = exported.postinstall;
  } catch {
    // no-op
  }
  await postinstall?.();
};

main();
