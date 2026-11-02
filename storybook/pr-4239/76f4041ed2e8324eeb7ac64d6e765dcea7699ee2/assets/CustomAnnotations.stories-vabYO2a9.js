import{j as n}from"./iframe-Cjxg6iNn.js";import{B as e}from"./BasePdfViewer-62c9NmIh.js";import"./preload-helper-Cxg0i_EX.js";import"./index-C7K0gZWV.js";import"./BasePdfViewer.module.css-CFUwYmdI.js";import"./PdfViewerAnnotationLayer-B9ELarF_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKkZw7-8.js";import"./PdfViewerOutlineSidebar-enrgdLIM.js";import"./PdfViewerSidebarHeader-2Fz1OVvx.js";import"./useBaseUiId-CnlnTXqN.js";import"./useControlled-DvCyj3QQ.js";import"./CompositeRoot-CF6O8bI1.js";import"./CompositeItem-CNr4k86k.js";import"./ToolbarRootContext-DZlA8QGQ.js";import"./composite-BjxBGEhF.js";import"./svgIconContainer-CZvHNGTg.js";import"./PdfViewerSearchBar-Be3HO_Ax.js";import"./chevron-up-BrBa_e1-.js";import"./chevron-down-bhCi1ARW.js";import"./cross-B4PrOhV3.js";import"./PdfViewerSidebar-CJGoq_OM.js";import"./index-D5MyUYDa.js";import"./index-CSSvwtgv.js";import"./index-CHnUBrda.js";import"./PdfViewerToolbar-BEYWSAFX.js";import"./Button-DgwxYDBH.js";import"./chevron-right-KOG_5wOs.js";import"./Input-BQ8CO2Zx.js";import"./search-DdTpXEBG.js";import"./spin-ClOpI9KP.js";import"./error-BXzFpfZ4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4239/76f4041ed2e8324eeb7ac64d6e765dcea7699ee2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
