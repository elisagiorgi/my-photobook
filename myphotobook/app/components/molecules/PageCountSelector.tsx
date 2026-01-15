"use client";

import * as Slider from "@radix-ui/react-slider";
import { Label } from "@/components/atoms/Label";

interface PageCountSelectorProps {
  pages: number;
  onChange: (pages: number) => void;
}

export function PageCountSelector({ pages, onChange }: PageCountSelectorProps) {
  const showWarning = pages > 60;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label required>Numero di pagine</Label>
        <span
          className="text-2xl font-bold"
          style={{ color: "var(--primary)" }}
        >
          {pages}
        </span>
      </div>

      <Slider.Root
        className="relative flex items-center w-full h-5 select-none touch-none"
        value={[pages]}
        onValueChange={(value) => onChange(value[0])}
        min={10}
        max={100}
        step={1}
      >
        <Slider.Track
          className="relative grow rounded-full h-2"
          style={{ backgroundColor: "var(--border)" }}
        >
          <Slider.Range
            className="absolute h-full rounded-full"
            style={{ backgroundColor: "var(--primary)" }}
          />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"
          style={{
            backgroundColor: "var(--primary)",
            cursor: "grab",
          }}
          aria-label="Numero di pagine"
        />
      </Slider.Root>

      <div className="relative flex justify-between text-xs opacity-60">
        <span>10</span>

        <span>100</span>
      </div>

      {showWarning && (
        <div
          className="p-3 rounded-lg text-sm flex items-center gap-2"
          style={{
            backgroundColor: "var(--warning)",
            color: "var(--warning-foreground)",
          }}
        >
          <span className="text-lg">⚠️</span>
          <div>
            <strong>Attenzione:</strong> il costo aumenterà per l'aggiunta di
            pagine extra.
          </div>
        </div>
      )}
    </div>
  );
}
