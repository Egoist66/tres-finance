

/**
 * Format a given number as a currency string using the
 * Intl.NumberFormat API.
 *
 * @param {number} sum - The number to format as a currency string.
 * @param {string} currency - The currency code to use for formatting.
 * @returns {string} The formatted currency string.
 */
export function formatCurrency(sum: number, currency: string): string {
    return new Intl.NumberFormat("en-US", { style: "currency", currency}).format(
      sum
    );
}