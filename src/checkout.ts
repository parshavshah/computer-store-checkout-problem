import { PricingRule } from "./utils/types";

export class Checkout {
  private pricingRules: PricingRule[];
  private items: Record<string, number>;
  private prices: Record<string, number>;

  constructor(pricingRules: PricingRule[], prices: Record<string, number>) {
    this.pricingRules = pricingRules;
    this.items = {};
    this.prices = prices;
  }

  scan(item: string): void {
    if (!this.items[item]) {
      this.items[item] = 0;
    }
    this.items[item]++;
  }

  total(): number {
    let total = 0;

    for (const rule of this.pricingRules) {
      total += rule(this.items, this.prices);
    }

    return total;
  }
}
