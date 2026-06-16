import { Button, Card, Classes, H4 } from "@blueprintjs/core";
import {
  type FoundryWidgetClientContext,
  useFoundryWidgetContext,
} from "@osdk/widget.client-react";
import clsx from "clsx";
import React, { useCallback, useEffect } from "react";
import type MainConfig from "./main.config.js";
import { useDarkTheme } from "./useDarkTheme.js";
import css from "./Widget.module.css";

const useWidgetContext: () => FoundryWidgetClientContext<typeof MainConfig> =
  useFoundryWidgetContext.withTypes<typeof MainConfig>();

export const Widget: React.FC = () => {
  const { parameters, emitEvent } = useWidgetContext();
  const greetingName = parameters.values.greetingName ?? "World";
  const counterValue = parameters.values.counterValue ?? 0;

  const setCounterValue = useCallback(
    (value: number) =>
      emitEvent("setCounterValue", {
        parameterUpdates: { counterValue: value },
      }),
    [emitEvent],
  );

  const handleResetCounter = useCallback(() => setCounterValue(0), [
    setCounterValue,
  ]);

  useEffect(() => {
    const interval = setInterval(() => setCounterValue(counterValue + 1), 1000);
    return () => clearInterval(interval);
  }, [setCounterValue, counterValue]);

  const isDarkTheme = useDarkTheme();

  return (
    <div className={clsx(css.container, isDarkTheme && Classes.DARK)}>
      <H4>Hello, {greetingName}!</H4>
      <Card className={css.card} compact={true}>
        <div>Count: {counterValue}</div>
        <Button onClick={handleResetCounter}>Reset</Button>
      </Card>
    </div>
  );
};
