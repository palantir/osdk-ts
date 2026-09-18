import{j as n}from"./iframe-B9azDZlz.js";import{B as e}from"./BasePdfViewer-BMsXilh3.js";import"./preload-helper-Bm0hX83b.js";import"./index-Gnn4IAPK.js";import"./BasePdfViewer.module.css-CxTp-q3K.js";import"./PdfViewerAnnotationLayer-DH_REnmy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CcfuyUuU.js";import"./PdfViewerOutlineSidebar-ClrPZhwy.js";import"./PdfViewerSidebarHeader-CuHEHYOk.js";import"./useBaseUiId-B5AQ3HFN.js";import"./useControlled-CIIQ6AdN.js";import"./CompositeRoot-1CAO4-C5.js";import"./CompositeItem-23Xg-PrO.js";import"./ToolbarRootContext-H0Ylxwtf.js";import"./composite-DG0rNHFY.js";import"./svgIconContainer-BSqh8zzQ.js";import"./PdfViewerSearchBar-C3rGQ5JX.js";import"./chevron-up-9By6ydbO.js";import"./chevron-down-CDhI7Cg9.js";import"./cross-DH7Phj5l.js";import"./PdfViewerSidebar-DN43qOgw.js";import"./index-BqVQ5c0B.js";import"./index-DG7p6B41.js";import"./index-D0fYYncd.js";import"./PdfViewerToolbar-CbjunRw5.js";import"./Button-ByY1VR_F.js";import"./chevron-right-Dvs1_jJg.js";import"./Input-6Xi2oRl5.js";import"./search-D-Pd3u3n.js";import"./spin-TjeNtVAk.js";import"./error-B89KPxvz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/99ec08fa1faefa2ecb1bd7b7a88aea5bae31097b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
