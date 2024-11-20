import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
  Box,
  Button,
  Callout,
  Checkbox,
  Container,
  Flex,
  Heading,
  Skeleton,
  Table,
  TextField,
} from "@radix-ui/themes";
import React, { useCallback, useEffect, useState } from "react";
import { useFoundryContext } from "./context.js";

export const App: React.FC = () => {
  const { parameterValues, hostEventTarget, emitEvent } = useFoundryContext();
  const [newTodoItem, setNewTodoItem] = useState("");
  const { headerText, showWarning, todoItems } = parameterValues;

  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", (event) => {
      console.log("Received event:", event);
    });
  }, []);

  const handleAddTodoItem = useCallback(() => {
    emitEvent("view.emit-event", {
      eventId: "updateTodoItems",
      parameterUpdates: {
        todoItems: [
          ...(todoItems.value.type === "loaded"
            ? todoItems.value.value ?? []
            : []),
          newTodoItem,
        ],
      },
    });
    setNewTodoItem("");
  }, [newTodoItem]);

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
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Finished</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Item</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {(todoItems.value.type === "loading"
                || todoItems.value.type === "not-started") && (
                <>
                  <Table.Row>
                    <Table.Cell>
                      <Skeleton>
                        <Checkbox />
                      </Skeleton>
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton>Loading cell</Skeleton>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                      <Skeleton>
                        <Checkbox />
                      </Skeleton>
                    </Table.Cell>
                    <Table.Cell>
                      <Skeleton>Loading cell</Skeleton>
                    </Table.Cell>
                  </Table.Row>
                </>
              )}
              {todoItems.value.type === "loaded"
                && todoItems.value.value?.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>{item}</Table.Cell>
                  </Table.Row>
                ))}
              {todoItems.value.type === "loaded"
                && (todoItems.value.value ?? []).length === 0 && (
                <Table.Row>
                  <Table.Cell colSpan={2}>No items yet</Table.Cell>
                </Table.Row>
              )}
              <Table.Row>
                <Table.Cell colSpan={2}>
                  <Flex gap="2">
                    <TextField.Root
                      value={newTodoItem}
                      onChange={handleNewTodoItemChange}
                      size="2"
                      placeholder="Add item…"
                    />
                    <Button onClick={handleAddTodoItem}>Add item</Button>
                  </Flex>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Root>
        </Flex>
      </Container>
    </Box>
  );
};
