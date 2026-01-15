"use client";

import { useState } from "react";
import { BookFormatSelector } from "@/components/molecules/BookFormatSelector";
import type {
  BookFormat,
  SquareSize,
  RectangularSize,
} from "@/app/types/photobook";

export default function TestBookFormatPage() {
  const [format, setFormat] = useState<BookFormat | null>(null);
  const [size, setSize] = useState<SquareSize | RectangularSize | null>(null);

  const handleFormatChange = (newFormat: BookFormat) => {
    setFormat(newFormat);
    setSize(null);
  };

  const handleSizeChange = (newSize: SquareSize | RectangularSize) => {
    setSize(newSize);
    console.log("Configurazione libro:", { format, size: newSize });
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
          <h1 className="text-3xl font-bold mb-2">Test Formato Libro</h1>
          <p className="text-sm opacity-75">
            Seleziona il formato e la dimensione del fotolibro
          </p>
        </header>

        <div
          className="rounded-2xl p-6"
          style={{ backgroundColor: "var(--disabled)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Configurazione Libro</h2>
          <BookFormatSelector
            format={format}
            size={size}
            onFormatChange={handleFormatChange}
            onSizeChange={handleSizeChange}
          />
        </div>

        <div className="mt-6 p-4 rounded-lg bg-gray-100 text-sm">
          <p>Formato: {format || "non selezionato"}</p>
          <p>Dimensione: {size || "non selezionata"}</p>
        </div>
      </div>
    </div>
  );
}
