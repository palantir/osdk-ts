import{j as e}from"./iframe-c92eWBTm.js";import{u as f}from"./usePdfDocument-CJARqCVu.js";import{P as b}from"./PdfViewerSidebar-J17Claia.js";import"./preload-helper-C_mEB70A.js";import"./index-wu_kXnGO.js";import"./index-DNCjgZgw.js";import"./index-DpNu15BD.js";import"./constants-DsXMS3N3.js";import"./PdfViewerSidebarHeader-xpBUIlNu.js";import"./useBaseUiId-CZByDVJ8.js";import"./useControlled-Caf6eOHS.js";import"./CompositeRoot-B1tqGphE.js";import"./CompositeItem-DP3vosw0.js";import"./ToolbarRootContext-BOIsQ_kh.js";import"./composite-DB4Ar6eT.js";import"./svgIconContainer-BR-sWY_B.js";import"./index-BNyL3dmc.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,S="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";function v({src:m,currentPage:l,onPageClick:g}){const{document:t,numPages:p,loading:P,error:o}=f(m);return P?e.jsx("div",{children:"Loading PDF…"}):o!=null?e.jsxs("div",{children:["Error loading PDF: ",o.message]}):t==null?null:e.jsx("div",{style:{height:"500px",width:"200px"},children:e.jsx(b,{document:t,numPages:p,currentPage:l,onPageClick:g,sidebarMode:"thumbnails",onSidebarModeChange:()=>{}})})}const B={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/ThumbnailSidebar",component:v,tags:["beta"],args:{src:S,currentPage:1,onPageClick:h()},argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},src:{description:"PDF source URL (used to load the document)",control:"text"}}},r={parameters:{docs:{source:{code:`import { PdfViewerSidebar, usePdfDocument } from "@osdk/react-components/experimental/pdf-viewer";

function MyThumbnailSidebar({ src }: { src: string }) {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading PDF…</div>;
  if (error != null) return <div>Error loading PDF: {error.message}</div>;
  if (document == null) return null;

  return (
    <PdfViewerSidebar
      document={document}
      numPages={numPages}
      currentPage={currentPage}
      onPageClick={setCurrentPage}
      sidebarMode="thumbnails"
      onSidebarModeChange={() => {}}
    />
  );
}`}}}},n={args:{currentPage:5},parameters:{docs:{source:{code:`import { PdfViewerSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// currentPage outlines that thumbnail and scrolls it into view
<PdfViewerSidebar
  document={document}
  numPages={numPages}
  currentPage={5}
  onPageClick={setCurrentPage}
  sidebarMode="thumbnails"
  onSidebarModeChange={() => {}}
/>`}}}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerSidebar, usePdfDocument } from "@osdk/react-components/experimental/pdf-viewer";

function MyThumbnailSidebar({ src }: { src: string }) {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [currentPage, setCurrentPage] = useState(1);

  if (loading) return <div>Loading PDF…</div>;
  if (error != null) return <div>Error loading PDF: {error.message}</div>;
  if (document == null) return null;

  return (
    <PdfViewerSidebar
      document={document}
      numPages={numPages}
      currentPage={currentPage}
      onPageClick={setCurrentPage}
      sidebarMode="thumbnails"
      onSidebarModeChange={() => {}}
    />
  );
}\`
      }
    }
  }
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var d,u,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    currentPage: 5
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewerSidebar } from "@osdk/react-components/experimental/pdf-viewer";

// currentPage outlines that thumbnail and scrolls it into view
<PdfViewerSidebar
  document={document}
  numPages={numPages}
  currentPage={5}
  onPageClick={setCurrentPage}
  sidebarMode="thumbnails"
  onSidebarModeChange={() => {}}
/>\`
      }
    }
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const U=["Default","ActivePage"];export{n as ActivePage,r as Default,U as __namedExportsOrder,B as default};
