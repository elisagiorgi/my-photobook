"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  PhotobookState,
  ShippingData,
  BookFormat,
  SquareSize,
  RectangularSize,
} from "@/app/types/photobook";

interface PhotobookContextType {
  state: PhotobookState;
  setShippingData: (data: ShippingData) => void;
  setShippingDataSaved: (saved: boolean) => void;
  setBookFormat: (format: BookFormat | null) => void;
  setBookSize: (size: SquareSize | RectangularSize | null) => void;
  setPages: (pages: number) => void;
  setGiftWrap: (giftWrap: boolean) => void;
  setGiftMessage: (message: string) => void;
  setCustomCover: (customCover: boolean) => void;
  setCoverLayout: (layout: "single" | "collage" | undefined) => void;
  setOrderConfirmed: (confirmed: boolean) => void;
  resetState: () => void;
}

const PhotobookContext = createContext<PhotobookContextType | undefined>(
  undefined
);

const initialState: PhotobookState = {
  shippingData: null,
  shippingDataSaved: false,
  bookConfiguration: {
    format: null,
    size: null,
    pages: 20,
    giftWrap: false,
    giftMessage: "",
    customCover: false,
    coverLayout: undefined,
  },
  orderConfirmed: false,
};

export function PhotobookProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PhotobookState>(initialState);

  const setShippingData = (data: ShippingData) => {
    setState((prev) => ({
      ...prev,
      shippingData: data,
      shippingDataSaved: true,
    }));
  };

  const setShippingDataSaved = (saved: boolean) => {
    setState((prev) => ({ ...prev, shippingDataSaved: saved }));
  };

  const setBookFormat = (format: BookFormat | null) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        format,
      },
    }));
  };

  const setBookSize = (size: SquareSize | RectangularSize | null) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        size,
      },
    }));
  };

  const setPages = (pages: number) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        pages,
      },
    }));
  };

  const setGiftWrap = (giftWrap: boolean) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        giftWrap,
      },
    }));
  };

  const setGiftMessage = (giftMessage: string) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        giftMessage,
      },
    }));
  };

  const setCustomCover = (customCover: boolean) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        customCover,
      },
    }));
  };

  const setCoverLayout = (coverLayout: "single" | "collage" | undefined) => {
    setState((prev) => ({
      ...prev,
      bookConfiguration: {
        ...prev.bookConfiguration,
        coverLayout,
      },
    }));
  };

  const setOrderConfirmed = (confirmed: boolean) => {
    setState((prev) => ({ ...prev, orderConfirmed: confirmed }));
  };

  const resetState = () => {
    setState(initialState);
  };

  return (
    <PhotobookContext.Provider
      value={{
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
        resetState,
      }}
    >
      {children}
    </PhotobookContext.Provider>
  );
}

export function usePhotobook() {
  const context = useContext(PhotobookContext);
  if (context === undefined) {
    throw new Error("usePhotobook must be used within a PhotobookProvider");
  }
  return context;
}
