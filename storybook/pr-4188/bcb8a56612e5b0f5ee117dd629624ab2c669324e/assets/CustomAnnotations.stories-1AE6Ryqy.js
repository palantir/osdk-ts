import{j as n}from"./iframe-BpcZw0Qh.js";import{B as e}from"./BasePdfViewer-CJZ9eJYF.js";import"./preload-helper-bs_ZWCVp.js";import"./index-RyqdaqZt.js";import"./BasePdfViewer.module.css-Bd0Zs8TR.js";import"./PdfViewerAnnotationLayer-DvuKJmK_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D21-mYUp.js";import"./PdfViewerOutlineSidebar-BYniNHei.js";import"./PdfViewerSidebarHeader-DbOWyVVa.js";import"./useBaseUiId-BsFMaRmq.js";import"./useControlled-BaPgI88u.js";import"./CompositeRoot-BKRqmrK5.js";import"./CompositeItem-CiXh4i5Q.js";import"./ToolbarRootContext-Bafsun3r.js";import"./composite-b_Vir_Qy.js";import"./svgIconContainer-B6eNnREq.js";import"./PdfViewerSearchBar-B6N__7Lh.js";import"./chevron-up-kxiQh0Uj.js";import"./chevron-down-0qsj7SKJ.js";import"./cross-BQZa2Kkg.js";import"./PdfViewerSidebar-DOtKcQf3.js";import"./index-BvmVuSqJ.js";import"./index-j_Bq1Wxb.js";import"./index-hOxH3DWt.js";import"./PdfViewerToolbar-CATqug_j.js";import"./Button-xX1VEK25.js";import"./chevron-right-CWxy3TGc.js";import"./Input-B-pxSN65.js";import"./search-C5aLdI-z.js";import"./spin-B8UK78gR.js";import"./error-DJy30QKE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4188/bcb8a56612e5b0f5ee117dd629624ab2c669324e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
