import { render } from '@testing-library/react';

import ToggleLang from './toggle-lang';

describe('ToggleLang', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleLang />);
    expect(baseElement).toBeTruthy();
  });
});
