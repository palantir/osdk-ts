import { useFoundryViewContext } from "@osdk/views-client-react.unstable";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Box,
  Callout,
  Container,
  Flex,
  Heading,
  Skeleton,
  Table,
} from "@radix-ui/themes";
import React, { useEffect } from "react";
import type MainParameters from "./main.parameters.js";

export const App: React.FC = () => {
  const { parameterValues, sendReady } = useFoundryViewContext<
    typeof MainParameters
  >();
  const { headerText, showWarning } = parameterValues;
  useEffect(() => {
    sendReady();
  }, []);
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
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Group</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell>example@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>example2@example.com</Table.Cell>
                <Table.Cell>Admin</Table.Cell>
              </Table.Row>

              <Table.Row>
                <Table.Cell>example3@example.com</Table.Cell>
                <Table.Cell>Developer</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </Container>
    </Box>
  );
};
