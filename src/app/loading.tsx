export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando"
      className="min-h-screen flex items-center justify-center bg-obsidian"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="h-px w-32 bg-gold-leaf opacity-60 animate-pulse" />
        <span className="font-mono text-caption text-mist tracking-luxury uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
