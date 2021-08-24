import React, { HTMLAttributes, ReactElement } from 'react';

export const Button = (props: HTMLAttributes<HTMLButtonElement>): ReactElement<HTMLButtonElement> => (
  <button
    className="p-1.5 bg-blue-600 text-gray-100 rounded mr-1.5 hover:bg-blue-500 hover:text-gray-200 last:mr-0"
    {...props}
  />
);
