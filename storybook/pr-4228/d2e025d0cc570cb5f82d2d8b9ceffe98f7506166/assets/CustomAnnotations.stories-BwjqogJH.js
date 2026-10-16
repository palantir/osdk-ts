import{j as n}from"./iframe-DhXfIq6R.js";import{B as e}from"./BasePdfViewer-DpgzITFH.js";import"./preload-helper-DatgPFZX.js";import"./index-CQ4eecZm.js";import"./BasePdfViewer.module.css-pwG3O24_.js";import"./PdfViewerAnnotationLayer-CHuWDC_6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BiEtaLQW.js";import"./PdfViewerOutlineSidebar-C6dEN3L1.js";import"./PdfViewerSidebarHeader-CF-9fP6p.js";import"./useBaseUiId-B3PC069q.js";import"./useControlled-3_t6o5ui.js";import"./CompositeRoot-DmcR1fWK.js";import"./CompositeItem-DvhhImuQ.js";import"./ToolbarRootContext-B9c-sG_O.js";import"./composite-CCswUWBV.js";import"./svgIconContainer-4NKQuWor.js";import"./PdfViewerSearchBar-M2o8Wa5U.js";import"./chevron-up-BOwCCtym.js";import"./chevron-down-CjJDYGij.js";import"./cross-CjebjloY.js";import"./PdfViewerSidebar-T9uZmDwR.js";import"./index-C3bckibU.js";import"./index-Hw9O_E6A.js";import"./index-BFbo8Hvm.js";import"./PdfViewerToolbar-BGQIOAut.js";import"./Button-Cy8uxh9T.js";import"./chevron-right-DKuBAtJi.js";import"./Input-BBnEWswJ.js";import"./search-Dx_Pysa4.js";import"./spin-qITDTXDP.js";import"./error-UalGv9XX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/d2e025d0cc570cb5f82d2d8b9ceffe98f7506166/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
