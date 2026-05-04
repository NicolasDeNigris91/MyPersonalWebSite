import { siteConfig } from '@/data/site';

export function Footer() {
  return (
    <footer className="border-mist border-t px-8 py-12 md:px-16 lg:px-24">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-caption text-mist font-mono tracking-wide">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="text-caption text-mist font-mono tracking-wide">
          Built with Next.js
        </p>
      </div>
    </footer>
  );
}
