/*
 * Copyright 2026 Palantir Technologies, Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Representation of a `cipherText` property. The encrypted
 * value is not stored; call {@link CipherText.decrypt} to retrieve the
 * decrypted plaintext on backend.
 *
 * @example
 * ```ts
 * const employee = await client(Employee).fetchOne(12345);
 * const ssn = await employee.encryptedSsn?.decrypt();
 * ```
 * @public
 */
export interface CipherText {
  /**
   * Decrypts the ciphertext and resolves to the plaintext value.
   * @returns the decrypted plaintext
   */
  decrypt(): Promise<string>;

  /**
   * Returns the raw encrypted value backing this ciphertext. Used internally
   * to forward an existing ciphertext value into an object edit without
   * decrypting it.
   *
   * @internal
   * @returns the encrypted value
   */
  getValue(): string;
}

// TODO: re-export from @osdk/foundry.ontologies
export enum CipherChannelStrategy {
  PREFER_EXISTING = "PREFER_EXISTING", // default
  PREFER_DEFAULT = "PREFER_DEFAULT",
  EXISTING_ONLY = "EXISTING_ONLY",
  DEFAULT_ONLY = "DEFAULT_ONLY",
}

/**
 * Create a `cipherText` property value from plaintext. The platform encrypts
 * the value using the property's default cipher channel.
 */
export interface CreateCipherText {
  plaintext: string;
}

/**
 * Update a `cipherText` property value from plaintext. `strategy` controls which
 * cipher channel is used when re-encrypting.
 */
export interface UpdateCipherText {
  plaintext: string;
  strategy?: CipherChannelStrategy;
}

/**
 * The wire representation of a `cipherText` edit that reuses an existing
 * ciphertext: the raw encrypted value.
 */
export interface CipherTextValue {
  ciphertext: string;
}
