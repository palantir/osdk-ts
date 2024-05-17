import { pino } from "pino";
import PinoPretty from "pino-pretty";

export const logger = pino(
  { level: "debug" },
  PinoPretty.build({ sync: true }),
);
