import{j as n}from"./iframe-weo2ftOt.js";import{B as e}from"./BasePdfViewer-C0Q096J-.js";import"./preload-helper-CccATkyg.js";import"./index-BzFNlzeA.js";import"./BasePdfViewer.module.css-DgL-2ejP.js";import"./PdfViewerAnnotationLayer-DZtijym2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DVV0EfW1.js";import"./PdfViewerOutlineSidebar-MLXbYtYo.js";import"./PdfViewerSidebarHeader-L2nHSg8r.js";import"./useBaseUiId-Ca9MSPeN.js";import"./useControlled-BR3V1Gxk.js";import"./CompositeRoot-BVmunixJ.js";import"./CompositeItem-tLUZG1Hv.js";import"./ToolbarRootContext-9vNtX9N5.js";import"./composite-CXbXQTWA.js";import"./svgIconContainer-4wqza-Yn.js";import"./PdfViewerSearchBar-CV9YOY8r.js";import"./chevron-up-DOxm5O-b.js";import"./chevron-down-BqDjxAzh.js";import"./cross-DFxtUTH2.js";import"./PdfViewerSidebar-BWvzhsrL.js";import"./index-jbXLVEma.js";import"./index-CwVuW96i.js";import"./index-OwV8MnsF.js";import"./PdfViewerToolbar-B-Zd-K3T.js";import"./Button-DTZufqgI.js";import"./chevron-right-DC6VViLN.js";import"./Input-DDH0znUE.js";import"./search-D7AcF35x.js";import"./spin-BJpN6P-g.js";import"./error-LA7kedRF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4107/a71f158257d6e594c564c5d19d2c9c27eba6c26d/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
