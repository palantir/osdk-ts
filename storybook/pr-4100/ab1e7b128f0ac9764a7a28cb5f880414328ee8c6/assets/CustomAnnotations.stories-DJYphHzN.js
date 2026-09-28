import{j as n}from"./iframe-vWRqqmX-.js";import{B as e}from"./BasePdfViewer-BP22GS2e.js";import"./preload-helper-rcEVmD-8.js";import"./index-CHsUa7_U.js";import"./BasePdfViewer.module.css-ENs6lbLM.js";import"./PdfViewerAnnotationLayer-CwJ0Wozm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DF-gbzFn.js";import"./PdfViewerOutlineSidebar-m-6sgHn1.js";import"./PdfViewerSidebarHeader-DLo5QLRb.js";import"./useBaseUiId-DqVebmsP.js";import"./useControlled-C4H7EWzs.js";import"./CompositeRoot-N_brukBH.js";import"./CompositeItem-C9y1P_Q2.js";import"./ToolbarRootContext-DpnDbVh3.js";import"./composite-D97u5UoY.js";import"./svgIconContainer-B_rEL3k8.js";import"./PdfViewerSearchBar-B7EngmiD.js";import"./chevron-up-CHiC9sgH.js";import"./chevron-down-CgEqRVri.js";import"./cross-BIItHWLB.js";import"./PdfViewerSidebar-DY15xsIW.js";import"./index-DzR_Swb2.js";import"./index-CoSoVngB.js";import"./index-B1eqFRL5.js";import"./PdfViewerToolbar-Ck0JngeL.js";import"./Button-C6bK3SUF.js";import"./chevron-right-BIegTtRy.js";import"./Input-CDZCyUSS.js";import"./search-C9O70xSJ.js";import"./spin-CELBkeEh.js";import"./error-C1w4OL1G.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4100/ab1e7b128f0ac9764a7a28cb5f880414328ee8c6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
