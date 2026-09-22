import{j as n}from"./iframe-8DMGEq06.js";import{B as e}from"./BasePdfViewer-ha0M7OJl.js";import"./preload-helper-BjAl-lK2.js";import"./index-DRq4gjPq.js";import"./BasePdfViewer.module.css-duAacylG.js";import"./PdfViewerAnnotationLayer-D5GDtcdD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BXb37U3N.js";import"./PdfViewerOutlineSidebar-fhgX0jgG.js";import"./PdfViewerSidebarHeader-iWjaITX0.js";import"./useBaseUiId-B2FWNhGQ.js";import"./useControlled-Khc0ddfA.js";import"./CompositeRoot-CXeDCZsV.js";import"./CompositeItem-Bb2gn4Bj.js";import"./ToolbarRootContext-Bepk2A_H.js";import"./composite-CY_QXMLo.js";import"./svgIconContainer-B8_9Y0Zn.js";import"./PdfViewerSearchBar-5KsBqz36.js";import"./chevron-up-C862Oldf.js";import"./chevron-down-F_95MoSJ.js";import"./cross-DYaZw4Am.js";import"./PdfViewerSidebar-CD0iapjh.js";import"./index-CsyOcyyy.js";import"./index-D4LKk0YB.js";import"./index-mbbVtxqA.js";import"./PdfViewerToolbar-D1KGp5eo.js";import"./Button-CraGbNXA.js";import"./chevron-right-DOpfBmKA.js";import"./Input-dydaNapo.js";import"./search-CvifUsIK.js";import"./spin-CqsYyeBS.js";import"./error-CiLZ8SWq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4036/30777e465321ce347d5fc7c5ef778655bb6c19c3/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
