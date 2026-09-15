import{j as e}from"./iframe-B441qIYR.js";import{u as b}from"./usePdfDocument-BAOjFWGq.js";import{P as f}from"./PdfViewerSidebar-C9QroUzg.js";import"./preload-helper-BQxy24fI.js";import"./index-UGmLGzC-.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./constants-DsXMS3N3.js";import"./PdfViewerSidebarHeader--ywa6VOV.js";import"./useBaseUiId-CAzOpzCv.js";import"./useControlled-CWP741nv.js";import"./CompositeRoot-CD6Rf4h6.js";import"./CompositeItem-C8CTVhA-.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./composite-CzbYCu9o.js";import"./svgIconContainer-BSmiGxdz.js";import"./index-CqjhHzve.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,h="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";function M({src:m,currentPage:g,onPageClick:l}){const{document:t,numPages:P,loading:p,error:o}=b(m);return p?e.jsx("div",{children:"Loading PDF…"}):o!=null?e.jsxs("div",{children:["Error loading PDF: ",o.message]}):t==null?null:e.jsx("div",{style:{height:"500px",width:"200px"},children:e.jsx(f,{document:t,numPages:P,currentPage:g,onPageClick:l,sidebarMode:"thumbnails",onSidebarModeChange:()=>{}})})}const B={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/ThumbnailSidebar",component:M,tags:["beta"],args:{src:h,currentPage:1,onPageClick:S()},argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},src:{description:"PDF source URL (used to load the document)",control:"text"}}},r={parameters:{docs:{source:{code:`function MyThumbnailSidebar({ src }: { src: string }) {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarMode, setSidebarMode] = useState<PdfViewerSidebarMode>("thumbnails");

  if (loading) return <div>Loading PDF…</div>;
  if (error != null) return <div>Error loading PDF: {error.message}</div>;
  if (document == null) return null;

  return (
    <PdfViewerSidebar
      document={document}
      numPages={numPages}
      currentPage={currentPage}
      onPageClick={setCurrentPage}
      sidebarMode={sidebarMode}
      onSidebarModeChange={setSidebarMode}
    />
  );
}`}}}},n={args:{currentPage:5},parameters:{docs:{source:{code:`// currentPage outlines that thumbnail and scrolls it into view
<PdfViewerSidebar
  document={document}
  numPages={numPages}
  currentPage={5}
  onPageClick={setCurrentPage}
  sidebarMode="thumbnails"
  onSidebarModeChange={setSidebarMode}
/>`}}}};var a,i,s;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function MyThumbnailSidebar({ src }: { src: string }) {
  const { document, numPages, loading, error } = usePdfDocument(src);
  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarMode, setSidebarMode] = useState<PdfViewerSidebarMode>("thumbnails");

  if (loading) return <div>Loading PDF…</div>;
  if (error != null) return <div>Error loading PDF: {error.message}</div>;
  if (document == null) return null;

  return (
    <PdfViewerSidebar
      document={document}
      numPages={numPages}
      currentPage={currentPage}
      onPageClick={setCurrentPage}
      sidebarMode={sidebarMode}
      onSidebarModeChange={setSidebarMode}
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
        code: \`// currentPage outlines that thumbnail and scrolls it into view
<PdfViewerSidebar
  document={document}
  numPages={numPages}
  currentPage={5}
  onPageClick={setCurrentPage}
  sidebarMode="thumbnails"
  onSidebarModeChange={setSidebarMode}
/>\`
      }
    }
  }
}`,...(c=(u=n.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const U=["Default","ActivePage"];export{n as ActivePage,r as Default,U as __namedExportsOrder,B as default};
