import { expect } from "chai";
import { Checkout } from "../src/Checkout";
import { defaultRule } from "../src/rules/defaultRule";
import { superIPadRule } from "../src/rules/superIPadRule";
import { appleTVRule } from "../src/rules/appleTvRule";
import { prices } from "../src/pricing";

const pricingRules = [appleTVRule, superIPadRule, defaultRule];

describe("Checkout System", () => {
  it("should apply 3-for-2 deal on Apple TVs", () => {
    const co = new Checkout(pricingRules, prices);
    co.scan("atv");
    co.scan("atv");
    co.scan("atv");
    co.scan("vga");
    expect(co.total()).to.equal(249);
  });

  it("should apply bulk discount on Super iPads", () => {
    const co = new Checkout(pricingRules, prices);
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).to.equal(2499.95);
  });

  it("should calculate total for mixed items in any order", () => {
    const co = new Checkout(pricingRules, prices);
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("atv");
    co.scan("ipd");
    co.scan("ipd");
    co.scan("ipd");
    expect(co.total()).to.equal(2718.95);
  });

  it("should handle items with no discounts", () => {
    const co = new Checkout(pricingRules, prices);
    co.scan("vga");
    co.scan("vga");
    expect(co.total()).to.equal(60.0);
  });

  it("should calculate total when no items are scanned", () => {
    const co = new Checkout(pricingRules, prices);
    expect(co.total()).to.equal(0.0);
  });
});
