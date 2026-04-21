// Webpack bundle verification entry point.
// Imports all public browser-consumable packages to verify they can be
// resolved and bundled by webpack without errors.

import * as Api from "@osdk/api";
import * as Client from "@osdk/client";
import * as OAuth from "@osdk/oauth";
import * as OsdkReact from "@osdk/react";
import * as ReactComponents from "@osdk/react-components";
import * as WidgetClientReact from "@osdk/widget.client-react";

// Re-export to prevent tree-shaking from removing the imports
export {
  Api,
  Client,
  OAuth,
  OsdkReact,
  ReactComponents,
  WidgetClientReact,
};
