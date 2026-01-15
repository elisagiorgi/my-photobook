"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Label } from "@/components/atoms/Label";
import {
  shippingFormSchema,
  type ShippingFormData,
} from "@/app/lib/validations";
import { COUNTRY_OPTIONS } from "@/app/types/photobook";

interface ShippingFormProps {
  onSave: (data: ShippingFormData) => void;
  disabled?: boolean;
}

export function ShippingForm({ onSave, disabled = false }: ShippingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ShippingFormData>({
    resolver: zodResolver(shippingFormSchema),
  });

  const onSubmit = (data: ShippingFormData) => {
    onSave(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" required>
            Nome
          </Label>
          <Input
            id="firstName"
            {...register("firstName")}
            error={!!errors.firstName}
            disabled={disabled}
            placeholder="Mario"
          />
          {errors.firstName && (
            <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName" required>
            Cognome
          </Label>
          <Input
            id="lastName"
            {...register("lastName")}
            error={!!errors.lastName}
            disabled={disabled}
            placeholder="Rossi"
          />
          {errors.lastName && (
            <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="address" required>
          Indirizzo
        </Label>
        <Input
          id="address"
          {...register("address")}
          error={!!errors.address}
          disabled={disabled}
          placeholder="Via Roma, 123"
        />
        {errors.address && (
          <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
            {errors.address.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="city" required>
            Città
          </Label>
          <Input
            id="city"
            {...register("city")}
            error={!!errors.city}
            disabled={disabled}
            placeholder="Milano"
          />
          {errors.city && (
            <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
              {errors.city.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="postalCode" required>
            CAP
          </Label>
          <Input
            id="postalCode"
            {...register("postalCode")}
            error={!!errors.postalCode}
            disabled={disabled}
            placeholder="20100"
            maxLength={5}
          />
          {errors.postalCode && (
            <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
              {errors.postalCode.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="country" required>
          Paese
        </Label>
        <select
          id="country"
          {...register("country")}
          disabled={disabled}
          className="w-full px-3 py-2 rounded-lg border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "var(--disabled)",
            borderColor: errors.country ? "var(--error)" : "var(--border)",
            color: "var(--text)",
          }}
        >
          <option value="">Seleziona un paese</option>
          {COUNTRY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.country && (
          <p className="text-sm mt-1" style={{ color: "var(--error)" }}>
            {errors.country.message}
          </p>
        )}
      </div>
      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          disabled={disabled || isSubmitting}
        >
          {isSubmitting ? "Salvataggio..." : "Salva indirizzo"}
        </Button>
      </div>
    </form>
  );
}
