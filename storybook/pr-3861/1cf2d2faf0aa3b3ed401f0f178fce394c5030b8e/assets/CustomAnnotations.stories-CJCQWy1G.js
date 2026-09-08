import{j as n}from"./iframe-CtO4Vlsv.js";import{B as e}from"./BasePdfViewer-DOhucrGG.js";import"./preload-helper-YqejZBGo.js";import"./index-D6VuR_bO.js";import"./BasePdfViewer.module.css-tquRgccy.js";import"./PdfViewerAnnotationLayer-BNVlX_lR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CDkPq0Oi.js";import"./PdfViewerOutlineSidebar-BDfpvffL.js";import"./PdfViewerSidebarHeader-4j_5bszU.js";import"./useBaseUiId-B7sMgTKT.js";import"./useControlled-Dnk1LplJ.js";import"./CompositeRoot-4xffGSd3.js";import"./CompositeItem-CyExzK58.js";import"./ToolbarRootContext-BV8nTPdY.js";import"./composite-1A59BLWV.js";import"./svgIconContainer-dYvBsUdw.js";import"./PdfViewerSearchBar-CcYHkOJ0.js";import"./chevron-up-C8zXz5bF.js";import"./chevron-down-BoBfGWo-.js";import"./cross-DIyr606b.js";import"./PdfViewerSidebar-DfRpBoin.js";import"./index-SvYPogYk.js";import"./index-BcgXYDjH.js";import"./index-Ct5AqRLg.js";import"./PdfViewerToolbar-BhEJpdBd.js";import"./Button-n85r1nQ7.js";import"./chevron-right-BOmST6M-.js";import"./Input-D94oZ1yC.js";import"./search-BP5Cq0-y.js";import"./spin-Cg4NOx30.js";import"./error-xCVe8qee.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/1cf2d2faf0aa3b3ed401f0f178fce394c5030b8e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
