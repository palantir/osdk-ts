import{j as n}from"./iframe-BwKzjaO_.js";import{B as e}from"./BasePdfViewer-D9AQTxdr.js";import"./preload-helper-Cw3PuEWm.js";import"./index-jEwj8y1B.js";import"./BasePdfViewer.module.css-D2By1xZ7.js";import"./PdfViewerAnnotationLayer-CEnVn06Y.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CFH0GhlH.js";import"./PdfViewerOutlineSidebar-BK_Uf3uY.js";import"./PdfViewerSidebarHeader-BJPpPQ7s.js";import"./useBaseUiId-BGPb7m92.js";import"./useControlled-DYaNtfGY.js";import"./CompositeRoot-BP1E_eJl.js";import"./CompositeItem-Cp7s4593.js";import"./ToolbarRootContext-BtpiBS9l.js";import"./composite-Az3dyPdd.js";import"./svgIconContainer-BwQ9ehgu.js";import"./PdfViewerSearchBar-CuFIdDz2.js";import"./chevron-up-DzumeE9d.js";import"./chevron-down-BTGBlQFb.js";import"./cross-1lQqZabN.js";import"./PdfViewerSidebar-CnYgdfi8.js";import"./index-BV1P-O2s.js";import"./index-Kp1RIk0o.js";import"./index-DSTqBN-p.js";import"./PdfViewerToolbar-Cq_FPIEi.js";import"./Button-Cz27x8wi.js";import"./chevron-right-qdaQX1qL.js";import"./Input-4hInwvvu.js";import"./search-DdHvONrb.js";import"./spin-Co01VOJV.js";import"./error-Nw58INx5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4377/a94d867d64557876a88d2a6b39f14f06992d8049/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
