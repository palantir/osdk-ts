import{j as n}from"./iframe-BnQn1FlY.js";import{B as e}from"./BasePdfViewer-Cqhb2tv2.js";import"./preload-helper-BecbOaxr.js";import"./index-CfSflYMd.js";import"./BasePdfViewer.module.css-BKkR6QVV.js";import"./PdfViewerAnnotationLayer-BhKOfFT3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BU02Za5Y.js";import"./PdfViewerOutlineSidebar-BMRWwAlJ.js";import"./PdfViewerSidebarHeader-BgODebZW.js";import"./useBaseUiId-D_n7SQSX.js";import"./useControlled-i3XBhDi5.js";import"./CompositeRoot-07GyAGRf.js";import"./CompositeItem-DQ-KZaEd.js";import"./ToolbarRootContext-DpVEn9hT.js";import"./composite-D7QBQd-n.js";import"./svgIconContainer-C8CWCK4h.js";import"./PdfViewerSearchBar-CqSvgjJB.js";import"./chevron-up-CPeZT1cr.js";import"./chevron-down-CBuocP3-.js";import"./cross-CQwrttsU.js";import"./PdfViewerSidebar-DaoqbWeL.js";import"./index-CzWHx20P.js";import"./index-TO_0y0N3.js";import"./index-C1lVCR7D.js";import"./PdfViewerToolbar-UgFv0fN9.js";import"./Button-DdWl47ZG.js";import"./chevron-right-2hKrIZhJ.js";import"./Input-DoQKk1PO.js";import"./search-DRs0Pqxh.js";import"./spin-kMKGR1vb.js";import"./error-HPj_xS2_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4159/7111b01bd758a8f892c79bf518d8dc130d432946/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
