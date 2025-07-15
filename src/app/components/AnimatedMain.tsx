'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedMain({ children }: Props) {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setVisible(true);
  }, [pathname]);

  return (
    <main className={`max-w-5xl mx-auto px-4 py-12 transition-opacity duration-700 ${ visible ? 'opacity-100' : 'opacity-0'}`}>
      {children}
    </main>
  );
}
