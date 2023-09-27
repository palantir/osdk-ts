// This is gold
export type NOOP<T> = T extends (...args: any[]) => any
  ? T
  : T extends abstract new (...args: any[]) => any
  ? T
  : {
      [K in keyof T]: T[K];
    };
