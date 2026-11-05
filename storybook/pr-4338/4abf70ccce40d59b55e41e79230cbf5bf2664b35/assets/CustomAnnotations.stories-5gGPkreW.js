import{j as n}from"./iframe-BWfq1Ita.js";import{B as e}from"./BasePdfViewer-DPtz1f7_.js";import"./preload-helper-Cez3EkKO.js";import"./index-CsmCBiFc.js";import"./BasePdfViewer.module.css-BuSh83vd.js";import"./PdfViewerAnnotationLayer-ZJ1a8Vek.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ctsok9TN.js";import"./PdfViewerOutlineSidebar-DX9-WQpG.js";import"./PdfViewerSidebarHeader-Byt6dJiL.js";import"./useBaseUiId-AQZerCPK.js";import"./useControlled-zsZ0Gi2e.js";import"./CompositeRoot-DR51mb8G.js";import"./CompositeItem-CT28f8sD.js";import"./ToolbarRootContext-BZs-vXaE.js";import"./composite-BxLIdtja.js";import"./svgIconContainer-3Xe0sM70.js";import"./PdfViewerSearchBar-CcR-tttW.js";import"./chevron-up-y3r_3-hO.js";import"./chevron-down-D-1SOefz.js";import"./cross-B2opFBMX.js";import"./PdfViewerSidebar-khKccWHo.js";import"./index-DKbeeSxy.js";import"./index-Ct2QTZpq.js";import"./index-ZI1bO9GZ.js";import"./PdfViewerToolbar-CDtTXffL.js";import"./Button-CDzVT-19.js";import"./chevron-right-B4CpEYKZ.js";import"./Input-DsXOqmoY.js";import"./search-BJDwKHsZ.js";import"./spin-CqHbE9XG.js";import"./error-D4A2zaxG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4338/4abf70ccce40d59b55e41e79230cbf5bf2664b35/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
