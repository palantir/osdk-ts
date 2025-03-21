import { useFoundryWidgetContext } from "@osdk/widget.client-react.unstable";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { Box, Callout, Container, Flex, Heading, Skeleton } from "@radix-ui/themes";
import React, { useEffect } from "react";
const useWidgetContext = useFoundryWidgetContext.withTypes();
export const App = () => {
  const {
    parameters,
    hostEventTarget
  } = useWidgetContext();
  const {
    headerText,
    showWarning
  } = parameters.values;
  useEffect(() => {
    hostEventTarget.addEventListener("host.update-parameters", event => {
      console.log("Received event:", event);
    });
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
  }, /*#__PURE__*/React.createElement(Callout.Icon, null, /*#__PURE__*/React.createElement(ExclamationTriangleIcon, null)), /*#__PURE__*/React.createElement(Callout.Text, null, "This is a data warning")))));
};
//# sourceMappingURL=secondApp.js.map