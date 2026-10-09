import{j as n}from"./iframe-KOHCB4Ql.js";import{B as e}from"./BasePdfViewer-BH_RdNCz.js";import"./preload-helper-C6JW-Yng.js";import"./index-BNcO0wRN.js";import"./BasePdfViewer.module.css-6Sd3e8sC.js";import"./PdfViewerAnnotationLayer-BN9AJ8k7.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0dqIUGp.js";import"./PdfViewerOutlineSidebar-DVEkPC0Z.js";import"./PdfViewerSidebarHeader-tgzGjdRG.js";import"./useBaseUiId-CnRKbAt1.js";import"./useControlled-BY7stmzf.js";import"./CompositeRoot-B4djeu73.js";import"./CompositeItem-wiNuWtyF.js";import"./ToolbarRootContext-DilrPmxZ.js";import"./composite-ChHDZB6E.js";import"./svgIconContainer-C4qAid9G.js";import"./PdfViewerSearchBar-DB1Pf2GI.js";import"./chevron-up-DA-oKW4V.js";import"./chevron-down-InZk2kmp.js";import"./cross-BUaadKZZ.js";import"./PdfViewerSidebar-BpS13hED.js";import"./index-w7dGULd9.js";import"./index-CBKKW39b.js";import"./index-BQDXS8xb.js";import"./PdfViewerToolbar-BMNsNNIy.js";import"./Button-uumGSIHU.js";import"./chevron-right-Dfp_9Lda.js";import"./Input-D6-DkH9C.js";import"./search-Dd1zov5c.js";import"./spin-wvU5baDv.js";import"./error-C0G7w8jF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4203/2c39cd10a083a3e190ae288702889cccd8682111/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
