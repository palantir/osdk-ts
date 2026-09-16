import{j as n}from"./iframe-C-TWQ9Dj.js";import{B as e}from"./BasePdfViewer-BI2gynsi.js";import"./preload-helper-SRiQ6y29.js";import"./index-PmPY8NSw.js";import"./BasePdfViewer.module.css-CpAJRB7d.js";import"./PdfViewerAnnotationLayer-C5J2Dqgg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuisHpR_.js";import"./PdfViewerOutlineSidebar-DCbBgCZE.js";import"./PdfViewerSidebarHeader-CfVjy6KS.js";import"./useBaseUiId-C7aOOgXJ.js";import"./useControlled-CySHXj1X.js";import"./CompositeRoot-BO5byAO0.js";import"./CompositeItem-Dko6wR9I.js";import"./ToolbarRootContext-C8QhLNp3.js";import"./composite-D--SIj9q.js";import"./svgIconContainer-lMlNb8_m.js";import"./PdfViewerSearchBar-nR8gM5gF.js";import"./chevron-up-Sqfpy2Po.js";import"./chevron-down-gXZSSvnY.js";import"./cross-BVZ0tu48.js";import"./PdfViewerSidebar-B-FAAQOD.js";import"./index-CEKrq0xG.js";import"./index--LBhfvhY.js";import"./index-Dii1cflf.js";import"./PdfViewerToolbar-9OdgvODE.js";import"./Button-CBan_F_X.js";import"./chevron-right-BLjxC1ou.js";import"./Input-C724ccD9.js";import"./search-CPuRKLWN.js";import"./spin-Ckr6R6Hw.js";import"./error-C4q3M3Sg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4035/2999d7b1e211609427e1e5f7a3564917cfc6d1cb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
