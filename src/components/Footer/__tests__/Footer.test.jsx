import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

// Variables
const currentYears = new Date().getFullYear();

// Constants
const ICONS_NUMBER = 3;
const FOOTER_TEXT = `Copyright © ${currentYears} Sourcery Academy`;

// Tests
describe('footer', () => {
  it('check if footer is rendered', () => {
    render(<Footer />);

    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  it(`check if footer has ${ICONS_NUMBER} media icons`, () => {
    render(<Footer />);

    const listElements = screen.getAllByRole('listitem');
    expect(listElements).toHaveLength(ICONS_NUMBER);
  });

  it('check footer text', () => {
    render(<Footer />);
    const footerText = screen.getByText(FOOTER_TEXT);
    expect(footerText).toBeInTheDocument();
  });
});
