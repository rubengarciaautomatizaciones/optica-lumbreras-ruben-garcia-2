import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertInquiry } from "@shared/routes";

export function useCreateInquiry() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate with schema on client side first (optional but good practice)
      // data is already validated by form, but we send it raw
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = await res.json();
          throw new Error(error.message || "Validation failed");
        }
        throw new Error("Failed to send message");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    // No need to invalidate queries since we don't have a list view publicly
    // But if we had an admin panel, we would do:
    // onSuccess: () => queryClient.invalidateQueries({ queryKey: ['/api/inquiries'] }),
  });
}
