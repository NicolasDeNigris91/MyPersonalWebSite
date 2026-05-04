import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Monogram } from '@/components/Monogram';

describe('Monogram', () => {
  it('renders an SVG with role img and the NPDN accessible name', () => {
    const { container } = render(<Monogram />);
    const svg = container.querySelector('svg');
    expect(svg).not.toBeNull();
    expect(svg?.getAttribute('role')).toBe('img');
    expect(svg?.getAttribute('aria-label')).toMatch(/NPDN monogram/i);
    expect(svg?.querySelector('title')?.textContent).toBe(
      'Nicolas Pilegi De Nigris',
    );
  });

  it('honours the size prop on width and height', () => {
    const { container } = render(<Monogram size={48} />);
    const svg = container.querySelector('svg');
    expect(svg?.getAttribute('width')).toBe('48');
    expect(svg?.getAttribute('height')).toBe('48');
  });

  it('hides the gold rule when showRule is false', () => {
    const { container } = render(<Monogram showRule={false} />);
    const rule = container.querySelector('line');
    expect(rule).not.toBeNull();
    expect(rule?.getAttribute('opacity')).toBe('0');
  });
});
