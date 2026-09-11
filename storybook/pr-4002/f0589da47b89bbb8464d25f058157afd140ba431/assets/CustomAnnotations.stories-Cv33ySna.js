import{j as n}from"./iframe-CM-gF3vE.js";import{B as e}from"./BasePdfViewer-CTVMjoHm.js";import"./preload-helper-6RfIl02U.js";import"./index-DP8egC0k.js";import"./BasePdfViewer.module.css-CO1O9Bq3.js";import"./PdfViewerAnnotationLayer-D4IX1_Wj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dxx37jGf.js";import"./PdfViewerOutlineSidebar-Bf9bmEYA.js";import"./PdfViewerSidebarHeader-Dx3kTIZU.js";import"./useBaseUiId-CaS2-N7q.js";import"./useControlled-BG8DwFhU.js";import"./CompositeRoot-Dsr36EnY.js";import"./CompositeItem-D8NXSqvh.js";import"./ToolbarRootContext-CtUDA1Sa.js";import"./composite-Cf4jE4TY.js";import"./svgIconContainer-PHQsggTT.js";import"./PdfViewerSearchBar-Bhk-tak0.js";import"./chevron-up-DEDIQR-O.js";import"./chevron-down-w3gTlyQy.js";import"./cross-YK-JeFcC.js";import"./PdfViewerSidebar-CtAIVNT7.js";import"./index-C3eh3scJ.js";import"./index-BEBDzy14.js";import"./index-C3IUZqO9.js";import"./PdfViewerToolbar-D9ChJWrN.js";import"./Button-BzK-RFmN.js";import"./chevron-right-MtlzwAYf.js";import"./Input-DqavlJne.js";import"./search-BtBkQ6yC.js";import"./spin-BUuwwSUA.js";import"./error-2hF2x4c1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/f0589da47b89bbb8464d25f058157afd140ba431/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
