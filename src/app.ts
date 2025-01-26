import { Checkout } from "../src/Checkout";
import { defaultRule } from "../src/rules/defaultRule";
import { superIPadRule } from "../src/rules/superIPadRule";
import { appleTVRule } from "../src/rules/appleTvRule";
import { prices } from "../src/pricing";

const pricingRules = [appleTVRule, superIPadRule, defaultRule];

// Example scenarios

// first
const co1 = new Checkout(pricingRules, prices);
co1.scan("atv");
co1.scan("atv");
co1.scan("atv");
co1.scan("vga");
console.log(co1.total());

// second
const co2 = new Checkout(pricingRules, prices);
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("atv");
co2.scan("ipd");
co2.scan("ipd");
co2.scan("ipd");
console.log(co2.total());
