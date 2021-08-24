import React, { ReactElement } from 'react';

import type { TailwindComponent } from '../types/Misc';

interface Props {
  currentTime: string;
  message: string;
}

export const SampleDisplay = ({
  currentTime,
  message,
  ...other
}: TailwindComponent<Props, HTMLDivElement>): ReactElement<HTMLDivElement> => (
  <div className="flex flex-col items-center" {...other}>
    <span className="text-3xl">{message || 'No data'}</span>
    <span className="text-lg">{currentTime}</span>
  </div>
);
