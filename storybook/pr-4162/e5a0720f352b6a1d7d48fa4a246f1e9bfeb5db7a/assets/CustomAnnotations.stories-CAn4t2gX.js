import{j as n}from"./iframe-TTTmSYHm.js";import{B as e}from"./BasePdfViewer-D_4idmIu.js";import"./preload-helper-ClYOkReB.js";import"./index-MsEGuD0o.js";import"./BasePdfViewer.module.css-CrbsqP3B.js";import"./PdfViewerAnnotationLayer-Du_-2v3P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DYnVV8J6.js";import"./PdfViewerOutlineSidebar-DMtAaGpd.js";import"./PdfViewerSidebarHeader-BUFTN90g.js";import"./useBaseUiId-DzbI9-Sb.js";import"./useControlled-bG7LsTar.js";import"./CompositeRoot-_Zl1bY7P.js";import"./CompositeItem-DOKaGOjC.js";import"./ToolbarRootContext-Da-vX-iu.js";import"./composite-BPJ0g_Cp.js";import"./svgIconContainer-DU6hcGdL.js";import"./PdfViewerSearchBar-B5l9my7b.js";import"./chevron-up-DKUANvKI.js";import"./chevron-down-BWZ8_fkX.js";import"./cross-DqugLD6r.js";import"./PdfViewerSidebar-DByw9bkM.js";import"./index-DKumu57d.js";import"./index-CF7SEcu1.js";import"./index-Cqp_2UpH.js";import"./PdfViewerToolbar-PyzXV69U.js";import"./Button-D_Pqa9bY.js";import"./chevron-right-xAMkAOLA.js";import"./Input-B2lkln1U.js";import"./search-CpIo6FKV.js";import"./spin-Cq4R5Kn6.js";import"./error-BU0mbQfC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4162/e5a0720f352b6a1d7d48fa4a246f1e9bfeb5db7a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
