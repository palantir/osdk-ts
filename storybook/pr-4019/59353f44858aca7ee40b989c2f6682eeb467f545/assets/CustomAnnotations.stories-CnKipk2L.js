import{j as n}from"./iframe-C0TXowYh.js";import{B as e}from"./BasePdfViewer-pio__8c7.js";import"./preload-helper-DxTxvmk8.js";import"./index-Cu2rgIRW.js";import"./BasePdfViewer.module.css-CZ8PJ8qW.js";import"./PdfViewerAnnotationLayer-BfpxGD6z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CfNN6W2T.js";import"./PdfViewerOutlineSidebar-DzZQ1ASz.js";import"./PdfViewerSidebarHeader-BcDgYL66.js";import"./useBaseUiId-CxGokxTP.js";import"./useControlled-BFSHGlV3.js";import"./CompositeRoot-BKRNsjas.js";import"./CompositeItem-KxsL0x_o.js";import"./ToolbarRootContext-CE5VkmEX.js";import"./composite-CXmgh9Nc.js";import"./svgIconContainer-C2fAWGrt.js";import"./PdfViewerSearchBar-C-xNFA8H.js";import"./chevron-up-DHjP8CN5.js";import"./chevron-down-D7WH3ySY.js";import"./cross-BfvUUSFN.js";import"./PdfViewerSidebar-Bh3d27ZU.js";import"./index-DWDyv98l.js";import"./index-u3QGRCwO.js";import"./index-C6Y-pof4.js";import"./PdfViewerToolbar-Ce2SORxh.js";import"./Button-D_dg1W6z.js";import"./chevron-right-egT1p0zn.js";import"./Input-8EnzzSA0.js";import"./search-6re8IEAF.js";import"./spin-Decq6JRc.js";import"./error-Z4OH-yWW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/59353f44858aca7ee40b989c2f6682eeb467f545/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
