import React, { HTMLAttributes, ReactElement } from 'react';

export const Button = (props: HTMLAttributes<HTMLButtonElement>): ReactElement<HTMLButtonElement> => (
  <button className="p-1.5 bg-blue-600 text-gray-100 rounded hover:bg-blue-500 hover:text-gray-200" {...props} />
);
