'use client';

import { usePathname } from "next/navigation";
import AnimatedMain from "./AnimatedMain";

export default function AnimatedMainClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return <AnimatedMain key={pathname}>{children}</AnimatedMain>;
}