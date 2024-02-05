/**
 * Pure Function in TypeScript:
 * - Same input always returns the same output.
 * - No side effects.
 * - All dependencies are injected.
 * 
 * Breaking functions into pure functions facilitates easy testing.
 * 
 * Types of Tests:
 * - Unit Test: Testing a single unit of code.
 * - Integration Test: Testing multiple units of code.
 */

export function addNumbers(a: number, b: number) {
  return a + b;
}
