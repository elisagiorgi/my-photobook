"use client";

import { useState } from "react";
import { PageCountSelector } from "@/components/molecules/PageCountSelector";

export default function TestPageCountPage() {
  const [pages, setPages] = useState(20);

  const handlePagesChange = (newPages: number) => {
    setPages(newPages);
    console.log("Numero di pagine:", newPages);
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Test Numero Pagine</h1>
        </header>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--disabled)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Numero di Pagine</h2>
          <PageCountSelector pages={pages} onChange={handlePagesChange} />
        </div>
      </div>
    </div>
  );
}
