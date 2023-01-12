const CURRENCY_FOTMATTER = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
export function formatCurrency(number: number) {
  return CURRENCY_FOTMATTER.format(number);
}
