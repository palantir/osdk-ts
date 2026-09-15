import{j as n}from"./iframe-BkUB1z-0.js";import{B as e}from"./BasePdfViewer-BnCiBTQD.js";import"./preload-helper-BCudyj9Z.js";import"./index-BCGsaIlh.js";import"./BasePdfViewer.module.css-DFkF0t-d.js";import"./PdfViewerAnnotationLayer-CsjHOvfZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BzeBz6U3.js";import"./PdfViewerOutlineSidebar-Bi3CiztQ.js";import"./PdfViewerSidebarHeader-BwIVSaJ6.js";import"./useBaseUiId-B8T1UKcT.js";import"./useControlled-CUAQStBL.js";import"./CompositeRoot-RypsoVii.js";import"./CompositeItem-Bq1Yg5Uc.js";import"./ToolbarRootContext-But4UFVK.js";import"./composite-DN3Oh5mU.js";import"./svgIconContainer-CGIj3k_X.js";import"./PdfViewerSearchBar-QIqf4CRT.js";import"./chevron-up-Cg2ncQwD.js";import"./chevron-down-C-Az15Kw.js";import"./cross-CTUau5h8.js";import"./PdfViewerSidebar-CX5iyQI3.js";import"./index-Cx3qLWLm.js";import"./index-BQjDuZGx.js";import"./index-D6in26WZ.js";import"./PdfViewerToolbar-ojyaI0LL.js";import"./Button-DSZL0uVg.js";import"./chevron-right-fCx9NRNR.js";import"./Input-C4TK9SWN.js";import"./search-BtcHq1ld.js";import"./spin-BeDMiFMy.js";import"./error-yvAwMgsa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4037/451ea544fbef2ae472d0f1512b33f23e80a14785/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
