const chars = ('0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz').split('');
const crypto = typeof globalThis.crypto !== 'undefined' && globalThis.crypto || module[`require`].bind(module)('node:crypto').webcrypto;

let bytes = new Uint8Array(0);
let position = 0;

export function createId(length = 24) {
  let id = '';
  while (id.length < length) {
    if (position === bytes.length) {
      bytes = crypto.getRandomValues(new Uint8Array(40));
      position = 0;
    }
    for (; position < bytes.length; position++) {
      const b = bytes[position];
      // Length of `chars` is 62. We only take bytes between 0 and 62*4-1 (both inclusive). The value is then evenly
      // mapped to indices of `chars` via a modulo operation.
      const maxValue = 62 * 4 - 1;
      if (b <= maxValue) {
        id += chars[b % 62];
      }
      if (id.length >= length) break;
    }
  }
  return id;
}