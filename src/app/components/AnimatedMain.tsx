'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function AnimatedMain({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 0);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <main
      className={`max-w-5xl mx-auto px-4 py-12 ${animate ? 'fade-in' : ''}`}
      style={{ visibility: animate ? 'visible' : 'hidden' }}
    >
      {children}
    </main>
  );
}
