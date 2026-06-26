/**
 * Pure, side-effect-free secret scanner.
 *
 * @typedef {{ line: number, kind: "JWT", token: string }} Finding
 */

// Three base64url segments, each with an 8-char floor, separated by dots. The
// 3-segment + length-floor shape is load-bearing: it rejects near-misses like
// `eyJabc.def` while matching real JWTs anywhere within a line.
const JWT_RE = /eyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}/g;

/**
 * Scan the full contents of a file for secrets.
 *
 * @param {string} text - The full file contents.
 * @returns {Finding[]} The findings (empty if none). Each finding carries the
 *   verbatim matched `token` so a developer can grep for it and remove it.
 */
export function scanText(text) {
  const findings = [];
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    // `matchAll` manages the regex cursor per-call, so each line is scanned
    // independently with no shared mutable `lastIndex` state to leak across rows.
    for (const match of lines[i].matchAll(JWT_RE)) {
      findings.push({ line: i + 1, kind: "JWT", token: match[0] });
    }
  }
  return findings;
}
