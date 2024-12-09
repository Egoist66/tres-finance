/**
 * Delay function that returns a promise that resolves after specified amount of time.
 * @param ms The amount of time to wait in milliseconds
 * @returns A promise that resolves after the specified amount of time
 */

export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))