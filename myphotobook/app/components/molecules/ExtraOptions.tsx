"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { Check } from "lucide-react";

interface ExtraOptionsProps {
  giftWrap: boolean;
  giftMessage?: string;
  customCover: boolean;
  coverLayout?: "single" | "collage";
  onGiftWrapChange: (checked: boolean) => void;
  onGiftMessageChange: (message: string) => void;
  onCustomCoverChange: (checked: boolean) => void;
  onCoverLayoutChange: (layout: "single" | "collage" | undefined) => void;
}

export function ExtraOptions({
  giftWrap,
  giftMessage = "",
  customCover,
  coverLayout,
  onGiftWrapChange,
  onGiftMessageChange,
  onCustomCoverChange,
  onCoverLayoutChange,
}: ExtraOptionsProps) {
  const handleCustomCoverChange = (checked: boolean) => {
    onCustomCoverChange(checked);
    if (!checked) {
      onCoverLayoutChange(undefined);
    }
  };

  const handleGiftWrapChange = (checked: boolean) => {
    onGiftWrapChange(checked);
    if (!checked) {
      onGiftMessageChange("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox.Root
            id="giftWrap"
            checked={giftWrap}
            onCheckedChange={(checked) =>
              handleGiftWrapChange(checked === true)
            }
            className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: giftWrap ? "var(--primary)" : "transparent",
              borderColor: giftWrap ? "var(--primary)" : "var(--border)",
            }}
            aria-label="Confezione regalo"
          >
            <Checkbox.Indicator>
              <Check size={18} style={{ color: "white" }} aria-hidden="true" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Label htmlFor="giftWrap" className="cursor-pointer mb-0">
            Confezione regalo
          </Label>
        </div>

        {giftWrap && (
          <div className="ml-8 space-y-2">
            <Label htmlFor="giftMessage">
              Testo biglietto personalizzato (opzionale)
            </Label>
            <Input
              id="giftMessage"
              value={giftMessage}
              onChange={(e) => onGiftMessageChange(e.target.value)}
              placeholder="Da parte di..."
              maxLength={100}
            />
            <p className="text-xs opacity-60">
              {giftMessage.length}/100 caratteri
            </p>
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox.Root
            id="customCover"
            checked={customCover}
            onCheckedChange={(checked) =>
              handleCustomCoverChange(checked === true)
            }
            className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: customCover ? "var(--primary)" : "transparent",
              borderColor: customCover ? "var(--primary)" : "var(--border)",
            }}
            aria-label="Copertina fotografica personalizzata"
          >
            <Checkbox.Indicator>
              <Check size={18} style={{ color: "white" }} aria-hidden="true" />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <Label htmlFor="customCover" className="cursor-pointer mb-0">
            Copertina fotografica personalizzata
          </Label>
        </div>

        {customCover && (
          <div className="ml-8 space-y-2">
            <Label required>Layout copertina</Label>
            <div className="grid grid-cols-2 gap-3">
              <Button
                type="button"
                variant={coverLayout === "single" ? "primary" : "outline"}
                onClick={() => onCoverLayoutChange("single")}
              >
                Singola foto
              </Button>
              <Button
                type="button"
                variant={coverLayout === "collage" ? "primary" : "outline"}
                onClick={() => onCoverLayoutChange("collage")}
              >
                Collage
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
