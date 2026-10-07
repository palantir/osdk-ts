import{j as n}from"./iframe-DXrbmFQU.js";import{B as e}from"./BasePdfViewer-Dvvnmc88.js";import"./preload-helper-BpeD6mmz.js";import"./index-CC0lkARs.js";import"./BasePdfViewer.module.css-DEayOuOW.js";import"./PdfViewerAnnotationLayer-M49vTXNd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-G7AYbEAv.js";import"./PdfViewerOutlineSidebar-B6XbiplY.js";import"./PdfViewerSidebarHeader-Cbcgtr4V.js";import"./useBaseUiId-Bmo8e_yl.js";import"./useControlled-B7qMp3Jr.js";import"./CompositeRoot-BMwn0jDR.js";import"./CompositeItem-BFe5eqlW.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./composite-CtPqGv2Q.js";import"./svgIconContainer-D3MknpC0.js";import"./PdfViewerSearchBar-BO3HaKPH.js";import"./chevron-up-BZwni23l.js";import"./chevron-down-Dt-I4rTn.js";import"./cross-CS_4qYPy.js";import"./PdfViewerSidebar-BXdWe35K.js";import"./index-Cmhl-M1L.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./PdfViewerToolbar-DvZHIyh4.js";import"./Button-CaEsIWhF.js";import"./chevron-right-kN0Kdz9z.js";import"./Input-sDtqAHjV.js";import"./search-B06mFuBu.js";import"./spin-CjB3f3vR.js";import"./error-DTlfxxBy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4177/9f14b4ee97c992534e8742e1ab69cb580b0c7a7b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
