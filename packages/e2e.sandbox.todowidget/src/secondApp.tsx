import { useFoundryWidgetContext } from "@osdk/widget-client-react.unstable";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Box,
  Callout,
  Container,
  Flex,
  Heading,
  Skeleton,
} from "@radix-ui/themes";
import React, { useEffect } from "react";
import type Config from "./second.config.js";

export const App: React.FC = () => {
  const { parameterValues, parameterLoadingState, hostEventTarget } =
    useFoundryWidgetContext.withTypes<typeof Config>()();
  const { headerText, showWarning } = parameterValues;

  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", (event) => {
      console.log("Received event:", event);
    });
  }, []);

  return (
    <Box>
      <Container size="1">
        <Flex p="5" direction="column" gap="2">
          <Heading size="4">
            {parameterLoadingState === "loading"
                || parameterLoadingState === "not-started"
              ? <Skeleton>Hello, world!</Skeleton>
              : headerText}
          </Heading>
          {parameterLoadingState === "loaded" && showWarning && (
            <Callout.Root size="1" color="orange" variant="soft">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>This is a data warning</Callout.Text>
            </Callout.Root>
          )}
        </Flex>
      </Container>
    </Box>
  );
};
