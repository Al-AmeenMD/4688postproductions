import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../../test/test-utils';
import { Navbar } from '../Navbar';

describe('Navbar', () => {
  it('renders the company name', () => {
    render(<Navbar />);
    expect(screen.getByText('4688 POST-PRODUCTIONS')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar />);
    expect(screen.getByText('SERVICES')).toBeInTheDocument();
    expect(screen.getByText('PORTFOLIO')).toBeInTheDocument();
    expect(screen.getByText('ABOUT')).toBeInTheDocument();
    expect(screen.getByText('CONTACT')).toBeInTheDocument();
  });

  it('applies scroll styles correctly', () => {
    vi.stubGlobal('scrollY', 100);
    render(<Navbar />);
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('bg-black/90');
  });
});
