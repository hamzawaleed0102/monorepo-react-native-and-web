import { render } from '@testing-library/react-native';
import React from 'react';

import { ZodiacSignList } from './zodiac-sign-list';

describe('ZodiacSignList', () => {
  it('should render successfully', () => {
    const { container } = render(
      <ZodiacSignList onPressListItem={jest.fn()} />
    );
    expect(container).toBeTruthy();
  });
});
