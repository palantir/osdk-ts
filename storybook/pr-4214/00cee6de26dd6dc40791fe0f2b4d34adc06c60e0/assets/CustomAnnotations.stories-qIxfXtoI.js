import{j as n}from"./iframe-0F7DfPLe.js";import{B as e}from"./BasePdfViewer-CXhdtK1t.js";import"./preload-helper-6mO-KnDD.js";import"./index-Djr_Jop1.js";import"./BasePdfViewer.module.css-Vr-ZfatB.js";import"./PdfViewerAnnotationLayer-Bx7CYAIH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiUVKs2v.js";import"./PdfViewerOutlineSidebar-BCyLRokK.js";import"./PdfViewerSidebarHeader-CPoGkVL4.js";import"./useBaseUiId-SJpz-dQs.js";import"./useControlled-aWzuAlWu.js";import"./CompositeRoot-D3AJD8ZK.js";import"./CompositeItem-wpUfw-Sy.js";import"./ToolbarRootContext-RyDWl030.js";import"./composite-DHXjkz_4.js";import"./svgIconContainer-DTCoh7Fd.js";import"./PdfViewerSearchBar-DXnJItic.js";import"./chevron-up-D8kRfjfD.js";import"./chevron-down-CdGiAoum.js";import"./cross-BVUsmn4r.js";import"./PdfViewerSidebar-LEYVH2t9.js";import"./index-RC7u8s6f.js";import"./index-EJLGsV9R.js";import"./index-DwIy8s5K.js";import"./PdfViewerToolbar-BUzmRRDk.js";import"./Button-BmQF-Ia9.js";import"./chevron-right-CB7KLAIo.js";import"./Input-CAkxXyLf.js";import"./search-Ba_3E6-e.js";import"./spin-Bo_FtNMZ.js";import"./error-CEwiS4uA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4214/00cee6de26dd6dc40791fe0f2b4d34adc06c60e0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
