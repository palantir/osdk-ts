// Polyfill for node:util in browser environment

export const inspect = (obj: any, options?: any): string => {
  // Simple fallback implementation for browser
  try {
    return JSON.stringify(obj, null, 2);
  } catch (e) {
    return String(obj);
  }
};

export default {
  inspect,
};
