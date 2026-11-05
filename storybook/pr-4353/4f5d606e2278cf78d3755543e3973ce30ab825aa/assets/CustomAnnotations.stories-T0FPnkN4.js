import{j as n}from"./iframe-DpQxl-G6.js";import{B as e}from"./BasePdfViewer-DQPzQ8UI.js";import"./preload-helper-mRXziM39.js";import"./index-Cujp3sVp.js";import"./BasePdfViewer.module.css-D_1bIFeZ.js";import"./PdfViewerAnnotationLayer-WoujEJ5o.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BnLg9pGW.js";import"./PdfViewerOutlineSidebar-BAYFUFgt.js";import"./PdfViewerSidebarHeader-BfvLYR_1.js";import"./useBaseUiId-Cl9-toeq.js";import"./useControlled-TG9q_V2m.js";import"./CompositeRoot-BNPHJOkP.js";import"./CompositeItem-DSQrNM-7.js";import"./ToolbarRootContext-D4KBNeKS.js";import"./composite-wCOpmCUF.js";import"./svgIconContainer-DamXBWaI.js";import"./PdfViewerSearchBar-BIqL7Yyq.js";import"./chevron-up-GtjXVGXQ.js";import"./chevron-down-D-RM0tZ4.js";import"./cross-dB1xiAz0.js";import"./PdfViewerSidebar-8Ir2oeMi.js";import"./index-DttXp8FH.js";import"./index-CrIwRE1J.js";import"./index-BGKSJQgI.js";import"./PdfViewerToolbar-DmsxPfiL.js";import"./Button-BpP7RQEd.js";import"./chevron-right-DPCUEpZ-.js";import"./Input-D2U-2W4H.js";import"./search-n4OQKLJh.js";import"./spin-CZ_pAoxv.js";import"./error-DzvIefMA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4353/4f5d606e2278cf78d3755543e3973ce30ab825aa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
