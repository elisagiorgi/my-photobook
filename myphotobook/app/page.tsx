import { Label } from "@/components/atoms/Label";

export default function Home() {
  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <header className="text-center py-8 md:py-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Benvenuto in My Photo Book
          </h1>
          <p className="text-sm md:text-base opacity-75">
            Crea il tuo fotolibro personalizzato
          </p>
          <Label className="mt-6" required>
            Esempio di etichetta richiesta
          </Label>
        </header>
      </div>
    </div>
  );
}
