import { Button } from "@/components/atoms/Button";
import { Label } from "@/components/atoms/Label";
import type {
  BookFormat,
  SquareSize,
  RectangularSize,
} from "@/app/types/photobook";

interface BookFormatSelectorProps {
  format: BookFormat | null;
  size: SquareSize | RectangularSize | null;
  onFormatChange: (format: BookFormat) => void;
  onSizeChange: (size: SquareSize | RectangularSize | null) => void;
}

const RECTANGULAR_SIZES: { value: RectangularSize; label: string }[] = [
  { value: "15x21", label: "15x21 cm (A5)" },
  { value: "21x28", label: "21x28 cm (A4)" },
  { value: "30x20", label: "30x20 cm (Panorama)" },
];

export function BookFormatSelector({
  format,
  size,
  onFormatChange,
  onSizeChange,
}: BookFormatSelectorProps) {
  const handleFormatChange = (newFormat: BookFormat) => {
    onFormatChange(newFormat);
    if (format !== newFormat) {
      onSizeChange(null);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <Label required>Formato del libro</Label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
          <Button
            type="button"
            variant={format === "square" ? "primary" : "outline"}
            onClick={() => handleFormatChange("square")}
            className="h-auto py-4"
          >
            <div className="text-center flex flex-col items-center gap-1">
              <div className="text-sm">Quadrato</div>
            </div>
          </Button>

          <Button
            type="button"
            variant={format === "horizontal" ? "primary" : "outline"}
            onClick={() => handleFormatChange("horizontal")}
            className="h-auto py-4"
          >
            <div className="text-center flex flex-col items-center gap-1">
              <div className="text-sm">Orizzontale</div>
            </div>
          </Button>

          <Button
            type="button"
            variant={format === "vertical" ? "primary" : "outline"}
            onClick={() => handleFormatChange("vertical")}
            className="h-auto py-4"
          >
            <div className="text-center flex flex-col items-center gap-1">
              <div className="text-sm">Verticale</div>
            </div>
          </Button>
        </div>
      </div>

      {format === "square" && (
        <div>
          <Label required>Dimensione</Label>
          <div className="grid grid-cols-2 gap-3 mt-2">
            <Button
              type="button"
              variant={size === "20x20" ? "primary" : "outline"}
              onClick={() => onSizeChange("20x20")}
            >
              20x20 cm
            </Button>
            <Button
              type="button"
              variant={size === "30x30" ? "primary" : "outline"}
              onClick={() => onSizeChange("30x30")}
            >
              30x30 cm
            </Button>
          </div>
        </div>
      )}

      {(format === "horizontal" || format === "vertical") && (
        <div>
          <Label htmlFor="rectangularSize" required>
            Dimensione
          </Label>
          <select
            id="rectangularSize"
            value={size || ""}
            onChange={(e) => onSizeChange(e.target.value as RectangularSize)}
            className="w-full px-3 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 mt-2"
            style={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              color: "var(--text)",
            }}
          >
            <option value="">Seleziona una dimensione</option>
            {RECTANGULAR_SIZES.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
