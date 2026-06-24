import{j as e}from"./iframe-BBXF3cT-.js";import{useMDXComponents as t}from"./index-NLvmKmS5.js";import{M as c,C as d,a as l}from"./blocks-DCaQRM9E.js";import{Pdf as s,Image as o,Markdown as h,Video as x,Excel as j,Email as a,Xml as p,Tiff as m,TiffWithPdfConversion as f,WithMimeTypeOverride as w,WithPdfViewerProps as u,UnsupportedType as g}from"./DocumentViewer.stories-DdlxwvUe.js";import"./preload-helper-BYJHoo6O.js";import"./index-C9Yk-X2A.js";import"./index-BnS9Sd2E.js";import"./index-9F1OCzgd.js";import"./index-CXL7lPRQ.js";import"./EmailViewer-Dg-6sCKR.js";import"./useMediaContents-Drk_PJda.js";import"./spin-lDp09-yk.js";import"./svgIconContainer-CPlq-GhD.js";import"./error-Bl_4nXvb.js";import"./ExcelViewer-PpOpRHbV.js";import"./ImageViewer-htgp6FsK.js";import"./BaseImageViewer-lZXJeYOI.js";import"./TiffRenderer-BAG1r3ND.js";import"./index-YkV0U4e7.js";import"./MarkdownRenderer-CUg9ZQMJ.js";import"./PdfRenderer-Dx8F78Ve.js";import"./PdfViewer-BsMqzvA4.js";import"./PdfViewer.module.css-CVzl9tka.js";import"./PdfViewerAnnotationLayer-CpGmpMyF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOCRYopB.js";import"./PdfViewerOutlineSidebar-r4yTtI8z.js";import"./PdfViewerSidebarHeader-CrDeahl9.js";import"./useBaseUiId-BzxTDt-U.js";import"./useControlled-BQMZRfqa.js";import"./CompositeRoot-BSUYqS7n.js";import"./CompositeItem-CLhWE5DY.js";import"./ToolbarRootContext-BYFZ9IJD.js";import"./composite-DjC-97hO.js";import"./PdfViewerSearchBar-CU8rDRpL.js";import"./chevron-up-BrH12UHy.js";import"./chevron-down-CmUSOMiq.js";import"./cross-DVl42v6o.js";import"./PdfViewerSidebar-BqhDhzPD.js";import"./index-32jYKa6F.js";import"./PdfViewerToolbar-BpK39buQ.js";import"./Button-DP853wTr.js";import"./chevron-right-Ci_EdCPE.js";import"./Input-DnOQL4eJ.js";import"./minus-DR7eUkht.js";import"./assertUnreachable-tCT10eXl.js";import"./VideoViewer-DCQpHjuP.js";import"./XmlViewer-DmvCjGcV.js";import"./useOsdkClient-DjKzLdTf.js";import"./withOsdkMetrics-BgvjZo7G.js";import"./useRegisterUserAgent-D9PkBriI.js";import"./passthrough-6sm3BHV7.js";function n(i){const r={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[`
`,`
`,`
`,e.jsx(c,{title:"Components/DocumentViewer/Docs",tags:["beta"]}),`
`,e.jsx(r.h1,{id:"documentviewer",children:"DocumentViewer"}),`
`,e.jsxs(r.p,{children:[`A React component that automatically selects the correct viewer for an OSDK
`,e.jsx(r.code,{children:"Media"}),` object based on its MIME type. Supports PDF, TIFF, common image
formats, video, markdown, Excel, email, and XML.`]}),`
`,e.jsx(r.h2,{id:"demo",children:"Demo"}),`
`,e.jsx(d,{of:s}),`
`,e.jsx(r.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { DocumentViewer } from "@osdk/react-components/experimental/document-viewer";

<DocumentViewer media={employee.trainingMaterial} />;
`})}),`
`,e.jsxs(r.blockquote,{children:[`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"employee.trainingMaterial"})," is an OSDK ",e.jsx(r.code,{children:"Media"})," property. ",e.jsx(r.code,{children:"./client"}),` exports
the OSDK client returned by `,e.jsx(r.code,{children:"createClient(...)"}),"."]}),`
`]}),`
`,e.jsx(r.h3,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:["Install ",e.jsx(r.code,{children:"@osdk/react-components"})," and its peer dependencies"]}),`
`,e.jsxs(r.li,{children:["Wrap your app with ",e.jsx(r.code,{children:"OsdkProvider"})]}),`
`,e.jsxs(r.li,{children:["Import ",e.jsx(r.code,{children:"@osdk/react-components/styles.css"})]}),`
`]}),`
`,e.jsxs(r.p,{children:["See the ",e.jsx(r.a,{href:"https://github.com/palantir/osdk-ts/blob/main/packages/react-components/README.md#setup",rel:"nofollow",children:"README"}),`
for full setup instructions.`]}),`
`,e.jsx(r.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(r.h3,{id:"image",children:"Image"}),`
`,e.jsxs(r.p,{children:["Renders common image formats (",e.jsx(r.code,{children:"image/png"}),", ",e.jsx(r.code,{children:"image/jpeg"}),", ",e.jsx(r.code,{children:"image/gif"}),`,
`,e.jsx(r.code,{children:"image/svg+xml"}),", ",e.jsx(r.code,{children:"image/webp"}),", ",e.jsx(r.code,{children:"image/bmp"}),") with the built-in image viewer."]}),`
`,e.jsx(d,{of:o}),`
`,e.jsx(r.h3,{id:"markdown",children:"Markdown"}),`
`,e.jsxs(r.p,{children:["Renders ",e.jsx(r.code,{children:"text/markdown"})," and ",e.jsx(r.code,{children:"text/x-markdown"})," content."]}),`
`,e.jsx(d,{of:h}),`
`,e.jsx(r.h3,{id:"video",children:"Video"}),`
`,e.jsxs(r.p,{children:["Renders any ",e.jsx(r.code,{children:"video/*"})," MIME type with native video controls."]}),`
`,e.jsx(d,{of:x}),`
`,e.jsx(r.h3,{id:"excel",children:"Excel"}),`
`,e.jsxs(r.p,{children:["Renders ",e.jsx(r.code,{children:".xlsx"})," spreadsheets with tabbed sheet navigation."]}),`
`,e.jsx(d,{of:j}),`
`,e.jsx(r.h3,{id:"email",children:"Email"}),`
`,e.jsxs(r.p,{children:["Renders ",e.jsx(r.code,{children:".eml"})," (RFC 822) email messages."]}),`
`,e.jsx(d,{of:a}),`
`,e.jsx(r.h3,{id:"xml",children:"XML"}),`
`,e.jsxs(r.p,{children:["Renders ",e.jsx(r.code,{children:"application/xml"})," and ",e.jsx(r.code,{children:"text/xml"})," content with syntax highlighting."]}),`
`,e.jsx(d,{of:p}),`
`,e.jsx(r.h3,{id:"tiff",children:"TIFF"}),`
`,e.jsx(r.p,{children:"Renders TIFF images, including multi-page files."}),`
`,e.jsx(d,{of:m}),`
`,e.jsx(r.h3,{id:"tiff-with-pdf-conversion",children:"TIFF with PDF conversion"}),`
`,e.jsx(r.p,{children:`Multi-page TIFFs can be converted to PDF via the MIO transform API for a
better viewing experience. Falls back to the TIFF renderer if the transform
fails or for single-page TIFFs.`}),`
`,e.jsx(d,{of:f}),`
`,e.jsx(r.h3,{id:"mime-type-override",children:"MIME type override"}),`
`,e.jsx(r.p,{children:"Override the auto-detected MIME type when the media metadata is inaccurate."}),`
`,e.jsx(d,{of:w}),`
`,e.jsx(r.h3,{id:"pdf-viewer-options",children:"PDF viewer options"}),`
`,e.jsx(r.p,{children:`Forward props to the underlying PDF viewer for features like an initial
sidebar or download support.`}),`
`,e.jsx(d,{of:u}),`
`,e.jsx(r.h3,{id:"unsupported-type",children:"Unsupported type"}),`
`,e.jsx(r.p,{children:"Unsupported MIME types display a fallback message."}),`
`,e.jsx(d,{of:g}),`
`,e.jsx(r.h2,{id:"api-reference",children:"API Reference"}),`
`,e.jsx(r.h3,{id:"props",children:"Props"}),`
`,e.jsx(l,{of:s}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Prop"}),e.jsx("th",{children:"Type"}),e.jsx("th",{children:"Required"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"media"})}),e.jsx("td",{children:e.jsx("code",{children:"Media"})}),e.jsx("td",{children:"Yes"}),e.jsx("td",{children:"The OSDK Media object to render"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"className"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"CSS class applied to the root element"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"mimeTypeOverride"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Override the auto-detected MIME type"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"fileName"})}),e.jsx("td",{children:e.jsx("code",{children:"string"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:'File name hint for MIME type detection (e.g. "scan.tif")'})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"enableTiffToPdf"})}),e.jsx("td",{children:e.jsx("code",{children:"boolean"})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"When true, multi-page TIFFs are converted to PDF via MIO transform API"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"pdfViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<PdfViewerProps, "src">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the PDF viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"imageViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<BaseImageViewerProps, "src">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the image viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"videoViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<BaseVideoViewerProps, "src">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the video viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"tiffRendererProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<TiffRendererProps, "content">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the TIFF renderer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"markdownRendererProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<MarkdownRendererProps, "content">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the markdown renderer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"excelViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<BaseExcelViewerProps, "spreadsheet">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the Excel viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"emailViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<BaseEmailViewerProps, "email">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the email viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"xmlViewerProps"})}),e.jsx("td",{children:e.jsx("code",{children:'Partial<Omit<BaseXmlViewerProps, "content">>'})}),e.jsx("td",{children:"No"}),e.jsx("td",{children:"Props forwarded to the XML viewer"})]})]})]}),`
`,e.jsx(r.h3,{id:"viewertype-enum",children:"ViewerType enum"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Value"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Pdf"})}),e.jsx("td",{children:"PDF documents"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Tiff"})}),e.jsx("td",{children:"TIFF images"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Image"})}),e.jsx("td",{children:"Common image formats (PNG, JPEG, GIF, SVG, WebP, BMP)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Video"})}),e.jsx("td",{children:"Video files"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Markdown"})}),e.jsx("td",{children:"Markdown text"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Excel"})}),e.jsx("td",{children:"Excel spreadsheets (.xlsx)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Email"})}),e.jsx("td",{children:"Email messages (.eml)"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Xml"})}),e.jsx("td",{children:"XML documents"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"Unsupported"})}),e.jsx("td",{children:"Unrecognized MIME types"})]})]})]}),`
`,e.jsx(r.h3,{id:"supported-mime-types",children:"Supported MIME types"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"MIME type"}),e.jsx("th",{children:"Viewer"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"application/pdf"})}),e.jsx("td",{children:"PDF viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"image/tiff"})}),e.jsx("td",{children:"TIFF renderer"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"image/png"}),", ",e.jsx("code",{children:"image/jpeg"}),", ",e.jsx("code",{children:"image/gif"}),", ",e.jsx("code",{children:"image/svg+xml"}),", ",e.jsx("code",{children:"image/webp"}),", ",e.jsx("code",{children:"image/bmp"})]}),e.jsx("td",{children:"Image viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"video/*"})}),e.jsx("td",{children:"Video viewer"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"text/markdown"}),", ",e.jsx("code",{children:"text/x-markdown"})]}),e.jsx("td",{children:"Markdown renderer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"})}),e.jsx("td",{children:"Excel viewer"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"message/rfc822"})}),e.jsx("td",{children:"Email viewer"})]}),e.jsxs("tr",{children:[e.jsxs("td",{children:[e.jsx("code",{children:"application/xml"}),", ",e.jsx("code",{children:"text/xml"})]}),e.jsx("td",{children:"XML viewer"})]})]})]}),`
`,e.jsx(r.h2,{id:"css-variables",children:"CSS Variables"}),`
`,e.jsxs("table",{children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"Variable"}),e.jsx("th",{children:"Default"}),e.jsx("th",{children:"Description"})]})}),e.jsxs("tbody",{children:[e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--osdk-document-viewer-bg"})}),e.jsx("td",{children:e.jsx("code",{children:"--osdk-background-primary"})}),e.jsx("td",{children:"Container background"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx("code",{children:"--osdk-document-viewer-border"})}),e.jsx("td",{children:e.jsx("code",{children:"--osdk-surface-border"})}),e.jsx("td",{children:"Container border"})]})]})]}),`
`,e.jsx(r.p,{children:`Individual sub-viewer theming is documented in each viewer's respective
documentation.`}),`
`,e.jsx(r.h2,{id:"data-attributes",children:"Data Attributes"}),`
`,e.jsxs(r.p,{children:[`The DocumentViewer does not expose custom data attributes. Styling hooks are
available via CSS variables and the `,e.jsx(r.code,{children:"className"})," prop."]}),`
`,e.jsx(r.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsx(r.li,{children:"The PDF viewer provides keyboard navigation for pages and toolbar controls"}),`
`,e.jsxs(r.li,{children:["Image content uses semantic ",e.jsx(r.code,{children:"img"})," elements; pass ",e.jsx(r.code,{children:"alt"}),` text via
`,e.jsx(r.code,{children:"imageViewerProps"})]}),`
`,e.jsxs(r.li,{children:["Video content uses the native ",e.jsx(r.code,{children:"video"}),` element with built-in browser
controls for keyboard and screen reader support`]}),`
`,e.jsx(r.li,{children:`The unsupported-type fallback message is rendered as visible text for
screen readers`}),`
`]})]})}function ue(i={}){const{wrapper:r}={...t(),...i.components};return r?e.jsx(r,{...i,children:e.jsx(n,{...i})}):n(i)}export{ue as default};
