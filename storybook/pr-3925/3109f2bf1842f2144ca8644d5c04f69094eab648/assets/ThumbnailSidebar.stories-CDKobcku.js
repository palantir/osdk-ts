import{j as e}from"./iframe-CXrz77U6.js";import{u as b}from"./usePdfDocument-DgqTutja.js";import{P as f}from"./PdfViewerSidebar-YrlD66Gz.js";import"./preload-helper-CKbgkQtS.js";import"./index-CIyfLN4v.js";import"./index-CR04-v9m.js";import"./index-OCshk7-x.js";import"./constants-DsXMS3N3.js";import"./PdfViewerSidebarHeader-DPRMv6gP.js";import"./useBaseUiId-DEWnkFns.js";import"./useControlled-TnVqlNU3.js";import"./CompositeRoot-YeJPlhey.js";import"./CompositeItem-CriE69S9.js";import"./ToolbarRootContext-ly2czwm4.js";import"./composite-ggnTBoJz.js";import"./svgIconContainer-C1hoWfOl.js";import"./index-X106RkLU.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,S="https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf";function C({src:m,currentPage:g,onPageClick:l}){const{document:t,numPages:P,loading:p,error:o}=b(m);return p?e.jsx("div",{children:"Loading PDF…"}):o!=null?e.jsxs("div",{children:["Error loading PDF: ",o.message]}):t==null?null:e.jsx("div",{style:{height:"500px",width:"200px"},children:e.jsx(f,{document:t,numPages:P,currentPage:g,onPageClick:l,sidebarMode:"thumbnails",onSidebarModeChange:()=>{}})})}const B={title:"Components/DocumentViewer/Renderers/PdfViewer/Building Blocks/ThumbnailSidebar",component:C,tags:["beta"],args:{src:S,currentPage:1,onPageClick:h()},argTypes:{currentPage:{description:"Currently active page number (1-indexed)",control:{type:"number",min:1}},src:{description:"PDF source URL (used to load the document)",control:"text"}}},r={parameters:{docs:{source:{code:`function MyThumbnailSidebar({ src }: { src: string }) {
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
