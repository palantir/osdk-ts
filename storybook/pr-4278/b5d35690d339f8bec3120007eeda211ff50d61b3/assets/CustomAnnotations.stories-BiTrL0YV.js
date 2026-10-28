import{j as n}from"./iframe-B5ExBQzJ.js";import{B as e}from"./BasePdfViewer-Krc_y_Bd.js";import"./preload-helper-BKpiLxff.js";import"./index-CitCcLFV.js";import"./BasePdfViewer.module.css-Dnoxb04c.js";import"./PdfViewerAnnotationLayer-DN0sC5LZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChOZErSk.js";import"./PdfViewerOutlineSidebar-B1SXwAar.js";import"./PdfViewerSidebarHeader-YVjTP0Yd.js";import"./useBaseUiId-DRK3uSj0.js";import"./useControlled-CcsA4hDD.js";import"./CompositeRoot-CvbqH8vD.js";import"./CompositeItem-BnzcVROn.js";import"./ToolbarRootContext-Cs8zUWV2.js";import"./composite-DB1LtyAr.js";import"./svgIconContainer-BLHh5YtK.js";import"./PdfViewerSearchBar-C6XsQHXl.js";import"./chevron-up-BSqx_FSm.js";import"./chevron-down-DY2jF6xe.js";import"./cross-DAA3CpVw.js";import"./PdfViewerSidebar-ByDSPyII.js";import"./index-DaOoM8bo.js";import"./index-BTZGq7CS.js";import"./index-Kx0JXijT.js";import"./PdfViewerToolbar-BssttpTO.js";import"./Button-Dzl2Qrvs.js";import"./chevron-right-CSkgPqnO.js";import"./Input-CsmEMiLS.js";import"./search-l8XKRmqF.js";import"./spin-BfShuIHY.js";import"./error-HO3Aksfc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4278/b5d35690d339f8bec3120007eeda211ff50d61b3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
