"use client";

import { ShippingForm } from "@/components/molecules/ShippingForm";
import { BookFormatSelector } from "@/components/molecules/BookFormatSelector";
import { PageCountSelector } from "@/components/molecules/PageCountSelector";
import { ExtraOptions } from "@/components/molecules/ExtraOptions";
import { PreviewPanel } from "@/components/organisms/PreviewPanel";
import { usePhotobook } from "@/app/context/PhotobookContext";
import type { ShippingData } from "@/app/types/photobook";
import { Images, Book, BookOpen, Gift, Truck, Pencil } from "lucide-react";

export default function Home() {
  const {
    state,
    setShippingData,
    setShippingDataSaved,
    setBookFormat,
    setBookSize,
    setPages,
    setGiftWrap,
    setGiftMessage,
    setCustomCover,
    setCoverLayout,
    setOrderConfirmed,
  } = usePhotobook();

  const handleShippingSubmit = (data: ShippingData) => {
    setShippingData(data);
    console.log("Dati spedizione salvati:", data);
  };

  const handleConfirmOrder = () => {
    const orderPayload = {
      shippingData: state.shippingData,
      bookConfiguration: state.bookConfiguration,
      orderDate: new Date().toISOString(),
    };

    console.log("=== ORDINE CONFERMATO ===");
    console.log(JSON.stringify(orderPayload, null, 2));

    setOrderConfirmed(true);
  };

  return (
    <div
      className="min-h-screen p-4 md:p-8"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--text)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <header className="mb-8" role="banner">
          <h1
            id="main-title"
            className="text-3xl font-bold mb-2 flex items-center gap-2"
          >
            <Images size={36} aria-hidden="true" />
            Crea il tuo FotoLibro
          </h1>
          <p className="text-sm opacity-75">
            Compila tutti i campi e visualizza il riepilogo in tempo reale
          </p>
        </header>

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          role="main"
          aria-labelledby="main-title"
        >
          <div className="lg:col-span-2 space-y-6">
            <section
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--disabled)" }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Book size={24} />
                Formato libro
              </h2>
              <BookFormatSelector
                format={state.bookConfiguration.format}
                size={state.bookConfiguration.size}
                onFormatChange={setBookFormat}
                onSizeChange={setBookSize}
              />
            </section>

            <section
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--disabled)" }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen size={24} />
                Numero pagine
              </h2>
              <PageCountSelector
                pages={state.bookConfiguration.pages || 20}
                onChange={setPages}
              />
            </section>

            <section
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--disabled)" }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Gift size={24} />
                Opzioni extra
              </h2>
              <ExtraOptions
                giftWrap={state.bookConfiguration.giftWrap || false}
                giftMessage={state.bookConfiguration.giftMessage}
                customCover={state.bookConfiguration.customCover || false}
                coverLayout={state.bookConfiguration.coverLayout}
                onGiftWrapChange={setGiftWrap}
                onGiftMessageChange={setGiftMessage}
                onCustomCoverChange={setCustomCover}
                onCoverLayoutChange={setCoverLayout}
              />
            </section>

            <section
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--disabled)" }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Truck size={24} />
                Dati spedizione
              </h2>
              <ShippingForm
                onSave={handleShippingSubmit}
                disabled={state.shippingDataSaved}
              />
              {state.shippingDataSaved && (
                <button
                  onClick={() => setShippingDataSaved(false)}
                  className="mt-4 text-sm underline opacity-75 hover:opacity-100 flex items-center gap-1"
                >
                  <Pencil size={18} />
                  Modifica dati
                </button>
              )}
            </section>
          </div>

          <div className="lg:col-span-1">
            <PreviewPanel state={state} onConfirmOrder={handleConfirmOrder} />
          </div>
        </div>
      </div>
    </div>
  );
}
