import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Navbar } from '@/components/Navbar';

describe('Navbar', () => {
  it('renders desktop nav links', () => {
    render(<Navbar />);
    const nav = screen.getByRole('navigation', { name: /primary/i });
    expect(nav).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '#projects',
    );
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '#contact',
    );
  });

  it('opens the mobile dialog and closes it on Escape, restoring focus', async () => {
    const user = userEvent.setup();
    render(<Navbar />);
    const trigger = screen.getByRole('button', { name: /abrir menu/i });

    await user.click(trigger);

    const dialog = screen.getByRole('dialog', { name: /menu de navegação/i });
    expect(dialog).toBeInTheDocument();

    await user.keyboard('{Escape}');
    expect(
      screen.queryByRole('dialog', { name: /menu de navegação/i }),
    ).toBeNull();
    expect(trigger).toHaveFocus();
  });
});
