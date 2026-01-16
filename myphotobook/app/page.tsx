"use client";

import { ShippingForm } from "@/components/molecules/ShippingForm";
import { BookFormatSelector } from "@/components/molecules/BookFormatSelector";
import { PageCountSelector } from "@/components/molecules/PageCountSelector";
import { ExtraOptions } from "@/components/molecules/ExtraOptions";
import { PreviewPanel } from "@/components/organisms/PreviewPanel";
import { usePhotobook } from "@/app/context/PhotobookContext";
import type { ShippingData } from "@/app/types/photobook";
import { Icon } from "@/components/atoms/Icon";

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
  } = usePhotobook();

  const handleShippingSubmit = (data: ShippingData) => {
    setShippingData(data);
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
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
            <Icon name="photo_library" size="lg" />
            Crea il tuo FotoLibro
          </h1>
          <p className="text-sm opacity-75">
            Compila tutti i campi e visualizza il riepilogo in tempo reale
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <section
              className="rounded-2xl p-6"
              style={{ backgroundColor: "var(--disabled)" }}
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="book" size="md" />
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
                <Icon name="menu_book" size="md" />
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
                <Icon name="card_giftcard" size="md" />
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
                <Icon name="local_shipping" size="md" />
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
                  <Icon name="edit" size="sm" />
                  Modifica dati
                </button>
              )}
            </section>
          </div>

          <div className="lg:col-span-1">
            <PreviewPanel state={state} />
          </div>
        </div>
      </div>
    </div>
  );
}
