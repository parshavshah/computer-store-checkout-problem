import { PricingRule } from "../utils/types";

export const defaultRule: PricingRule = (items, prices) => {
  let total = 0;
  for (const [sku, quantity] of Object.entries(items)) {
    if (sku !== "atv" && sku !== "ipd") {
      total += quantity * prices[sku];
    }
  }
  return total;
};
