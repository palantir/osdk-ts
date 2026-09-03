// Webpack bundle verification entry point.
// Imports all public browser-consumable packages to verify they can be
// resolved and bundled by webpack without errors.

import * as Api from "@osdk/api";
import * as Client from "@osdk/client";
import * as OAuth from "@osdk/oauth";
import * as OsdkReact from "@osdk/react";
import * as ReactComponents from "@osdk/react-components";
import * as ReactComponentsActionForm from "@osdk/react-components/action-form";
import * as ReactComponentsExperimental from "@osdk/react-components/experimental";
import * as ReactComponentsPdfViewer from "@osdk/react-components/pdf-viewer";
import * as ReactComponentsFilterList from "@osdk/react-components/filter-list";
import * as ReactComponentsMarkdown from "@osdk/react-components/markdown-viewer";
import * as ReactComponentsObjectTable from "@osdk/react-components/object-table";
import * as ReactComponentsPrimitives from "@osdk/react-components/primitives";
import * as ReactComponentsTiffViewer from "@osdk/react-components/tiff-viewer";
import * as WidgetClientReact from "@osdk/widget.client-react";

// Re-export to prevent tree-shaking from removing the imports
export {
  Api,
  Client,
  OAuth,
  OsdkReact,
  ReactComponents,
  ReactComponentsActionForm,
  ReactComponentsExperimental,
  ReactComponentsFilterList,
  ReactComponentsMarkdown,
  ReactComponentsObjectTable,
  ReactComponentsPdfViewer,
  ReactComponentsPrimitives,
  ReactComponentsTiffViewer,
  WidgetClientReact,
};
