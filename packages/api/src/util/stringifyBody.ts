export function stringifyBody(
  body: object | undefined,
): BodyInit | null | undefined {
  return body != null ? JSON.stringify(body) : undefined;
}
