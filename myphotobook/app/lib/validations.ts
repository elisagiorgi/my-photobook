import { z } from "zod";

export const shippingFormSchema = z.object({
  firstName: z.string().min(1, "Nome obbligatorio"),
  lastName: z.string().min(1, "Cognome obbligatorio"),
  address: z.string().min(1, "Indirizzo obbligatorio"),
  city: z.string().min(1, "Città obbligatoria"),
  postalCode: z
    .string()
    .min(1, "CAP obbligatorio")
    .regex(/^\d{5}$/, "CAP deve essere di 5 cifre"),
  country: z.string().min(1, "Paese obbligatorio"),
});

export type ShippingFormData = z.infer<typeof shippingFormSchema>;
