import{j as n}from"./iframe-BcWEdWfB.js";import{B as e}from"./BasePdfViewer-CRqvtbqN.js";import"./preload-helper-CVa1rIJ3.js";import"./index-CwkFMZjv.js";import"./BasePdfViewer.module.css-DzqRM5sI.js";import"./PdfViewerAnnotationLayer-bXhGcuP_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJ88xIS5.js";import"./PdfViewerOutlineSidebar-BtxJJFd9.js";import"./PdfViewerSidebarHeader-DrU0FJIm.js";import"./useBaseUiId-DAACsJ_e.js";import"./useControlled-BOuSIVI5.js";import"./CompositeRoot-B09OoZAG.js";import"./CompositeItem-3OABFBu2.js";import"./ToolbarRootContext-C3UpIzPe.js";import"./composite-C2TbRxj5.js";import"./svgIconContainer-D3wylWJt.js";import"./PdfViewerSearchBar-Cq_EOgta.js";import"./chevron-up-CWgKr7rQ.js";import"./chevron-down-BTTnF4Fu.js";import"./cross-BZ3hgBtX.js";import"./PdfViewerSidebar-B6a0pnIU.js";import"./index-CGjIfcSI.js";import"./index-oIyMgkgm.js";import"./index-cVAitoMW.js";import"./PdfViewerToolbar-CmcEzZgQ.js";import"./Button-BuWDqgqc.js";import"./chevron-right-brd_pXes.js";import"./Input-BARy-z-s.js";import"./search-BS0hsyoc.js";import"./spin-BoCPKOCq.js";import"./error-Dx8WDHU2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4077/1845076a05121c829496ca77cae463bce81fd2c5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
