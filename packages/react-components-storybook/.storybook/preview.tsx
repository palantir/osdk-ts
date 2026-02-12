import { createClient } from "@osdk/client";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { fauxFoundry } from "../src/mocks/fauxFoundry.js";
import "@osdk/react-components/styles.css";
import "@osdk/react-components-styles";
import "../src/styles/storybook.css";
import "./themes.css";

// Initialize MSW with proper options
initialize({
  onUnhandledRequest: "warn",
  serviceWorker: {
    url: "/mockServiceWorker.js",
  },
});

// Create client after MSW is initialized
const mockClient = createClient(
  fauxFoundry.baseUrl,
  fauxFoundry.defaultOntologyRid,
  () => Promise.resolve("myAccessToken"),
);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      codePanel: true,
    },
    // Register FauxFoundry handlers globally
    msw: {
      handlers: fauxFoundry.handlers,
    },
  },
  loaders: [mswLoader],
  decorators: [
    (Story) => (
      <OsdkProvider2 client={mockClient}>
        <Story />
      </OsdkProvider2>
    ),
    withThemeByDataAttribute({
      themes: {
        light: "light",
        dark: "dark",
        modern: "modern",
      },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
  ],
};

export default preview;
