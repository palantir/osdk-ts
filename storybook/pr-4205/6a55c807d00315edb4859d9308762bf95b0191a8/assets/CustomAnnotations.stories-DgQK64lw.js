import{j as n}from"./iframe-5xumy2lC.js";import{B as e}from"./BasePdfViewer-CU6jeEM3.js";import"./preload-helper-Dnp5J3ho.js";import"./index-OGeocGA5.js";import"./BasePdfViewer.module.css-B8cBxRti.js";import"./PdfViewerAnnotationLayer-DElqaKp_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BwlP_ofL.js";import"./PdfViewerOutlineSidebar-D0cYgWgw.js";import"./PdfViewerSidebarHeader-DePAdSRq.js";import"./useBaseUiId-CR8wF2TF.js";import"./useControlled-DMTvVf4P.js";import"./CompositeRoot-DyAPmMMG.js";import"./CompositeItem-FF3KNmJW.js";import"./ToolbarRootContext-D1AghJYR.js";import"./composite-Dn6Zzxac.js";import"./svgIconContainer-DKJstnRa.js";import"./PdfViewerSearchBar-iRqN1c7u.js";import"./chevron-up-CXAsCKAh.js";import"./chevron-down-De5_JPFZ.js";import"./cross-Bww8SGey.js";import"./PdfViewerSidebar-BsfJ4wuD.js";import"./index-BqDaJCNF.js";import"./index-B83pdUrW.js";import"./index-11qWnEer.js";import"./PdfViewerToolbar-BBm7Y4td.js";import"./Button-DIwfO1Nk.js";import"./chevron-right-nZ9TNLzB.js";import"./Input-Cpl3LxFn.js";import"./search-CRyjUtCH.js";import"./spin-DPJmUG_B.js";import"./error-Dp5nV5lf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4205/6a55c807d00315edb4859d9308762bf95b0191a8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
