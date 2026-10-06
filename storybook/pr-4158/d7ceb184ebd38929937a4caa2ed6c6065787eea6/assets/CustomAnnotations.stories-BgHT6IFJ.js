import{j as n}from"./iframe-DVVKVAtA.js";import{B as e}from"./BasePdfViewer-DTFec5oS.js";import"./preload-helper-CiYdp8rh.js";import"./index-B7XCjnpr.js";import"./BasePdfViewer.module.css-DV3I7hz7.js";import"./PdfViewerAnnotationLayer-BKaamheH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7k7S7h6.js";import"./PdfViewerOutlineSidebar-xxIL7-Pk.js";import"./PdfViewerSidebarHeader-BUtCEH0y.js";import"./useBaseUiId-INTXcr8e.js";import"./useControlled-D1zZrG1z.js";import"./CompositeRoot-BYpuXlsA.js";import"./CompositeItem-D9SUAP6f.js";import"./ToolbarRootContext-C9Nw85K8.js";import"./composite-BRLZiHQF.js";import"./svgIconContainer-CP95Aflu.js";import"./PdfViewerSearchBar-D6ONkrVl.js";import"./chevron-up-BfIFZ9w8.js";import"./chevron-down-D2RihN-5.js";import"./cross-CjD5OAho.js";import"./PdfViewerSidebar-HxA0kosz.js";import"./index-U6QV7dK2.js";import"./index-ClEpMZhJ.js";import"./index-CWl4XwMi.js";import"./PdfViewerToolbar-6VmfdG3L.js";import"./Button-Ckc4gi75.js";import"./chevron-right-CuF8rzvp.js";import"./Input-CmJfNxcc.js";import"./search-DlCF-cVw.js";import"./spin-Se0LzZVe.js";import"./error-DNT5rqeV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4158/d7ceb184ebd38929937a4caa2ed6c6065787eea6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>`}}}};var r,a,d;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        code: \`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
  return (
    <div style={{ background: "rgba(59, 130, 246, 0.9)", borderRadius: 6, color: "#fff", padding: "4px 8px" }}>
      {annotation.label ?? "Note"}
    </div>
  );
}

const handleAnnotationClick = useCallback((annotation: PdfAnnotation) => {
  console.log("Clicked:", annotation.id);
}, []);

<BasePdfViewer
  src={pdfUrl}
  annotations={[
    {
      id: "tooltip-1",
      type: "custom",
      page: 1,
      rect: { x: 55, y: 400, width: 120, height: 28 },
      label: "Key finding",
      render: TooltipAnnotation,
    },
  ]}
  onAnnotationClick={handleAnnotationClick}
/>\`
      }
    }
  }
}`,...(d=(a=o.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};const Y=["CustomAnnotation"];export{o as CustomAnnotation,Y as __namedExportsOrder,F as default};
