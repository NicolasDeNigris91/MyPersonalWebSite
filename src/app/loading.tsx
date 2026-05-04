export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Carregando"
      className="bg-obsidian flex min-h-screen items-center justify-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="bg-gold-leaf h-px w-32 animate-pulse opacity-60" />
        <span className="text-caption text-mist tracking-luxury font-mono uppercase">
          Carregando
        </span>
      </div>
    </div>
  );
}
