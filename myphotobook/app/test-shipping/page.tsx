"use client";

import { useState } from "react";
import { ShippingForm } from "@/components/molecules/ShippingForm";
import type { ShippingFormData } from "@/app/lib/validations";

export default function TestShippingPage() {
  const [savedData, setSavedData] = useState<ShippingFormData | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (data: ShippingFormData) => {
    setSavedData(data);
    setIsSaved(true);
    console.log("Dati spedizione salvati:", data);
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Test Form Spedizione</h1>
          <p className="text-sm opacity-75">
            Compila tutti i campi obbligatori
          </p>
        </header>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--disabled)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Dati di Spedizione</h2>
          <ShippingForm onSave={handleSave} disabled={isSaved} />
        </div>

        {savedData && (
          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: "var(--success)",
              color: "var(--success-foreground)",
            }}
          >
            <h3 className="text-lg font-semibold mb-3">✓ Dati salvati</h3>
          </div>
        )}
      </div>
    </div>
  );
}
