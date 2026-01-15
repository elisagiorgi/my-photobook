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
