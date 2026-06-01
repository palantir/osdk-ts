/** Display formatting for timestamps and dates. Pure — no SDK imports. */

const DATE_TIME_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit",
});

const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
});

/** Formats an ISO timestamp string (or epoch ms) as a date-time. Returns "" for nullish input. */
export function formatTimestamp(
  value: string | number | undefined | null,
): string {
  if (value == null) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return DATE_TIME_FORMAT.format(date);
}

/** Formats an ISO date string (or epoch ms) as a date. Returns "" for nullish input. */
export function formatDate(value: string | number | undefined | null): string {
  if (value == null) {
    return "";
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  return DATE_FORMAT.format(date);
}
