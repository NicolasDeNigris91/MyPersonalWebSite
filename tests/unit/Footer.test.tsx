import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '@/components/Footer';

describe('Footer', () => {
  it('renders the current year and the copyright in pt-BR', () => {
    const { container } = render(<Footer />);
    const year = new Date().getFullYear();
    const copyright = container.querySelector('footer p');
    expect(copyright?.textContent).toContain(String(year));
    expect(copyright?.textContent).toMatch(/Todos os direitos reservados/i);
  });

  it('exposes the meta-page nav with internal links and the CV download', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Uses' })).toHaveAttribute(
      'href',
      '/uses',
    );
    expect(screen.getByRole('link', { name: 'Now' })).toHaveAttribute(
      'href',
      '/now',
    );
    expect(screen.getByRole('link', { name: 'Contato' })).toHaveAttribute(
      'href',
      '/contact',
    );
    expect(screen.getByRole('link', { name: /CV/i })).toHaveAttribute(
      'href',
      '/cv.pdf',
    );
  });

  it('marks the year as tabular-nums to keep the digits stable', () => {
    const { container } = render(<Footer />);
    const yearSpan = container.querySelector('.tabular-nums');
    expect(yearSpan).not.toBeNull();
    expect(yearSpan?.textContent).toBe(String(new Date().getFullYear()));
  });
});
