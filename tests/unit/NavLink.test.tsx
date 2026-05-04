import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavLink } from '@/components/NavLink';

describe('NavLink', () => {
  it('forwards href and children, no aria-current when inactive', () => {
    render(<NavLink href="#projects">Projetos</NavLink>);
    const link = screen.getByRole('link', { name: 'Projetos' });
    expect(link).toHaveAttribute('href', '#projects');
    expect(link).not.toHaveAttribute('aria-current');
  });

  it('marks the link as the current location when active', () => {
    render(
      <NavLink href="#projects" active>
        Projetos
      </NavLink>,
    );
    const link = screen.getByRole('link', { name: 'Projetos' });
    expect(link).toHaveAttribute('aria-current', 'location');
  });

  it('renders the SVG underline path with stroke-dashoffset 0 when active', () => {
    const { container } = render(
      <NavLink href="#projects" active>
        Projetos
      </NavLink>,
    );
    const line = container.querySelector('line');
    expect(line).not.toBeNull();
    expect(line?.getAttribute('stroke-dashoffset')).toBe('0');
  });
});
