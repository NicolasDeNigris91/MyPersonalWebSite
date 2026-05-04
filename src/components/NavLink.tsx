'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';

interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  active?: boolean;
}

export function NavLink({
  children,
  active,
  className = '',
  href,
  ...rest
}: NavLinkProps) {
  return (
    <a
      href={href}
      aria-current={active ? 'location' : undefined}
      className={[
        'group focus-visible:outline-platinum text-caption tracking-luxury relative inline-flex flex-col font-sans uppercase transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4',
        active ? 'text-pearl' : 'text-chrome hover:text-pearl',
        className,
      ].join(' ')}
      {...rest}
    >
      <span className="leading-none">{children}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 100 2"
        preserveAspectRatio="none"
        className="mt-1 h-px w-full overflow-visible"
      >
        <line
          x1="0"
          y1="1"
          x2="100"
          y2="1"
          stroke="var(--color-gold-leaf, #B8963E)"
          strokeWidth={1}
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={active ? 0 : 1}
          className="transition-[stroke-dashoffset] duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:[stroke-dashoffset:0] group-focus-visible:[stroke-dashoffset:0]"
        />
      </svg>
    </a>
  );
}
