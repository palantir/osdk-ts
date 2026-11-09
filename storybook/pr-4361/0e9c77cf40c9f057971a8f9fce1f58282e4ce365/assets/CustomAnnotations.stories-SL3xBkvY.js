import{j as n}from"./iframe-Bz_J2W1Z.js";import{B as e}from"./BasePdfViewer-DFZ8N2jq.js";import"./preload-helper-ok-MzX3c.js";import"./index-FW_HsjU0.js";import"./BasePdfViewer.module.css-BJYDdeNR.js";import"./PdfViewerAnnotationLayer-BeQlzl3r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CT-bkJ11.js";import"./PdfViewerOutlineSidebar-BdVrSZ1w.js";import"./PdfViewerSidebarHeader-CiGmOb8H.js";import"./useBaseUiId-BhmZfUtN.js";import"./useControlled-BuUO4LJj.js";import"./CompositeRoot-BjCOeqd9.js";import"./CompositeItem-BJ3s4VzC.js";import"./ToolbarRootContext-D7Swefso.js";import"./composite-DlQjNEH4.js";import"./svgIconContainer-CIyUQzFt.js";import"./PdfViewerSearchBar-CC7vvEvt.js";import"./chevron-up-CZn9Cw4t.js";import"./chevron-down-Cd0pn5Sr.js";import"./cross-DddIN5az.js";import"./PdfViewerSidebar-DNdusxaz.js";import"./index-DLug1g0P.js";import"./index-Vqi0hlz6.js";import"./index--E2gQV8-.js";import"./PdfViewerToolbar-B48CPWV4.js";import"./Button-DvYR9GFC.js";import"./chevron-right-Bucm5VY7.js";import"./Input-Bb2RIbvF.js";import"./search-LR9m9GUO.js";import"./spin-C822PQyR.js";import"./error-Cf_kxNf8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4361/0e9c77cf40c9f057971a8f9fce1f58282e4ce365/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
