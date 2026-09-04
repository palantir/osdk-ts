---
"@osdk/react-components": minor
---

Add stable export paths for ObjectTable, FilterList, ActionForm, DocumentViewer, and every viewer used by DocumentViewer.

The previous `experimental` export paths are deprecated but remain available for compatibility. Migrate imports as follows:

```diff
- import { ObjectTable } from "@osdk/react-components/experimental/object-table";
+ import { ObjectTable } from "@osdk/react-components/object-table";

- import { FilterList } from "@osdk/react-components/experimental/filter-list";
+ import { FilterList } from "@osdk/react-components/filter-list";

- import { ActionForm } from "@osdk/react-components/experimental/action-form";
+ import { ActionForm } from "@osdk/react-components/action-form";

- import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";
+ import { DocumentViewer } from "@osdk/react-components/document-viewer";

- import { EmailViewer } from "@osdk/react-components/experimental/email-viewer";
+ import { EmailViewer } from "@osdk/react-components/email-viewer";

- import { ImageViewer } from "@osdk/react-components/experimental/image-viewer";
+ import { ImageViewer } from "@osdk/react-components/image-viewer";

- import { MarkdownViewer } from "@osdk/react-components/experimental/markdown-renderer";
+ import { MarkdownViewer } from "@osdk/react-components/markdown-viewer";

- import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";
+ import { PdfViewer } from "@osdk/react-components/pdf-viewer";

- import { SpreadsheetViewer } from "@osdk/react-components/experimental/spreadsheet-viewer";
+ import { SpreadsheetViewer } from "@osdk/react-components/spreadsheet-viewer";

- import { TiffViewer } from "@osdk/react-components/experimental/tiff-renderer";
+ import { TiffViewer } from "@osdk/react-components/tiff-viewer";

- import { VideoViewer } from "@osdk/react-components/experimental/video-viewer";
+ import { VideoViewer } from "@osdk/react-components/video-viewer";

- import { XmlViewer } from "@osdk/react-components/experimental/xml-viewer";
+ import { XmlViewer } from "@osdk/react-components/xml-viewer";
```
