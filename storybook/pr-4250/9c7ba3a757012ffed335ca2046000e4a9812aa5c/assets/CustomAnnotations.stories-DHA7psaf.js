import{j as n}from"./iframe-DPxX1jR-.js";import{B as e}from"./BasePdfViewer-lAhyRsEa.js";import"./preload-helper-Bl3woUlG.js";import"./index-D6OGPiBG.js";import"./BasePdfViewer.module.css-Ckrfj7-b.js";import"./PdfViewerAnnotationLayer-MwZbE_kB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1c3xIu8.js";import"./PdfViewerOutlineSidebar-DHbfzi5m.js";import"./PdfViewerSidebarHeader-BNXPd3zC.js";import"./useBaseUiId-BKCJofKJ.js";import"./useControlled-C7cllYbm.js";import"./CompositeRoot-CRhqbX45.js";import"./CompositeItem-rTVyKIYC.js";import"./ToolbarRootContext-B53u_0Lg.js";import"./composite-BcAnYQh9.js";import"./svgIconContainer-DQ5sgBjC.js";import"./PdfViewerSearchBar-CCnEVs1t.js";import"./chevron-up-Cbm2znj3.js";import"./chevron-down-DxRPC7K7.js";import"./cross-BO6SlDqo.js";import"./PdfViewerSidebar-D1P7_hSv.js";import"./index-CmhRQ5VM.js";import"./index-B-sWsLH5.js";import"./index-DQPQvAfC.js";import"./PdfViewerToolbar-CztiW1bk.js";import"./Button-DQXd7O9l.js";import"./chevron-right-_JoH9_G1.js";import"./Input-DFF83YG7.js";import"./search-B5aBIEi3.js";import"./spin-Cbo7M_Se.js";import"./error-ChO0zkiL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4250/9c7ba3a757012ffed335ca2046000e4a9812aa5c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
