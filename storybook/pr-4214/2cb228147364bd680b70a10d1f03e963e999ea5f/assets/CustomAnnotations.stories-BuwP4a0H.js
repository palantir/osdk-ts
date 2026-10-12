import{j as n}from"./iframe-Ch9GCQZw.js";import{B as e}from"./BasePdfViewer-OZ8B84iP.js";import"./preload-helper-DnJKIcik.js";import"./index-BWo0Chvm.js";import"./BasePdfViewer.module.css-CZNMQ6Ng.js";import"./PdfViewerAnnotationLayer-C-aMPYKq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYSwCkA6.js";import"./PdfViewerOutlineSidebar-CuTMQO8F.js";import"./PdfViewerSidebarHeader-Bm_MZFYO.js";import"./useBaseUiId-BHSh6ZdF.js";import"./useControlled-DlKs0eKw.js";import"./CompositeRoot-BsVfpLUa.js";import"./CompositeItem-lOcuUhYq.js";import"./ToolbarRootContext-CxoySA_i.js";import"./composite-B_lrLvaS.js";import"./svgIconContainer-DaQYNeFs.js";import"./PdfViewerSearchBar-BvyWEC1v.js";import"./chevron-up-BL-hJhuT.js";import"./chevron-down-D219skL8.js";import"./cross-BBG8uB8A.js";import"./PdfViewerSidebar-B3vmiKul.js";import"./index-BPwpWSia.js";import"./index-CoyQ9qTH.js";import"./index-DpdzW1OH.js";import"./PdfViewerToolbar-DDTfgCZI.js";import"./Button-lGY5omo3.js";import"./chevron-right-CSJljr5a.js";import"./Input-M42Jtpmt.js";import"./search-Bgjfk80F.js";import"./spin-tc04Fzuf.js";import"./error-CMZUpiIv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/2cb228147364bd680b70a10d1f03e963e999ea5f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
