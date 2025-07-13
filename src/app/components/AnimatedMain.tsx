'use client';

export default function AnimatedMain({ children }: { children: React.ReactNode }) {
  return (
    <main className={`max-w-5xl mx-auto px-4 py-12 `}>
      {children}
    </main>
  );
}
