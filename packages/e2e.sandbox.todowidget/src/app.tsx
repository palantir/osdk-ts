import type { Dataset } from "@osdk/foundry.datasets";
import { Datasets } from "@osdk/foundry.datasets";
import { type AsyncValue, hasValue } from "@osdk/widget-client.unstable";
import { ExclamationTriangleIcon, TableIcon } from "@radix-ui/react-icons";
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
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useWidgetContext } from "./context.js";

export const App: React.FC = () => {
  const { parameters, hostEventTarget, emitEvent, createOntologyClient } =
    useWidgetContext();
  const { headerText, todoItems, showWarning, datasetRid } = parameters.values;
  const [newTodoItem, setNewTodoItem] = useState("");
  const [dataset, setDataset] = useState<AsyncValue<Dataset>>({
    type: "not-started",
  });
  const client = useMemo(
    () => createOntologyClient("ri.ontology.main.ontology.0000-0000-0000-0000"),
    [createOntologyClient],
  );

  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", (event) => {
      console.log("Received event:", event);
    });
  }, []);

  useEffect(() => {
    if (datasetRid != null) {
      setDataset((prevDataset) => {
        if (prevDataset.type !== "not-started") {
          return {
            type: "reloading",
            value: prevDataset.type !== "loading"
              ? prevDataset.value
              : undefined,
          };
        }
        return { type: "loading" };
      });
      Datasets.get(client, datasetRid).then((dataset) => {
        setDataset({
          type: "loaded",
          value: dataset,
        });
      }).catch((error) => {
        setDataset(prevDataset => ({
          type: "failed",
          error: error as Error,
          value: hasValue(prevDataset) ? prevDataset.value : undefined,
        }));
      });
    }
  }, [datasetRid]);

  const handleAddTodoItem = useCallback(() => {
    emitEvent("updateTodoItems", {
      parameterUpdates: {
        todoItems: [...(todoItems ?? []), newTodoItem],
      },
    });
    setNewTodoItem("");
  }, [newTodoItem, todoItems]);

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
            {parameters.state === "loading"
                || parameters.state === "not-started"
              ? <Skeleton>Hello, world!</Skeleton>
              : headerText}
          </Heading>
          {parameters.state === "loaded" && showWarning && (
            <Callout.Root size="1" color="orange" variant="soft">
              <Callout.Icon>
                <ExclamationTriangleIcon />
              </Callout.Icon>
              <Callout.Text>This is a data warning</Callout.Text>
            </Callout.Root>
          )}
          <Heading size="2">
            {dataset.type === "loading" || dataset.type === "reloading"
              ? <Skeleton>Loading dataset…</Skeleton>
              : dataset.type === "loaded"
              ? (
                <>
                  <TableIcon /> {dataset.value?.name}
                </>
              )
              : dataset.type === "failed"
              ? "Failed to load dataset"
              : "No dataset loaded"}
          </Heading>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeaderCell>Finished</Table.ColumnHeaderCell>
                <Table.ColumnHeaderCell>Item</Table.ColumnHeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {(parameters.state === "loading"
                || parameters.state === "not-started") && (
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
              {parameters.state === "loaded"
                && todoItems?.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>
                      <Checkbox />
                    </Table.Cell>
                    <Table.Cell>{item}</Table.Cell>
                  </Table.Row>
                ))}
              {parameters.state === "loaded"
                && (todoItems ?? []).length === 0 && (
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
