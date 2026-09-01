import{j as e}from"./iframe-C3MdTHLQ.js";import{u as b}from"./usePdfDocument-DS0zskdb.js";import{P as f}from"./PdfViewerSidebar-Bxjxt0w7.js";import"./preload-helper-3M0V84kL.js";import"./index-CoAkWlDV.js";import"./index-CbVfK8fT.js";import"./index-BHAP5gqn.js";import"./constants-DsXMS3N3.js";import"./PdfViewerSidebarHeader-DV2QTITJ.js";import"./useBaseUiId-BY9bLyd_.js";import"./useControlled-BVKJ7vS7.js";import"./CompositeRoot-BbWpjOq1.js";import"./CompositeItem-DM0NOOVO.js";import"./ToolbarRootContext-DIyGn2ca.js";import"./composite-BNzQ7X-x.js";import"./svgIconContainer-CipT1sHW.js";import"./index-BgVlrX6R.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,S="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";function C({src:m,currentPage:g,onPageClick:l}){const{document:t,numPages:P,loading:p,error:o}=b(m);return p?e.jsx("div",{children:"Loading PDF…"}):o!=null?e.jsxs("div",{children:["Error loading PDF: ",o.message]}):t==null?null:e.jsx("div",{style:{height:"500px",width:"200px"},children:e.jsx(f,{document:t,numPages:P,currentPage:g,onPageClick:l,sidebarMode:"thumbnails",onSidebarModeChange:()=>{}})})}const B={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/ThumbnailSidebar",component:C,tags:["beta"],args:{src:S,currentPage:1,onPageClick:h()},argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},src:{description:"PDF source URL (used to load the document)",control:"text"}}},r={parameters:{docs:{source:{code:`function MyThumbnailSidebar({ src }: { src: string }) {
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
}`}}}},n={args:{currentPage:5},parameters:{docs:{source:{code:`// currentPage outlines that thumbnail and scrolls it into view
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
        code: \`function MyThumbnailSidebar({ src }: { src: string }) {
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
}`,...(s=(i=r.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var u,d,c;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    currentPage: 5
  },
  parameters: {
    docs: {
      source: {
        code: \`// currentPage outlines that thumbnail and scrolls it into view
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
}`,...(c=(d=n.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const U=["Default","ActivePage"];export{n as ActivePage,r as Default,U as __namedExportsOrder,B as default};
