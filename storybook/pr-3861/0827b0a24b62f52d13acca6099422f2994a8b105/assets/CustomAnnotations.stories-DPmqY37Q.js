import{j as n}from"./iframe-DUenp6lH.js";import{B as e}from"./BasePdfViewer-DPKqSFrj.js";import"./preload-helper-BrQ2IwN3.js";import"./index-CR7YeDMv.js";import"./BasePdfViewer.module.css-DiNJ30ZB.js";import"./PdfViewerAnnotationLayer-DsE3Ax6L.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_aD1Sz1.js";import"./PdfViewerOutlineSidebar-CxacyYAR.js";import"./PdfViewerSidebarHeader-B1IZIUEk.js";import"./useBaseUiId-C5AD1Gq1.js";import"./useControlled-CqXkm6hT.js";import"./CompositeRoot-Cem-KCcr.js";import"./CompositeItem-C4zuFT9w.js";import"./ToolbarRootContext-CHqPptLt.js";import"./composite-cl-eg-Mr.js";import"./svgIconContainer-CPPwWmWb.js";import"./PdfViewerSearchBar-d6vGT-FZ.js";import"./chevron-up-B2sbYsO1.js";import"./chevron-down-iXJuV4q7.js";import"./cross-DwLsQDiH.js";import"./PdfViewerSidebar-BZ_dszUi.js";import"./index-CVMpflAU.js";import"./index-DiIhoR1V.js";import"./index-Ki6h912l.js";import"./PdfViewerToolbar-CYfj50nq.js";import"./Button-HrxQOGa9.js";import"./chevron-right-siaGF_6c.js";import"./Input-D9S29-Xm.js";import"./search-DYKYo547.js";import"./spin-B0AQ8J5K.js";import"./error-BN9liXL6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/0827b0a24b62f52d13acca6099422f2994a8b105/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
