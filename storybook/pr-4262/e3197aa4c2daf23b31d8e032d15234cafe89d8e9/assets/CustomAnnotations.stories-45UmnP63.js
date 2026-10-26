import{j as n}from"./iframe-I-oDj4Zf.js";import{B as e}from"./BasePdfViewer-CpXQxI4H.js";import"./preload-helper-DoR3GGZy.js";import"./index-QR0ynjTm.js";import"./BasePdfViewer.module.css-BzH-iAXF.js";import"./PdfViewerAnnotationLayer-qkQSHLSO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BoR2IwbI.js";import"./PdfViewerOutlineSidebar-DIfAJFNu.js";import"./PdfViewerSidebarHeader-BIEC8wvU.js";import"./useBaseUiId-DbsMUGHz.js";import"./useControlled-CphiSNJu.js";import"./CompositeRoot-BZSNJ_Vm.js";import"./CompositeItem-Bh0NB-Cc.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./composite-CVLqeN_f.js";import"./svgIconContainer-BrWiwUny.js";import"./PdfViewerSearchBar-Dev7XKJz.js";import"./chevron-up-C9-HH4Lo.js";import"./chevron-down-DsdifgPL.js";import"./cross-CX2gEjus.js";import"./PdfViewerSidebar-CL8W9TzA.js";import"./index-COac3hDI.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./PdfViewerToolbar-BzMMCeoA.js";import"./Button-DZTSIR38.js";import"./chevron-right-DRiubHY2.js";import"./Input-QRcBEz-L.js";import"./search-CIYeg_xA.js";import"./spin-jq7xDk7V.js";import"./error-DQf4Jva_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4262/e3197aa4c2daf23b31d8e032d15234cafe89d8e9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
