import type { Preview } from "@storybook/react";
import { initialize, mswLoader } from "msw-storybook-addon";
import { OsdkProvider2 } from "@osdk/react/experimental";
import { mockClient } from "../src/mocks/mockClient.js";
import "@osdk/react-components-styles/styles.css";
import "../src/styles/storybook.css";

// Initialize MSW
initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
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