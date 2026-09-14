import{j as n}from"./iframe-DGk-Gwvb.js";import{B as e}from"./BasePdfViewer-Ck_fjaUx.js";import"./preload-helper-DZHE4yfF.js";import"./index-CHt6784l.js";import"./BasePdfViewer.module.css-C8ZEkYD1.js";import"./PdfViewerAnnotationLayer-DUEdCeA-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BHOrD1hh.js";import"./PdfViewerOutlineSidebar-iEAYs1Jm.js";import"./PdfViewerSidebarHeader-DPQGSYE_.js";import"./useBaseUiId-CYF4ttQ0.js";import"./useControlled-BLk_1CnQ.js";import"./CompositeRoot-DDgk6TJM.js";import"./CompositeItem-CaGEr3lp.js";import"./ToolbarRootContext-DYa8q61O.js";import"./composite-UKbswMLH.js";import"./svgIconContainer-DWhpBW2K.js";import"./PdfViewerSearchBar-BrZF39MT.js";import"./chevron-up-DOU89T7t.js";import"./chevron-down-F0KSYD0T.js";import"./cross-Bv56pu7B.js";import"./PdfViewerSidebar-Bxgm9PZm.js";import"./index-BDWQvtVH.js";import"./index--TUwCCTO.js";import"./index-Y3fUVY7j.js";import"./PdfViewerToolbar-DSBWo_Wg.js";import"./Button-D8mEnRQz.js";import"./chevron-right-D3vDCGxo.js";import"./Input-lpBjDH3J.js";import"./search-DuL1IKxe.js";import"./spin-CVyveTVf.js";import"./error-CNFmOPSg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/5a73bceb41c0ebe13228c00186e917065b74b698/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
