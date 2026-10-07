import{j as n}from"./iframe-BNXnxiJa.js";import{B as e}from"./BasePdfViewer-DDaxWI0K.js";import"./preload-helper-CT8T0PJp.js";import"./index-Ch-h42fp.js";import"./BasePdfViewer.module.css-Cz1fhe4b.js";import"./PdfViewerAnnotationLayer-BaP0U3iQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f3QBOrtz.js";import"./PdfViewerOutlineSidebar-Dm3syNw2.js";import"./PdfViewerSidebarHeader-NFv11Kg2.js";import"./useBaseUiId-BjmHkgmf.js";import"./useControlled-DBRd_jSA.js";import"./CompositeRoot-ZSwej2GF.js";import"./CompositeItem-Ch_wyKgR.js";import"./ToolbarRootContext-B1FX1tpV.js";import"./composite-Cinouu0K.js";import"./svgIconContainer-T3xea5l3.js";import"./PdfViewerSearchBar-C_StPCaR.js";import"./chevron-up-dgHxhiX5.js";import"./chevron-down-CLu6_2JJ.js";import"./cross-DNfPdLmM.js";import"./PdfViewerSidebar-B0F2JOI1.js";import"./index-Be-Y0iQr.js";import"./index-rjvuha_2.js";import"./index-CUNAUHwV.js";import"./PdfViewerToolbar-21SGVHoX.js";import"./Button-CDesYXNY.js";import"./chevron-right-CIN9Ver4.js";import"./Input-BQdVPwVd.js";import"./search-DQwSGm2k.js";import"./spin-BLfqMRrL.js";import"./error-BMUe0AWc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4117/890e009284021e2fccb0cad5dc19fe6e22a9e75f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
