import{j as n}from"./iframe-W94gYwuG.js";import{B as e}from"./BasePdfViewer-5mccy4_C.js";import"./preload-helper-BZdF85c1.js";import"./index-Cuk5CzZs.js";import"./BasePdfViewer.module.css-Ci1VonQQ.js";import"./PdfViewerAnnotationLayer-GQr_fAFZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEjHBY8_.js";import"./PdfViewerOutlineSidebar-B9V_VkOB.js";import"./PdfViewerSidebarHeader-Bas7iQN8.js";import"./useBaseUiId-DLO1E5rV.js";import"./useControlled-BNYkrsEO.js";import"./CompositeRoot-SaWHLFAx.js";import"./CompositeItem-DfviX0qN.js";import"./ToolbarRootContext-BJjWSvlz.js";import"./composite-DlnNiwsN.js";import"./svgIconContainer-DML7KnhH.js";import"./PdfViewerSearchBar-CgOhW0sE.js";import"./chevron-up-Bj_aV9-Q.js";import"./chevron-down-C2jygjf1.js";import"./cross-B_Jh2OAU.js";import"./PdfViewerSidebar-Bnrcs8tW.js";import"./index-D8f0-tDA.js";import"./index-Dr7s6soJ.js";import"./index-DDztdIhx.js";import"./PdfViewerToolbar-BJHU9XQ5.js";import"./Button-DaHI_b0v.js";import"./chevron-right-Db0Ma81a.js";import"./Input-CjZq1vGj.js";import"./search-c21shtzO.js";import"./spin-Dv3SxCFo.js";import"./error-BiPx4nD4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4033/c347ddb93fb610941006d557a5d8d13a356b57e6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
