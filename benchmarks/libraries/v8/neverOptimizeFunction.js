/**
 * @template {T extends (...args: any[]) => any}
 * @param {T} f 
 * @returns {T}
 */
export function neverOptimizeFunction(f) {
    %NeverOptimizeFunction(f);
    return f;
}
