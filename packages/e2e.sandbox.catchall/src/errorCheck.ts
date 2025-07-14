import { PalantirApiError } from "@osdk/client";

export async function assertThrowsExpectedError(
  expectedErrorName: string,
  callable: () => Promise<any>,
): Promise<void> {
  try {
    await callable();
  } catch (err) {
    if (err instanceof PalantirApiError) {
      if (err.errorName === expectedErrorName) {
        return;
      }
      throw new Error(
        `Expected ${expectedErrorName} error, got ${err.errorName}`,
      );
    } else {
      throw new Error(`Expected PalantirApiError got ${err}`);
    }
  }
  throw new Error(`Expected error not thrown: ${expectedErrorName}`);
}
