"use client"
import { useState } from "react";

interface AliasCopyProps {
  alias: string;
}

const AliasCopy = ({ alias }: AliasCopyProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(alias);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <span className="inline-flex items-center gap-2 align-middle">
      <span className="font-mono font-semibold text-green-900 bg-green-100 border border-green-300 rounded-md px-2 py-0.5 select-all">
        {alias}
      </span>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={copied ? "Alias copiado" : "Copiar alias"}
        className="inline-flex items-center gap-1 text-sm font-medium text-green-800 hover:text-green-900 hover:underline cursor-pointer"
      >
        {copied ? "✓ ¡Copiado!" : "📋 Copiar"}
      </button>
    </span>
  );
};

export default AliasCopy;
