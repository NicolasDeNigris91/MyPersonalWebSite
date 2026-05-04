import { render, screen, act } from '@testing-library/react';
import { fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, afterEach } from 'vitest';
import { BackToTop } from '@/components/BackToTop';

describe('BackToTop', () => {
  afterEach(() => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 0,
    });
  });

  it('stays hidden until the user scrolls past the threshold', () => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 0,
    });
    render(<BackToTop />);
    expect(
      screen.queryByRole('button', { name: /voltar ao topo/i }),
    ).toBeNull();
  });

  it('appears once scrollY crosses the 600px threshold', () => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 800,
    });
    render(<BackToTop />);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    expect(
      screen.getByRole('button', { name: /voltar ao topo/i }),
    ).toBeInTheDocument();
  });

  it('scrolls back to the top on click', () => {
    Object.defineProperty(window, 'scrollY', {
      configurable: true,
      writable: true,
      value: 800,
    });
    const scrollTo = vi.fn();
    Object.defineProperty(window, 'scrollTo', {
      configurable: true,
      writable: true,
      value: scrollTo,
    });

    render(<BackToTop />);
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    fireEvent.click(screen.getByRole('button', { name: /voltar ao topo/i }));

    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ top: 0 }));
  });
});
