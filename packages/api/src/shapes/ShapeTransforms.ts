/*
 * Copyright 2024 Palantir Technologies, Inc. All rights reserved.
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
 * Removes | undefined from specified properties of an Osdk.Instance type
 * while preserving all other aspects of the type including special properties
 * like $as, $link, $clone, etc.
 *
 * @template INSTANCE - The Osdk.Instance type to transform
 * @template MAKE_REQUIRED - Union of property keys to make non-nullable
 */
export type TransformNullability<
  INSTANCE,
  MAKE_REQUIRED extends string,
> =
  & Omit<INSTANCE, MAKE_REQUIRED>
  & {
    readonly [K in MAKE_REQUIRED & keyof INSTANCE]: NonNullable<INSTANCE[K]>;
  };
