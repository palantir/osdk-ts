import{j as n}from"./iframe-D8UHlLM-.js";import{B as e}from"./BasePdfViewer-_wtKPuo4.js";import"./preload-helper-B2drndpz.js";import"./index-2pZAxqQ8.js";import"./BasePdfViewer.module.css-Bzdc4dpB.js";import"./PdfViewerAnnotationLayer-Bp4bkpM7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CxeswAbG.js";import"./PdfViewerOutlineSidebar-sFhWVViZ.js";import"./PdfViewerSidebarHeader-DWL9eCn_.js";import"./useBaseUiId-B83MHcbd.js";import"./useControlled-DT-SiHVq.js";import"./CompositeRoot-qmr0rnO8.js";import"./CompositeItem-DhPX7cGM.js";import"./ToolbarRootContext-Df4LXHpy.js";import"./composite-BYq1KtFB.js";import"./svgIconContainer-Ckme5BEx.js";import"./PdfViewerSearchBar-KSJV5ms4.js";import"./chevron-up-CE9ztF7n.js";import"./chevron-down-B03gIwVp.js";import"./cross-zCnfpZEf.js";import"./PdfViewerSidebar-DI0GYcT1.js";import"./index-CwPCwgJ9.js";import"./index-DrmX_pzR.js";import"./index-BrcjEskR.js";import"./PdfViewerToolbar-RoaCbTuL.js";import"./Button-SSlA87_g.js";import"./chevron-right-B9f07h6s.js";import"./Input-BHmmIdQN.js";import"./search-DmARyhAU.js";import"./spin-D0BfBvbg.js";import"./error-CsDtSshc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3432/b36607505e393f3eda1cf289f6ee003e245e5911/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
