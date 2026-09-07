// Webpack bundle verification entry point.
// Imports all public browser-consumable packages to verify they can be
// resolved and bundled by webpack without errors.

import * as Api from "@osdk/api";
import * as Client from "@osdk/client";
import * as OAuth from "@osdk/oauth";
import * as OsdkReact from "@osdk/react";
import * as ReactComponents from "@osdk/react-components";
import * as ReactComponentsActionForm from "@osdk/react-components/action-form";
import * as ReactComponentsDocumentViewer from "@osdk/react-components/document-viewer";
import * as ReactComponentsEmailViewer from "@osdk/react-components/email-viewer";
import * as ReactComponentsExperimental from "@osdk/react-components/experimental";
import * as ReactComponentsExperimentalActionForm from "@osdk/react-components/experimental/action-form";
import * as ReactComponentsExperimentalDocumentViewer from "@osdk/react-components/experimental/document-viewer";
import * as ReactComponentsExperimentalEmailViewer from "@osdk/react-components/experimental/email-viewer";
import * as ReactComponentsExperimentalFilterList from "@osdk/react-components/experimental/filter-list";
import * as ReactComponentsExperimentalImageViewer from "@osdk/react-components/experimental/image-viewer";
import * as ReactComponentsExperimentalMarkdownRenderer from "@osdk/react-components/experimental/markdown-renderer";
import * as ReactComponentsExperimentalObjectTable from "@osdk/react-components/experimental/object-table";
import * as ReactComponentsExperimentalPdfViewer from "@osdk/react-components/experimental/pdf-viewer";
import * as ReactComponentsExperimentalSpreadsheetViewer from "@osdk/react-components/experimental/spreadsheet-viewer";
import * as ReactComponentsExperimentalTiffRenderer from "@osdk/react-components/experimental/tiff-renderer";
import * as ReactComponentsExperimentalVideoViewer from "@osdk/react-components/experimental/video-viewer";
import * as ReactComponentsExperimentalXmlViewer from "@osdk/react-components/experimental/xml-viewer";
import * as ReactComponentsFilterList from "@osdk/react-components/filter-list";
import * as ReactComponentsImageViewer from "@osdk/react-components/image-viewer";
import * as ReactComponentsMarkdown from "@osdk/react-components/markdown-viewer";
import * as ReactComponentsObjectTable from "@osdk/react-components/object-table";
import * as ReactComponentsPdfViewer from "@osdk/react-components/pdf-viewer";
import * as ReactComponentsPrimitives from "@osdk/react-components/primitives";
import * as ReactComponentsSpreadsheetViewer from "@osdk/react-components/spreadsheet-viewer";
import * as ReactComponentsTiffViewer from "@osdk/react-components/tiff-viewer";
import * as ReactComponentsVideoViewer from "@osdk/react-components/video-viewer";
import * as ReactComponentsXmlViewer from "@osdk/react-components/xml-viewer";
import * as WidgetClientReact from "@osdk/widget.client-react";

// Re-export to prevent tree-shaking from removing the imports
export {
  Api,
  Client,
  OAuth,
  OsdkReact,
  ReactComponents,
  ReactComponentsActionForm,
  ReactComponentsDocumentViewer,
  ReactComponentsEmailViewer,
  ReactComponentsExperimental,
  ReactComponentsExperimentalActionForm,
  ReactComponentsExperimentalDocumentViewer,
  ReactComponentsExperimentalEmailViewer,
  ReactComponentsExperimentalFilterList,
  ReactComponentsExperimentalImageViewer,
  ReactComponentsExperimentalMarkdownRenderer,
  ReactComponentsExperimentalObjectTable,
  ReactComponentsExperimentalPdfViewer,
  ReactComponentsExperimentalSpreadsheetViewer,
  ReactComponentsExperimentalTiffRenderer,
  ReactComponentsExperimentalVideoViewer,
  ReactComponentsExperimentalXmlViewer,
  ReactComponentsFilterList,
  ReactComponentsImageViewer,
  ReactComponentsMarkdown,
  ReactComponentsObjectTable,
  ReactComponentsPdfViewer,
  ReactComponentsPrimitives,
  ReactComponentsSpreadsheetViewer,
  ReactComponentsTiffViewer,
  ReactComponentsVideoViewer,
  ReactComponentsXmlViewer,
  WidgetClientReact,
};
