import type { HTMLAttributes } from 'react';

export type TailwindComponent<U, T extends HTMLElement, K extends keyof T = 'children' | 'className'> = U &
  Omit<HTMLAttributes<T>, K>;

export type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

export type RecursiveReadonly<T> = {
  readonly [P in keyof T]-?: RecursiveReadonly<T[P]>;
};
