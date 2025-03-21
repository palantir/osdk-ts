import { Datasets } from "@osdk/foundry.datasets";
import { ExclamationTriangleIcon, TableIcon } from "@radix-ui/react-icons";
import { Box, Button, Callout, Checkbox, Container, Flex, Heading, Skeleton, Table, Text, TextField } from "@radix-ui/themes";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useWidgetContext } from "./context.js";
export const App = () => {
  const {
    parameters,
    hostEventTarget,
    emitEvent,
    createOntologyClient
  } = useWidgetContext();
  const {
    headerText,
    todoItems,
    showWarning,
    datasetRid
  } = parameters.values;
  const [newTodoItem, setNewTodoItem] = useState("");
  const [dataset, setDataset] = useState({
    type: "not-started"
  });
  const client = useMemo(() => createOntologyClient("ri.ontology.main.ontology.0000-0000-0000-0000"), [createOntologyClient]);
  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", event => {
      console.log("Received event:", event);
    });
  }, []);
  useEffect(() => {
    if (datasetRid != null) {
      setDataset(prevDataset => {
        if (prevDataset.type !== "not-started") {
          return {
            type: "reloading",
            value: prevDataset.value
          };
        }
        return {
          type: "loading"
        };
      });
      Datasets.get(client, datasetRid).then(dataset => {
        setDataset({
          type: "loaded",
          value: dataset
        });
      }).catch(error => {
        setDataset(prevDataset => ({
          type: "failed",
          error: error,
          value: prevDataset.value
        }));
      });
    }
  }, [datasetRid]);
  const handleAddTodoItem = useCallback(() => {
    emitEvent("updateTodoItems", {
      parameterUpdates: {
        todoItems: [...(todoItems ?? []), newTodoItem]
      }
    });
    setNewTodoItem("");
  }, [newTodoItem, todoItems]);
  const handleNewTodoItemChange = useCallback(event => {
    setNewTodoItem(event.target.value);
  }, []);
  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Container, {
    size: "1"
  }, /*#__PURE__*/React.createElement(Flex, {
    p: "5",
    direction: "column",
    gap: "2"
  }, /*#__PURE__*/React.createElement(Heading, {
    size: "4"
  }, parameters.state === "loading" || parameters.state === "not-started" ? /*#__PURE__*/React.createElement(Skeleton, null, "Hello, world!") : headerText), parameters.state === "loaded" && showWarning && /*#__PURE__*/React.createElement(Callout.Root, {
    size: "1",
    color: "orange",
    variant: "soft"
  }, /*#__PURE__*/React.createElement(Callout.Icon, null, /*#__PURE__*/React.createElement(ExclamationTriangleIcon, null)), /*#__PURE__*/React.createElement(Callout.Text, null, "This is a data warning")), /*#__PURE__*/React.createElement(Heading, {
    size: "2"
  }, dataset.type === "loading" || dataset.type === "reloading" ? /*#__PURE__*/React.createElement(Skeleton, null, "Loading dataset\u2026") : dataset.type === "loaded" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(TableIcon, null), " ", dataset.value?.name) : dataset.type === "failed" ? /*#__PURE__*/React.createElement(Text, null, /*#__PURE__*/React.createElement(ExclamationTriangleIcon, null), " Failed to load dataset") : "No dataset loaded"), /*#__PURE__*/React.createElement(Table.Root, null, /*#__PURE__*/React.createElement(Table.Header, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.ColumnHeaderCell, null, "Finished"), /*#__PURE__*/React.createElement(Table.ColumnHeaderCell, null, "Item"))), /*#__PURE__*/React.createElement(Table.Body, null, (parameters.state === "loading" || parameters.state === "not-started" || parameters.state === "reloading") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null, /*#__PURE__*/React.createElement(Checkbox, null))), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null, "Loading cell"))), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null, /*#__PURE__*/React.createElement(Checkbox, null))), /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Skeleton, null, "Loading cell")))), parameters.state === "loaded" && todoItems?.map((item, index) => /*#__PURE__*/React.createElement(Table.Row, {
    key: index
  }, /*#__PURE__*/React.createElement(Table.Cell, null, /*#__PURE__*/React.createElement(Checkbox, null)), /*#__PURE__*/React.createElement(Table.Cell, null, item))), parameters.state === "loaded" && (todoItems ?? []).length === 0 && /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    colSpan: 2
  }, "No items yet")), /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    colSpan: 2
  }, /*#__PURE__*/React.createElement(Flex, {
    gap: "2"
  }, /*#__PURE__*/React.createElement(TextField.Root, {
    value: newTodoItem,
    onChange: handleNewTodoItemChange,
    size: "2",
    placeholder: "Add item\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: handleAddTodoItem
  }, "Add item")))))))));
};
//# sourceMappingURL=app.js.map