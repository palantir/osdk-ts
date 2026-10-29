import{j as n}from"./iframe-CNj1GFG8.js";import{B as e}from"./BasePdfViewer-pFGOrxi3.js";import"./preload-helper-Cjo-XvAp.js";import"./index-oB_g-d5V.js";import"./BasePdfViewer.module.css-CUo0UvTw.js";import"./PdfViewerAnnotationLayer-B4sY6tqY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlArshD2.js";import"./PdfViewerOutlineSidebar-D-PbzLfT.js";import"./PdfViewerSidebarHeader-Cw3oz3Hx.js";import"./useBaseUiId-CsicFn0g.js";import"./useControlled-DjWof5sy.js";import"./CompositeRoot-YPdwQ__Z.js";import"./CompositeItem-xqfWa6Bp.js";import"./ToolbarRootContext-Nkrk5VcP.js";import"./composite-BHr8Wk2A.js";import"./svgIconContainer-Bhefl8zi.js";import"./PdfViewerSearchBar-9kRJJXWh.js";import"./chevron-up-SuCJxHXj.js";import"./chevron-down-UgpOAJV9.js";import"./cross-B62mBt8r.js";import"./PdfViewerSidebar-D869ydUI.js";import"./index-rvaooZlS.js";import"./index-BASR5P1U.js";import"./index-eXax19dP.js";import"./PdfViewerToolbar-JRmWMPbp.js";import"./Button-DUnKzmAM.js";import"./chevron-right-D8i9ARj2.js";import"./Input-BxtPTbIC.js";import"./search-9WBJrji3.js";import"./spin-FC8eOrtJ.js";import"./error-D9mbXxgI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/35cd30d14285645d59bf2660f4ca2f125e121359/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
