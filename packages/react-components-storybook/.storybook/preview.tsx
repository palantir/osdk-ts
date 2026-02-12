import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { mockClient } from "../src/mocks/mockClient.js";
import { fauxFoundry } from "../src/mocks/fauxFoundry.js";
import "@osdk/react-components-styles/styles.css";
import "../src/styles/storybook.css";

// Initialize MSW with proper options
initialize({
  onUnhandledRequest: "warn",
  serviceWorker: {
    url: "/mockServiceWorker.js",
  },
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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
  ],
};

export default preview;