import type { HTMLAttributes } from 'react';

export type TailwindComponent<U, T extends HTMLElement, K extends keyof T = 'children' | 'className'> = U &
  Omit<HTMLAttributes<T>, K>;
