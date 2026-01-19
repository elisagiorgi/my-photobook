import type { PhotobookState } from "@/app/types/photobook";
import {
  isShippingDataComplete,
  isBookConfigurationComplete,
} from "@/app/types/photobook";
import { CircleCheck, Smile, TriangleAlert } from "lucide-react";
import { Button } from "@/components/atoms/Button";

interface PreviewPanelProps {
  state: PhotobookState;
  onConfirmOrder: () => void;
}

export function PreviewPanel({ state, onConfirmOrder }: PreviewPanelProps) {
  const { shippingData, shippingDataSaved, bookConfiguration, orderConfirmed } =
    state;
  const shippingComplete = isShippingDataComplete(shippingData);
  const bookComplete = isBookConfigurationComplete(bookConfiguration);
  const canConfirm =
    shippingComplete && shippingDataSaved && bookComplete && !orderConfirmed;

  const formatDisplayName: Record<string, string> = {
    square: "Quadrato",
    horizontal: "Orizzontale",
    vertical: "Verticale",
  };

  const coverLayoutDisplayName = {
    single: "Singola foto",
    collage: "Collage",
  };

  return (
    <section
      className="rounded-2xl p-6 space-y-6 sticky top-4"
      style={{ backgroundColor: "var(--disabled)" }}
      role="complementary"
      aria-label="Riepilogo ordine"
    >
      <header>
        <h2 className="text-xl font-bold mb-1">Riepilogo ordine</h2>
        <p className="text-sm opacity-75">Configurazione del tuo fotolibro</p>
      </header>

      <div
        className="h-px"
        style={{ backgroundColor: "var(--border)" }}
        aria-hidden="true"
      />

      <section className="space-y-2" aria-labelledby="config-heading">
        <h3
          id="config-heading"
          className="font-semibold flex items-center gap-2"
        >
          {bookComplete ? (
            <CircleCheck
              size={20}
              style={{ color: "var(--success)" }}
              aria-hidden="true"
            />
          ) : (
            <TriangleAlert
              size={20}
              style={{ color: "var(--warning)" }}
              aria-hidden="true"
            />
          )}
          Configurazione libro
        </h3>

        {bookConfiguration.format ? (
          <div className="text-sm">
            <span className="opacity-75">Formato: </span>
            <strong>{formatDisplayName[bookConfiguration.format]}</strong>
            {bookConfiguration.size && <span> {bookConfiguration.size}</span>}
          </div>
        ) : (
          <p className="text-sm opacity-75 italic">Seleziona il formato</p>
        )}

        {bookConfiguration.pages ? (
          <div className="text-sm">
            <span className="opacity-75">Pagine: </span>
            <strong>{bookConfiguration.pages}</strong>
            {bookConfiguration.pages > 60 && (
              <span style={{ color: "var(--warning)" }}> (costo extra)</span>
            )}
          </div>
        ) : (
          <p className="text-sm opacity-75 italic">
            Seleziona il numero di pagine
          </p>
        )}
      </section>
      <div
        className="h-px"
        style={{ backgroundColor: "var(--border)" }}
        aria-hidden="true"
      />

      <section className="space-y-2" aria-labelledby="shipping-heading">
        <h3
          id="shipping-heading"
          className="font-semibold flex items-center gap-2"
        >
          {shippingComplete && shippingDataSaved ? (
            <CircleCheck
              size={20}
              style={{ color: "var(--success)" }}
              aria-hidden="true"
            />
          ) : (
            <TriangleAlert
              size={20}
              style={{ color: "var(--warning)" }}
              aria-hidden="true"
            />
          )}
          Dati spedizione
        </h3>

        {!shippingComplete || !shippingDataSaved ? (
          <p className="text-sm opacity-75 italic">
            {!shippingComplete
              ? "Compila tutti i campi obbligatori"
              : "Salva i dati spedizione"}
          </p>
        ) : (
          <div className="text-sm space-y-1 opacity-90">
            <p>
              <strong>
                {shippingData?.firstName} {shippingData?.lastName}
              </strong>
            </p>
            <p>{shippingData?.address}</p>
            <p>
              {shippingData?.postalCode} {shippingData?.city}
            </p>
            <p>{shippingData?.country}</p>
          </div>
        )}
      </section>

      {(bookConfiguration.giftWrap || bookConfiguration.customCover) && (
        <>
          <div className="h-px" style={{ backgroundColor: "var(--border)" }} />
          <section className="space-y-2">
            <h3 className="font-semibold">Opzioni extra</h3>

            {bookConfiguration.giftWrap && (
              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-1">
                  <CircleCheck size={18} style={{ color: "var(--success)" }} />
                  Confezione regalo
                </div>
                <div>
                  {bookConfiguration.giftMessage && (
                    <p className="ml-5 mt-1 italic opacity-75">
                      &quot;{bookConfiguration.giftMessage}&quot;
                    </p>
                  )}
                </div>
              </div>
            )}

            {bookConfiguration.customCover && (
              <div className="flex flex-col text-sm">
                <div className="flex items-center gap-1">
                  {bookConfiguration.coverLayout ? (
                    <CircleCheck
                      size={18}
                      style={{ color: "var(--success)" }}
                    />
                  ) : (
                    <TriangleAlert
                      size={18}
                      style={{ color: "var(--warning)" }}
                    />
                  )}
                  Copertina personalizzata
                </div>
                <div>
                  {bookConfiguration.coverLayout ? (
                    <span className="ml-5 mt-1 italic opacity-75">
                      ({coverLayoutDisplayName[bookConfiguration.coverLayout]})
                    </span>
                  ) : (
                    <span
                      className="ml-5 mt-1 text-sm italic opacity-75"
                      style={{ color: "var(--warning-foreground)" }}
                    >
                      Seleziona un layout
                    </span>
                  )}
                </div>
              </div>
            )}
          </section>
        </>
      )}
      <div className="h-px" style={{ backgroundColor: "var(--border)" }} />

      {!orderConfirmed && (
        <div
          className="p-3 rounded-lg text-sm"
          style={{
            backgroundColor:
              shippingComplete && shippingDataSaved && bookComplete
                ? "var(--success)"
                : "var(--warning)",
            color:
              shippingComplete && shippingDataSaved && bookComplete
                ? "var(--success-foreground)"
                : "var(--warning-foreground)",
          }}
        >
          {shippingComplete && shippingDataSaved && bookComplete ? (
            <div className="flex items-center gap-2">
              <CircleCheck size={20} />
              <div className="flex flex-col">
                <div className="font-semibold">Tutto pronto!</div>
                <div className="text-xs opacity-90">
                  Clicca sul pulsante qui sotto per completare l&apos;acquisto.
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <TriangleAlert size={24} />
              <span>Completa tutti i campi obbligatori per proseguire.</span>
            </div>
          )}
        </div>
      )}

      {orderConfirmed ? (
        <div
          className="p-4 rounded-lg text-center"
          style={{
            backgroundColor: "var(--success)",
            color: "var(--success-foreground)",
          }}
          role="status"
          aria-live="polite"
        >
          <div className="flex flex-col items-center gap-3">
            <Smile size={48} aria-hidden="true" />
            <div>
              <p className="font-bold text-lg">Ordine confermato!</p>
              <p className="text-sm mt-1">Grazie per averci scelto.</p>
            </div>
          </div>
        </div>
      ) : (
        <Button
          variant="primary"
          onClick={onConfirmOrder}
          disabled={!canConfirm}
          className="w-full"
          aria-label={
            canConfirm
              ? "Conferma ordine"
              : "Completa tutti i campi per confermare l'ordine"
          }
        >
          Conferma ordine
        </Button>
      )}
    </section>
  );
}
