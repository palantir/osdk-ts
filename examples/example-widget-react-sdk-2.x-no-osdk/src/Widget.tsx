import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Skeleton,
  Table,
  TextField,
  Theme,
} from "@radix-ui/themes";
import React, { useCallback, useState } from "react";
import { useWidgetContext } from "./context.js";
import { useDarkTheme } from "./useDarkTheme.js";

export const Widget: React.FC = () => {
  const { parameters, emitEvent } = useWidgetContext();
  const { headerText, todoItems } = parameters.values;
  const [newTodoItem, setNewTodoItem] = useState("");

  const handleAddTodoItem = useCallback(() => {
    emitEvent("updateTodoItems", {
      parameterUpdates: {
        todoItems: [...(todoItems ?? []), newTodoItem],
      },
    });
    setNewTodoItem("");
  }, [emitEvent, newTodoItem, todoItems]);

  const handleNewTodoItemChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoItem(event.target.value);
    },
    []
  );

  const isDarkTheme = useDarkTheme();

  return (
    <Theme appearance={isDarkTheme ? "dark" : "light"}>
      <Box p="2">
        <Container size="1">
          <Flex direction="column" gap="4">
            <Flex p="5" direction="column" gap="2">
              <Heading size="4">
                {parameters.state === "loading" ||
                parameters.state === "not-started" ? (
                  <Skeleton>Hello, world!</Skeleton>
                ) : (
                  headerText ?? "example-widget-react-sdk-2.x-no-osdk"
                )}
              </Heading>

              <Table.Root>
                <Table.Header>
                  <Table.Row>
                    <Table.ColumnHeaderCell>Finished</Table.ColumnHeaderCell>
                    <Table.ColumnHeaderCell>Item</Table.ColumnHeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {(parameters.state === "loading" ||
                    parameters.state === "not-started") && (
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
                  {parameters.state === "loaded" &&
                    todoItems?.map((item, index) => (
                      <Table.Row key={index}>
                        <Table.Cell>
                          <Checkbox />
                        </Table.Cell>
                        <Table.Cell>{item}</Table.Cell>
                      </Table.Row>
                    ))}
                  {parameters.state === "loaded" &&
                    (todoItems ?? []).length === 0 && (
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
          </Flex>
        </Container>
      </Box>
    </Theme>
  );
};
