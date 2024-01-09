/*
 * Copyright 2023 Palantir Technologies, Inc. All rights reserved.
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

/* eslint-disable max-classes-per-file */

/**
 * Use Result.ok() / Result.err() for constructing
 */
export type Result<T, E> = Ok<T, E> | Err<T, E>;

export class Ok<T, E> {
  constructor(public value: T) {}

  public isErr(): this is Err<T, E> {
    return false;
  }

  public isOk(): this is Ok<T, E> {
    return true;
  }

  public transform<U, V>(
    transformOk: (value: T) => Result<U, V>,
    _transformErr: (err: E) => Result<U, V>,
  ): Result<U, V> {
    return transformOk(this.value);
  }

  public map<U>(transformOk: (value: T) => U): Result<U, E> {
    return Result.ok(transformOk(this.value));
  }

  public mapErr<U>(_transformErr: (err: E) => U): Result<T, U> {
    return Result.ok(this.value);
  }
}

export class Err<T, E> {
  constructor(public error: E) {}

  public isErr(): this is Err<T, E> {
    return true;
  }

  public isOk(): this is Ok<T, E> {
    return false;
  }

  public transform<U, V>(
    _transformOk: (value: T) => Result<U, V>,
    transformErr: (err: E) => Result<U, V>,
  ): Result<U, V> {
    return transformErr(this.error);
  }

  public map<U>(_transformOk: (value: T) => U): Result<U, E> {
    return Result.err(this.error);
  }

  public mapErr<U>(transformErr: (err: E) => U): Result<T, U> {
    return Result.err(transformErr(this.error));
  }
}

export const Result = {
  ok<T, E>(ok: T): Result<T, E> {
    return new Ok<T, E>(ok);
  },

  err<T, E>(err: E): Result<T, E> {
    return new Err<T, E>(err);
  },

  /**
   * Returns err E array if any result has an error.
   * Returns T array if all results are ok.
   */
  coalesce<T, E>(results: Array<Result<T, E[]>>): Result<T[], E[]> {
    return results.reduce((acc, value) => {
      return value.transform(
        ok => {
          return acc.transform(
            accOk => {
              return Result.ok([...accOk, ok]);
            },
            accErr => {
              return Result.err(accErr);
            },
          );
        },
        err => {
          return acc.transform(
            () => {
              return Result.err([...err]);
            },
            accErr => {
              return Result.err([...accErr, ...err]);
            },
          );
        },
      );
    }, Result.ok<T[], E[]>([]));
  },
};
