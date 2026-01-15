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
