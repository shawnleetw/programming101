export function assert(expected, actual) {
  if (expected !== actual) {
    throw new Error(`Expected ${typeof expected}:${expected} but got ${typeof expected}:${actual}`);
  }
}