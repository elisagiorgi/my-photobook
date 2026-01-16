"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Label } from "@/components/atoms/Label";
import { Input } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";

interface ExtraOptionsProps {
  giftWrap: boolean;
  giftMessage?: string;
  customCover: boolean;
  coverLayout?: "single" | "collage";
  onGiftWrapChange: (checked: boolean) => void;
  onGiftMessageChange: (message: string) => void;
  onCustomCoverChange: (checked: boolean) => void;
  onCoverLayoutChange: (layout: "single" | "collage") => void;
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
  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Checkbox.Root
            id="giftWrap"
            checked={giftWrap}
            onCheckedChange={(checked) => onGiftWrapChange(checked === true)}
            className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: giftWrap ? "var(--primary)" : "transparent",
              borderColor: giftWrap ? "var(--primary)" : "var(--border)",
            }}
          >
            <Checkbox.Indicator>
              <svg
                width="12"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="white"
                />
              </svg>
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
            onCheckedChange={(checked) => onCustomCoverChange(checked === true)}
            className="w-5 h-5 rounded border-2 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2"
            style={{
              backgroundColor: customCover ? "var(--primary)" : "transparent",
              borderColor: customCover ? "var(--primary)" : "var(--border)",
            }}
          >
            <Checkbox.Indicator>
              <svg
                width="12"
                height="12"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
                  fill="white"
                />
              </svg>
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
