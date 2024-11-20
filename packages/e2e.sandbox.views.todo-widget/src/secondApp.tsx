import { useFoundryViewContext } from "@osdk/views-client-react.unstable";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Box,
  Callout,
  Container,
  Flex,
  Heading,
  Skeleton,
} from "@radix-ui/themes";
import React, { useCallback, useEffect, useState } from "react";
import type Config from "./second.config.js";

export const App: React.FC = () => {
  const { parameterValues, hostEventTarget } = useFoundryViewContext.withTypes<
    typeof Config
  >()();
  const [newTodoItem, setNewTodoItem] = useState("");
  const { headerText, showWarning } = parameterValues;

  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", (event) => {
      console.log("Received event:", event);
    });
  }, []);

  const handleNewTodoItemChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoItem(event.target.value);
    },
    [],
  );

  return (
    <Box>
      <Container size="1">
        <Flex p="5" direction="column" gap="2">
          <Heading size="4">
            {headerText.value.type === "loading"
                || headerText.value.type === "not-started"
              ? <Skeleton>Hello, world!</Skeleton>
              : (
                headerText.value.value
              )}
          </Heading>
          {showWarning.value.type === "loaded" && showWarning.value.value && (
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
