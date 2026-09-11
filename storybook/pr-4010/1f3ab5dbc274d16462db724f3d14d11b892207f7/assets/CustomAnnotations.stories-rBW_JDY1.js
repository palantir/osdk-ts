import{j as n}from"./iframe-CNvI9eAL.js";import{B as e}from"./BasePdfViewer-BpaEmYpC.js";import"./preload-helper-CRF54Ery.js";import"./index-BTFSWIKz.js";import"./BasePdfViewer.module.css-DtOdmMSZ.js";import"./PdfViewerAnnotationLayer-VXAd5EYd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHm_QIBi.js";import"./PdfViewerOutlineSidebar-JG8AQU9N.js";import"./PdfViewerSidebarHeader-BuYzVMzc.js";import"./useBaseUiId-CxeAu3mm.js";import"./useControlled-pDp_EzUa.js";import"./CompositeRoot-CPaC8xdK.js";import"./CompositeItem-aRd3tSux.js";import"./ToolbarRootContext-CTMDQSca.js";import"./composite-Db3opbub.js";import"./svgIconContainer-BBVMgJTA.js";import"./PdfViewerSearchBar-Dp0KQRFH.js";import"./chevron-up-B9CyFkwK.js";import"./chevron-down-DEvcNxOi.js";import"./cross--RfUm2YZ.js";import"./PdfViewerSidebar-C17ZebRC.js";import"./index-BHMz7Anj.js";import"./index-V8dSKZeO.js";import"./index-Cvipkoc1.js";import"./PdfViewerToolbar-CqrJ5mF1.js";import"./Button-CfqXNV8N.js";import"./chevron-right-C9Ooxh0y.js";import"./Input-CfSk64xN.js";import"./search-BesbbJYF.js";import"./spin-CGg3nwE4.js";import"./error-CG9g-M1f.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4010/1f3ab5dbc274d16462db724f3d14d11b892207f7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
