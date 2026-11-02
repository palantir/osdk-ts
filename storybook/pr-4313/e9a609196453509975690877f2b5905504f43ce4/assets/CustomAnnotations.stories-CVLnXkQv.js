import{j as n}from"./iframe-CiI5PS6K.js";import{B as e}from"./BasePdfViewer-DiuJWFaK.js";import"./preload-helper-BScoV-ON.js";import"./index-DTPqzTra.js";import"./BasePdfViewer.module.css-DvnmBH0O.js";import"./PdfViewerAnnotationLayer-Bme88dAa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGZlYFif.js";import"./PdfViewerOutlineSidebar-BLnaJnxY.js";import"./PdfViewerSidebarHeader-Csk3_BxS.js";import"./useBaseUiId-DReynxDq.js";import"./useControlled-C0rSVFZc.js";import"./CompositeRoot-BSTwkYF7.js";import"./CompositeItem-D4PTMtSQ.js";import"./ToolbarRootContext-CTDjgR90.js";import"./composite-BrOoGgaN.js";import"./svgIconContainer-tdqH8iqE.js";import"./PdfViewerSearchBar-Bd0-46Bv.js";import"./chevron-up-JC5Qs0Jg.js";import"./chevron-down-F9mPI0PG.js";import"./cross-DgjL-w3z.js";import"./PdfViewerSidebar-D34LVfM1.js";import"./index-DzwnFRrI.js";import"./index-CjZ-iEVj.js";import"./index-XzG81WZo.js";import"./PdfViewerToolbar-BbToIw1F.js";import"./Button-BP56zFTn.js";import"./chevron-right-CeKh0A4X.js";import"./Input-gM0suFmQ.js";import"./search-BRtPHFLM.js";import"./spin-BrA2FSOA.js";import"./error-Dp2Yeg1s.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4313/e9a609196453509975690877f2b5905504f43ce4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
