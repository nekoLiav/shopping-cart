import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';
import Promo from '../components/Promo';

import '@testing-library/jest-dom';

describe('Promo component', () => {
  it('calls the onChange handler the appropriate number of times', async () => {
    const setPromoAppliedMock = jest.fn();
    render(<Promo setPromoApplied={setPromoAppliedMock} />);
    const promoInput = screen.getByRole('textbox');
    await userEvent.type(promoInput, '1234');
    expect(setPromoAppliedMock).toHaveBeenCalledTimes(4);
  });
});
