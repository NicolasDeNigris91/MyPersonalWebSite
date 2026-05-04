import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { CopyEmailLink } from '@/components/CopyEmailLink';
import { siteConfig } from '@/data/site';

function installClipboard() {
  const writeText = vi.fn().mockResolvedValue(undefined);
  Object.defineProperty(navigator, 'clipboard', {
    configurable: true,
    value: { writeText },
  });
  return writeText;
}

describe('CopyEmailLink', () => {
  it('renders a mailto link with the configured email', () => {
    render(<CopyEmailLink>Say Hello</CopyEmailLink>);
    const link = screen.getByRole('link', { name: /click copies it/i });
    expect(link).toHaveAttribute('href', `mailto:${siteConfig.email}`);
    expect(link).toHaveTextContent('Say Hello');
  });

  it('writes the email to the clipboard on click and surfaces a toast', async () => {
    const writeText = installClipboard();
    render(<CopyEmailLink>Say Hello</CopyEmailLink>);

    const link = screen.getByRole('link', { name: /click copies it/i });
    fireEvent.click(link);

    expect(writeText).toHaveBeenCalledWith(siteConfig.email);
    await waitFor(() => {
      expect(screen.getByRole('status')).toHaveTextContent(/email copied/i);
    });
  });

  it('does nothing when the clipboard API is unavailable', () => {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: undefined,
    });
    render(<CopyEmailLink>Say Hello</CopyEmailLink>);
    const link = screen.getByRole('link', { name: /click copies it/i });
    expect(() => fireEvent.click(link)).not.toThrow();
  });
});
