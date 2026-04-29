import type { CipherText } from "@osdk/api";
import { CipherTextTest } from "@osdk/e2e.generated.catchall";
import { client } from "./client.js";

export async function runCipherTextTest(): Promise<void> {
  const objects = await client(CipherTextTest).fetchPage();

  const cipherText: CipherText | undefined = objects.data[0].cipherText;
  const encrypted: string | undefined = cipherText?.ciphertext;
  const decrypted: string | undefined = await cipherText?.decrypt();
  console.log(cipherText);
  console.log(encrypted);
  console.log(decrypted);
}

void runCipherTextTest();
