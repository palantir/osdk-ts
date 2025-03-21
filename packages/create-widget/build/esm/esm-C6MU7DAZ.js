// ../create-widget.template.react.v2/build/esm/generatedNoCheck/index.js
var files = /* @__PURE__ */ new Map([["README.md.hbs", {
  type: "raw",
  body: `# {{project}}

This project was generated with [\`@osdk/create-widget\`](https://www.npmjs.com/package/@osdk/create-widget) and demonstrates developing custom widgets to be embedded within Foundry UIs such as Workshop. It uses the Ontology SDK package \`{{osdkPackage}}\` with React on top of Vite. Check out the [Vite](https://vitejs.dev/guide/) docs for further configuration. The Vite plugin [\`@osdk/widget.vite-plugin.unstable\`](https://www.npmjs.com/package/@osdk/widget.vite-plugin.unstable) automatically generates a \`widgets.config.json\` manifest file containing metadata about widgets inside this project during the build command.

## Developing

Run the following command or equivalent with your preferred package manager to start a local development server and follow the instructions printed to set up developer mode in Foundry:

\`\`\`sh
npm run dev
\`\`\`


## Deploying

A \`foundry.config.json\` file is included in the root of this project containing the deployment configuration to Foundry.

Run the following command or equivalent with your preferred package manager to create a production build of your widgets:

\`\`\`sh
npm run build
\`\`\`

A \`.palantir/widgets.config.json\` manifest file containing metadata about your widgets is created during the build.

Run the following command or equivalent with your preferred package manager to deploy the production build of your widgets:

\`\`\`sh
npx @osdk/cli@beta unstable widgetset deploy
\`\`\`

By default the \`package-json\` strategy is used for determining the version for your widgets from the \`version\` field in this project's \`package.json\` file. Remember to update this field and rerun the build command to update the manifest file when deploying a new version.

If you prefer to infer the version from a git tag, you can use the \`git-describe\` strategy by setting the \`autoVersion\` field in the \`foundry.config.json\` file to:

\`\`\`json
{
  "type": "git-describe",
  "tagPrefix": ""
}
\`\`\`
`
}], [".gitignore", {
  type: "raw",
  body: `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
`
}], ["eslint.config.mjs", {
  "type": "base64",
  "body": "Ly8gQHRzLWNoZWNrCmltcG9ydCBlc2xpbnQgZnJvbSAiQGVzbGludC9qcyI7CmltcG9ydCB0c1BhcnNlciBmcm9tICJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyIjsKaW1wb3J0ICogYXMgaW1wb3J0UGx1Z2luIGZyb20gImVzbGludC1wbHVnaW4taW1wb3J0IjsKaW1wb3J0IGpzeEExMXlQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1qc3gtYTExeSI7CmltcG9ydCByZWFjdFBsdWdpbiBmcm9tICJlc2xpbnQtcGx1Z2luLXJlYWN0IjsKaW1wb3J0IHJlYWN0SG9va3NQbHVnaW4gZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rcyI7CmltcG9ydCByZWFjdFJlZnJlc2ggZnJvbSAiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoIjsKaW1wb3J0IGdsb2JhbHMgZnJvbSAiZ2xvYmFscyI7CmltcG9ydCB0c2VzbGludCBmcm9tICJ0eXBlc2NyaXB0LWVzbGludCI7CgpleHBvcnQgZGVmYXVsdCB0c2VzbGludC5jb25maWcoewogIGZpbGVzOiBbImVzbGludC5jb25maWcubWpzIiwgInNyYy8qKi8qLntqcyxtanMsY2pzLHRzLGpzeCx0c3h9Il0sCiAgc2V0dGluZ3M6IHsKICAgIHJlYWN0OiB7CiAgICAgIHZlcnNpb246ICJkZXRlY3QiLAogICAgfSwKCiAgICAiaW1wb3J0L3Jlc29sdmVyIjogewogICAgICBub2RlOiB7CiAgICAgICAgZXh0ZW5zaW9uczogWyIuanMiLCAiLmpzeCIsICIudHMiLCAiLnRzeCJdLAogICAgICB9LAogICAgfSwKICB9LAogIGxhbmd1YWdlT3B0aW9uczogewogICAgZ2xvYmFsczogewogICAgICAuLi5nbG9iYWxzLmJyb3dzZXIsCiAgICB9LAoKICAgIHBhcnNlcjogdHNQYXJzZXIsCiAgfSwKICBleHRlbmRzOiBbCiAgICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwKICAgIC4uLnRzZXNsaW50LmNvbmZpZ3MucmVjb21tZW5kZWQsCiAgXSwKICBwbHVnaW5zOiB7CiAgICAicmVhY3QiOiAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5FU0xpbnQuUGx1Z2luICovIChyZWFjdFBsdWdpbiksCiAgICAicmVhY3QtcmVmcmVzaCI6IHJlYWN0UmVmcmVzaCwKICAgICJyZWFjdC1ob29rcyI6CiAgICAgIC8qKiBAdHlwZSBpbXBvcnQoImVzbGludCIpLkVTTGludC5QbHVnaW4gKi8gKHJlYWN0SG9va3NQbHVnaW4pLAogICAgImpzeC1hMTF5IjoganN4QTExeVBsdWdpbiwKICAgICJpbXBvcnQiOiBpbXBvcnRQbHVnaW4sCiAgfSwKICBydWxlczogewogICAgLi4uKAogICAgICAvKiogQHR5cGUgaW1wb3J0KCJlc2xpbnQiKS5MaW50ZXIuUnVsZXNSZWNvcmQgKi8KICAgICAgKHJlYWN0UGx1Z2luLmNvbmZpZ3MuZmxhdD8ucmVjb21tZW5kZWQucnVsZXMpCiAgICApLAogICAgInJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzIjogImVycm9yIiwKICAgICJyZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHMiOiAid2FybiIsCiAgICAuLi5qc3hBMTF5UGx1Z2luLmNvbmZpZ3MucmVjb21tZW5kZWQucnVsZXMsCiAgICAicmVhY3QtcmVmcmVzaC9vbmx5LWV4cG9ydC1jb21wb25lbnRzIjogWyJ3YXJuIiwgewogICAgICBhbGxvd0NvbnN0YW50RXhwb3J0OiB0cnVlLAogICAgfV0sCgogICAgImltcG9ydC9uYW1lZCI6ICJlcnJvciIsCiAgICAiaW1wb3J0L2RlZmF1bHQiOiAiZXJyb3IiLAogICAgImltcG9ydC9uYW1lc3BhY2UiOiAiZXJyb3IiLAogICAgImltcG9ydC9uby1kdXBsaWNhdGVzIjogImVycm9yIiwKICAgICJpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMiOiAiZXJyb3IiLAoKICAgICJyZWFjdC9yZWFjdC1pbi1qc3gtc2NvcGUiOiAib2ZmIiwKICB9LAp9KTsK"
}], ["index.html", {
  type: "raw",
  body: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Widget: Ontology SDK + React</title>
  </head>
  <body>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`
}], ["package.json.hbs", {
  type: "raw",
  body: `{
  "name": "{{project}}",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "lint": "eslint . --report-unused-disable-directives --max-warnings 0",
    "test": "vitest run --passWithNoTests",
    "preview": "vite preview"
  },
  "dependencies": {
    "{{osdkPackage}}": "latest",
    "@osdk/client": "^2.0.0",
    "@osdk/widget.client-react.unstable": "^1.1.0",
    "@osdk/widget.client.unstable": "^1.1.0",
    "@radix-ui/react-icons": "^1.3.1",
    "@radix-ui/themes": "^3.1.4",
    "react": "^18",
    "react-dom": "^18",
    "react-router-dom": "^6.23.1"
  },
  "devDependencies": {
    "@osdk/widget.vite-plugin.unstable": "^1.1.0",
    "@eslint/compat": "^1.2.1",
    "@eslint/js": "^9.13.0",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@typescript-eslint/eslint-plugin": "^8.21.0",
    "@typescript-eslint/parser": "^8.21.0",
    "@vitejs/plugin-react": "^4.2.0",
    "eslint": "^9.19.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-jsx-a11y": "^6.10.1",
    "eslint-plugin-react": "^7.37.2",
    "eslint-plugin-react-hooks": "^5.0.0",
    "eslint-plugin-react-refresh": "^0.4.14",
    "globals": "^15.11.0",
    "typescript": "~5.5.4",
    "typescript-eslint": "^8.21.0",
    "vite": "^6.0.11",
    "vitest": "^3.0.5"
  }
}`
}], ["src/Widget.tsx.hbs", {
  type: "raw",
  body: `import { $Actions, $Objects, $Queries } from "{{osdkPackage}}";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Skeleton,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import React, { useCallback, useState } from "react";
import { useWidgetContext } from "./context.js";

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

  const objectApiNames = Object.keys($Objects);
  const actionApiNames = Object.keys($Actions);
  const queryApiNames = Object.keys($Queries);

  return (
    <Box>
      <Container size="1">
        <Flex direction="column" gap="4">
          <Flex p="5" direction="column" gap="2">
            <Heading size="4">
              {parameters.state === "loading"
                  || parameters.state === "not-started"
                ? <Skeleton>Hello, world!</Skeleton>
                : headerText ?? "{{project}}"}
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
                        placeholder="Add item\u2026"
                      />
                      <Button onClick={handleAddTodoItem}>Add item</Button>
                    </Flex>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table.Root>

          </Flex>
          <Box>
            <Flex direction="column" gap="2">
              <Text>
                Try and of the following methods from your Ontology SDK
              </Text>
              <Flex direction="column" gap="1">
                <Heading size="4">Objects ({objectApiNames.length})</Heading>
                <pre>
                  {objectApiNames.map((objectApiName) => (
                    <div key={objectApiName}>client({objectApiName})</div>
                  ))}
                </pre>
              </Flex>
              <Flex direction="column" gap="1">
                <Heading size="4">Actions ({actionApiNames.length})</Heading>
                <pre>
                  {actionApiNames.map((actionApiName) => (
                    <div key={actionApiName}>client({actionApiName})</div>
                  ))}
                </pre>
              </Flex>
              <Flex direction="column" gap="1">
                <Heading size="4">Queries ({queryApiNames.length})</Heading>
                <pre>
                  {queryApiNames.map((queryApiName) => (
                    <div key={queryApiName}>client({queryApiName})</div>
                  ))}
                </pre>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};
`
}], ["src/context.ts", {
  "type": "base64",
  "body": "aW1wb3J0IHsgdXNlRm91bmRyeVdpZGdldENvbnRleHQgfSBmcm9tICJAb3Nkay93aWRnZXQuY2xpZW50LXJlYWN0LnVuc3RhYmxlIjsKaW1wb3J0IHR5cGUgTWFpbkNvbmZpZyBmcm9tICIuL21haW4uY29uZmlnLmpzIjsKCmV4cG9ydCBjb25zdCB1c2VXaWRnZXRDb250ZXh0ID0gdXNlRm91bmRyeVdpZGdldENvbnRleHQud2l0aFR5cGVzPAogIHR5cGVvZiBNYWluQ29uZmlnCj4oKTsK"
}], ["src/main.config.ts.hbs", {
  type: "raw",
  body: `import { defineConfig } from "@osdk/widget.client.unstable";

export default defineConfig({
  id: "widgetId",
  name: "Custom Widget",
  description: "An example custom widget implementation",
  type: "workshop",
  parameters: {
    headerText: {
      displayName: "Widget title",
      type: "string",
    },
    todoItems: {
      displayName: "Todo items",
      type: "array",
      subType: "string",
    },
  },
  events: {
    updateHeader: {
      displayName: "Update header",
      parameterUpdateIds: ["headerText"],
    },
    updateTodoItems: {
      displayName: "Update todo items",
      parameterUpdateIds: ["todoItems"],
    },
  },
});
`
}], ["src/main.css", {
  "type": "base64",
  "body": ""
}], ["src/main.tsx", {
  type: "raw",
  body: `import "@radix-ui/themes/styles.css";
import "./main.css";

import { FoundryWidget } from "@osdk/widget.client-react.unstable";
import { Theme } from "@radix-ui/themes";
import { createRoot } from "react-dom/client";
import MainConfig from "./main.config.js";
import { Widget } from "./Widget.js";

const root = document.querySelector("body")!;

createRoot(root).render(
  <Theme>
    <FoundryWidget config={MainConfig}>
      <Widget />
    </FoundryWidget>
  </Theme>,
);
`
}], ["src/vite-env.d.ts", {
  "type": "base64",
  "body": "Ly8vIDxyZWZlcmVuY2UgdHlwZXM9InZpdGUvY2xpZW50IiAvPgo="
}], ["tsconfig.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAidGFyZ2V0IjogIkVTMjAyMCIsCiAgICAidXNlRGVmaW5lRm9yQ2xhc3NGaWVsZHMiOiB0cnVlLAogICAgImxpYiI6IFsiRVMyMDIwIiwgIkRPTSIsICJET00uSXRlcmFibGUiXSwKICAgICJtb2R1bGUiOiAiRVNOZXh0IiwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAoKICAgIC8qIEJ1bmRsZXIgbW9kZSAqLwogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dJbXBvcnRpbmdUc0V4dGVuc2lvbnMiOiB0cnVlLAogICAgInJlc29sdmVKc29uTW9kdWxlIjogdHJ1ZSwKICAgICJpc29sYXRlZE1vZHVsZXMiOiB0cnVlLAogICAgIm5vRW1pdCI6IHRydWUsCiAgICAianN4IjogInJlYWN0LWpzeCIsCgogICAgLyogTGludGluZyAqLwogICAgInN0cmljdCI6IHRydWUsCiAgICAibm9VbnVzZWRMb2NhbHMiOiB0cnVlLAogICAgIm5vVW51c2VkUGFyYW1ldGVycyI6IHRydWUsCiAgICAibm9GYWxsdGhyb3VnaENhc2VzSW5Td2l0Y2giOiB0cnVlCiAgfSwKICAiaW5jbHVkZSI6IFsic3JjIl0sCiAgInJlZmVyZW5jZXMiOiBbeyAicGF0aCI6ICIuL3RzY29uZmlnLm5vZGUuanNvbiIgfV0KfQo="
}], ["tsconfig.node.json", {
  "type": "base64",
  "body": "ewogICJjb21waWxlck9wdGlvbnMiOiB7CiAgICAiY29tcG9zaXRlIjogdHJ1ZSwKICAgICJza2lwTGliQ2hlY2siOiB0cnVlLAogICAgIm1vZHVsZSI6ICJFU05leHQiLAogICAgIm1vZHVsZVJlc29sdXRpb24iOiAiYnVuZGxlciIsCiAgICAiYWxsb3dTeW50aGV0aWNEZWZhdWx0SW1wb3J0cyI6IHRydWUKICB9LAogICJpbmNsdWRlIjogWyJ2aXRlLmNvbmZpZy50cyJdCn0K"
}], ["vite.config.ts.hbs", {
  type: "raw",
  body: `import foundryWidgetPlugin from "@osdk/widget.vite-plugin.unstable";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), foundryWidgetPlugin()],
  server: {
    port: 8080,
    cors: true,
  },
  build: {
    rollupOptions: {
      input: ["./index.html"],
    },
  },
});
`
}]]);

export { files };
//# sourceMappingURL=esm-C6MU7DAZ.js.map
//# sourceMappingURL=esm-C6MU7DAZ.js.map