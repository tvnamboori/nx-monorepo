import { render } from '@testing-library/react';

import MyComps from './my-comps';

describe('MyComps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyComps />);
    expect(baseElement).toBeTruthy();
  });
});
