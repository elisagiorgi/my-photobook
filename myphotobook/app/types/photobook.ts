export interface ShippingData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
export const COUNTRY_OPTIONS = [
  { value: "IT", label: "Italia" },
  { value: "FR", label: "Francia" },
  { value: "DE", label: "Germania" },
] as const;

export type BookFormat = "square" | "horizontal" | "vertical";
export type SquareSize = "20x20" | "30x30";
export type RectangularSize = "15x21" | "21x28" | "30x20";

export interface BookConfiguration {
  format: BookFormat | null;
  size: SquareSize | RectangularSize | null;
  pages: number;
  giftWrap: boolean;
  giftMessage?: string;
  customCover: boolean;
  coverLayout?: "single" | "collage";
}

export interface PhotobookState {
  shippingData: ShippingData | null;
  shippingDataSaved: boolean;
  bookConfiguration: BookConfiguration;
  orderConfirmed: boolean;
}

export const isShippingDataComplete = (data: ShippingData | null): boolean => {
  if (!data) return false;
  return !!(
    data.firstName &&
    data.lastName &&
    data.address &&
    data.city &&
    data.postalCode &&
    data.country
  );
};

export const isBookConfigurationComplete = (
  config: BookConfiguration
): boolean => {
  const basicComplete = !!(config.format && config.size);
  const coverLayoutComplete = config.customCover ? !!config.coverLayout : true;
  return basicComplete && coverLayoutComplete;
};
