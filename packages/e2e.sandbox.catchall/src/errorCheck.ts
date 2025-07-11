import { PalantirApiError } from "@osdk/client";

export async function assertThrowsExpectedError(
  expectedErrorName: string,
  callable: () => Promise<any>,
): Promise<void> {
  try {
    await callable();
  } catch (err) {
    if (err instanceof PalantirApiError) {
      if (err.errorName !== expectedErrorName) {
        const msg = `Expected ${expectedErrorName} error, got ${err.errorName}`;
        throw new Error(msg);
      }
    } else {
      throw err;
    }
  }
  throw new Error("Expected error not thrown");
}
