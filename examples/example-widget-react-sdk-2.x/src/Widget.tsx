import { Button, Card, Classes, H4, Tag } from "@blueprintjs/core";
import {
  type FoundryWidgetClientContext,
  useFoundryWidgetContext,
} from "@osdk/widget.client-react";
import clsx from "clsx";
import React, { useCallback, useEffect } from "react";
import type MainConfig from "./main.config.js";
import { useDarkTheme } from "./useDarkTheme.js";
import css from "./Widget.module.css";
// import { useOsdkClient } from "@osdk/react";

const useWidgetContext: () => FoundryWidgetClientContext<typeof MainConfig> =
  useFoundryWidgetContext.withTypes<typeof MainConfig>();

export const Widget: React.FC = () => {
  // View the API documentation for your widget set to learn how to use the Ontology SDK.
  // https://fake.palantirfoundry.com/workspace/custom-widgets/widget-set/ri.widgetregistry..widget-set.fake/sdk/docs
  // const client = useOsdkClient();

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
      <H4 className={css.header}>Hello, {greetingName}!</H4>
      <Card className={css.card} compact={true}>
        <div>Count: {counterValue}</div>
        <Button onClick={handleResetCounter}>Reset</Button>
      </Card>
      <div>
        <span>OSDK: </span>
        <Tag minimal={true}>@osdk/e2e.generated.catchall</Tag>
      </div>
    </div>
  );
};
