import { PricingRule } from "../utils/types";

// Pricing rules implementation
export const appleTVRule: PricingRule = (items, prices) => {
  const quantity = items["atv"] || 0;
  const price = prices["atv"];
  const discountedQuantity = Math.floor(quantity / 3) * 2 + (quantity % 3);
  return discountedQuantity * price;
};
