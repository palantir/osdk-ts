import{j as n}from"./iframe-CQsOKhp1.js";import{B as e}from"./BasePdfViewer-CUHIBBVw.js";import"./preload-helper-QCVrcnhn.js";import"./index-Cfn5HHSj.js";import"./BasePdfViewer.module.css-sd2aRnZn.js";import"./PdfViewerAnnotationLayer-DknE52YB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BVp4ca7B.js";import"./PdfViewerOutlineSidebar-BQL714h1.js";import"./PdfViewerSidebarHeader-DNYuGoIw.js";import"./useBaseUiId-D94WIrG_.js";import"./useControlled-BDZq96US.js";import"./CompositeRoot-CAScWFgu.js";import"./CompositeItem-D0ilUgR4.js";import"./ToolbarRootContext-C5qJ1QrY.js";import"./composite-blMZk3SM.js";import"./svgIconContainer-qEMrR21W.js";import"./PdfViewerSearchBar-CLcp4QtM.js";import"./chevron-up-ZkvFUe5J.js";import"./chevron-down-BU_Ll11Q.js";import"./cross-D4ZfN4mf.js";import"./PdfViewerSidebar-C5iFY6M6.js";import"./index-C1wW_rI9.js";import"./index-vi3ICmyv.js";import"./index-BeDrSC4b.js";import"./PdfViewerToolbar-ByY8eI_r.js";import"./Button-CPVt0M1Q.js";import"./chevron-right-k0xf9FS6.js";import"./Input-B-8EoJIN.js";import"./search-BBkEdcYr.js";import"./spin-BUz68z7S.js";import"./error-B_L6yULe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/dbc0a6e45321ca5ee3701a994b5c37ba49ff061b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
