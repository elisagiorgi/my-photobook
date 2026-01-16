"use client";

import { useState } from "react";
import { ExtraOptions } from "@/components/molecules/ExtraOptions";

export default function TestExtraOptionsPage() {
  const [giftWrap, setGiftWrap] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");
  const [customCover, setCustomCover] = useState(false);
  const [coverLayout, setCoverLayout] = useState<
    "single" | "collage" | undefined
  >();

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
          <h1 className="text-3xl font-bold mb-2">Test Opzioni Extra</h1>
        </header>

        <div
          className="rounded-2xl p-6 mb-6"
          style={{ backgroundColor: "var(--disabled)" }}
        >
          <h2 className="text-xl font-semibold mb-4">Opzioni Extra</h2>
          <ExtraOptions
            giftWrap={giftWrap}
            giftMessage={giftMessage}
            customCover={customCover}
            coverLayout={coverLayout}
            onGiftWrapChange={setGiftWrap}
            onGiftMessageChange={setGiftMessage}
            onCustomCoverChange={setCustomCover}
            onCoverLayoutChange={setCoverLayout}
          />
        </div>
      </div>
    </div>
  );
}
