import { render } from '@testing-library/react';
import React from 'react';

import { App } from './App';

describe('Root app', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container.firstChild).not.toBeNull();
  });
});
