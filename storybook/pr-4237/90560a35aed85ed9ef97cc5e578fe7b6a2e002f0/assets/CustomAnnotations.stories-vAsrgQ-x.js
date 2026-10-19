import{j as n}from"./iframe-Dcbb45TM.js";import{B as e}from"./BasePdfViewer-CjquG2Vi.js";import"./preload-helper-D8JM7gnw.js";import"./index-BP3mGvIi.js";import"./BasePdfViewer.module.css-exJkvJ8V.js";import"./PdfViewerAnnotationLayer-BKkPBqVn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BE_XdJcG.js";import"./PdfViewerOutlineSidebar-De3UsHFz.js";import"./PdfViewerSidebarHeader-DYRpWmvU.js";import"./useBaseUiId-KvLNO8W4.js";import"./useControlled-Da1fb4mu.js";import"./CompositeRoot-DVsnHDkI.js";import"./CompositeItem-1Mp7uRya.js";import"./ToolbarRootContext-CgWzIiHM.js";import"./composite-BIYviI6v.js";import"./svgIconContainer-C653aYE0.js";import"./PdfViewerSearchBar-DS0tATtD.js";import"./chevron-up-CIfC59-P.js";import"./chevron-down-B67Z7lxm.js";import"./cross-CFg2OY8m.js";import"./PdfViewerSidebar-8inAKOTg.js";import"./index-Dqy8Ou-s.js";import"./index-LAjudTQg.js";import"./index-DPou_tLy.js";import"./PdfViewerToolbar-D_Vzkv5S.js";import"./Button-Bfb_bO0G.js";import"./chevron-right-CHQwRfJl.js";import"./Input-DKG4JtdJ.js";import"./search-8-lHNRta.js";import"./spin-nUphxVQx.js";import"./error-DGuxoAox.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/90560a35aed85ed9ef97cc5e578fe7b6a2e002f0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
