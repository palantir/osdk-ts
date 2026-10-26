import{j as n}from"./iframe-BrTF0wQy.js";import{B as e}from"./BasePdfViewer-CbHEoT14.js";import"./preload-helper-BrgL7riq.js";import"./index-CLIofpuq.js";import"./BasePdfViewer.module.css-CmtG1-Bo.js";import"./PdfViewerAnnotationLayer-CGNE7z75.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgY_GeX_.js";import"./PdfViewerOutlineSidebar-BqAL-YIq.js";import"./PdfViewerSidebarHeader-C9RlNZR_.js";import"./useBaseUiId-paQZpqMq.js";import"./useControlled-DhGBxpYo.js";import"./CompositeRoot-C2jY-j5A.js";import"./CompositeItem-Cz4Nt1SP.js";import"./ToolbarRootContext-vcL9onuR.js";import"./composite-CeMPnKRZ.js";import"./svgIconContainer-_Twg2KpW.js";import"./PdfViewerSearchBar-BzbkPtyH.js";import"./chevron-up-Coyz-w1G.js";import"./chevron-down-K7i3qdrh.js";import"./cross-Dlqc_1ZY.js";import"./PdfViewerSidebar-uXtPs1w6.js";import"./index-D3KaSgKX.js";import"./index-D3SuSheR.js";import"./index-nFJUSH9O.js";import"./PdfViewerToolbar-HQaghJNO.js";import"./Button-BnRJeVMr.js";import"./chevron-right-DNGoVFRQ.js";import"./Input-BxbCwGL8.js";import"./search-CqSH1asp.js";import"./spin-S16pA-d-.js";import"./error-Csk-3gAP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4260/906d03529b41bd225e619e482d765e415d5d5fb6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
