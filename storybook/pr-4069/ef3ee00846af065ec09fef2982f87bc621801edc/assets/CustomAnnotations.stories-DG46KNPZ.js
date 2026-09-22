import{j as n}from"./iframe-DAMQ0kJi.js";import{B as e}from"./BasePdfViewer-g3wtz7aS.js";import"./preload-helper-B_MKI7VB.js";import"./index-Bp0gXdhg.js";import"./BasePdfViewer.module.css-BZWn8-Ts.js";import"./PdfViewerAnnotationLayer-Bojwu6lF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-tutmVsqV.js";import"./PdfViewerOutlineSidebar-S3DtpuFB.js";import"./PdfViewerSidebarHeader-DaIiH3Ke.js";import"./useBaseUiId-CZjCaxZv.js";import"./useControlled-DC6nW2lc.js";import"./CompositeRoot-BRnpOY_R.js";import"./CompositeItem-BDbWSvwq.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./composite-BYBlPAgy.js";import"./svgIconContainer-CVBLUyxF.js";import"./PdfViewerSearchBar-CYP4mjsS.js";import"./chevron-up-BziSE6gz.js";import"./chevron-down-CXmtiTux.js";import"./cross-DxIbIlzH.js";import"./PdfViewerSidebar-Nr34RGwj.js";import"./index-DPV2fpq5.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./PdfViewerToolbar-0mh0wdp7.js";import"./Button-5SDZ05K4.js";import"./chevron-right-HNKdP6At.js";import"./Input-CyyvCwcw.js";import"./search-AYrmuoce.js";import"./spin-LxCg-G3L.js";import"./error-COQAffC4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4069/ef3ee00846af065ec09fef2982f87bc621801edc/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
