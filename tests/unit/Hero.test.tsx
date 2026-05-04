import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from '@/components/Hero';
import { siteConfig } from '@/data/site';

describe('Hero', () => {
  it('renders the name as h1', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent(siteConfig.name);
  });

  it('renders both CTAs pointing to projects and contact', () => {
    render(<Hero />);
    const work = screen.getByRole('link', { name: /ver projetos/i });
    const contact = screen.getByRole('link', { name: /falar comigo/i });
    expect(work).toHaveAttribute('href', '#projects');
    expect(contact).toHaveAttribute('href', '#contact');
  });

  it('marks the scroll indicator as decorative', () => {
    const { container } = render(<Hero />);
    const indicator = container.querySelector('[aria-hidden="true"]');
    expect(indicator).not.toBeNull();
  });
});
