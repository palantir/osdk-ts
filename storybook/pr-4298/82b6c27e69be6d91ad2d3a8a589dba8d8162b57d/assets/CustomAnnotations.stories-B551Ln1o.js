import{j as n}from"./iframe-Hh4e2kUx.js";import{B as e}from"./BasePdfViewer-Dauu0ksW.js";import"./preload-helper-TOQk18-t.js";import"./index-FPZnvji7.js";import"./BasePdfViewer.module.css-EOTw3fZU.js";import"./PdfViewerAnnotationLayer-sheYcs26.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BgmlWfhN.js";import"./PdfViewerOutlineSidebar-D5Js1YXO.js";import"./PdfViewerSidebarHeader-B7dBUvl_.js";import"./useBaseUiId-DjrC8msS.js";import"./useControlled-DdhVK8TG.js";import"./CompositeRoot-C3QN_l9C.js";import"./CompositeItem-Cklqv3Ob.js";import"./ToolbarRootContext-C2gF6pit.js";import"./composite-Cp4pW4Qp.js";import"./svgIconContainer-Cz0JOvaj.js";import"./PdfViewerSearchBar-YKgDL3vU.js";import"./chevron-up--D5KI_17.js";import"./chevron-down-CYKjDF1m.js";import"./cross-B1QiScfw.js";import"./PdfViewerSidebar-Brv1W0rR.js";import"./index-DrBWrzmN.js";import"./index-B-WuXzkU.js";import"./index-DvHaYOI0.js";import"./PdfViewerToolbar-mwzQOEDV.js";import"./Button-BeEw7oZA.js";import"./chevron-right-BfwhOtHw.js";import"./Input-C0NV1hD9.js";import"./search-BdChkyLR.js";import"./spin-7fn8Ao_l.js";import"./error-B0H5FIAQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4298/82b6c27e69be6d91ad2d3a8a589dba8d8162b57d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
