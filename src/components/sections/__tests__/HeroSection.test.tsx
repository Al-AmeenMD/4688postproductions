import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../test/test-utils';
import { HeroSection } from '../HeroSection';

describe('HeroSection', () => {
  it('renders the main heading', () => {
    render(<HeroSection />);
    expect(screen.getByText('Post-Production')).toBeInTheDocument();
    expect(screen.getByText('Excellence')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Transforming raw footage into cinematic masterpieces/)).toBeInTheDocument();
  });

  it('renders the CTA button', () => {
    render(<HeroSection />);
    expect(screen.getByText('VIEW OUR WORK')).toBeInTheDocument();
  });

  it('renders the video element', () => {
    render(<HeroSection />);
    const video = screen.getByRole('video');
    expect(video).toBeInTheDocument();
    expect(video).toHaveAttribute('autoplay');
    expect(video).toHaveAttribute('muted');
    expect(video).toHaveAttribute('loop');
  });
});
