import { PricingRule } from "../utils/types";

export const superIPadRule: PricingRule = (items, prices) => {
  const quantity = items["ipd"] || 0;
  const price = quantity > 4 ? 499.99 : prices["ipd"];
  return quantity * price;
};
