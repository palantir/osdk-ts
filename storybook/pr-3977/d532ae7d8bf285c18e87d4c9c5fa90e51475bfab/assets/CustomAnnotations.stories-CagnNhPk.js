import{j as n}from"./iframe-TxXxbmz5.js";import{B as e}from"./BasePdfViewer-CRzlqHP1.js";import"./preload-helper-CpxRQbhd.js";import"./index-CN0gJRJO.js";import"./BasePdfViewer.module.css-D6pUrtsQ.js";import"./PdfViewerAnnotationLayer-PwtmbgB_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuQj_R5k.js";import"./PdfViewerOutlineSidebar-CNOQIiDa.js";import"./PdfViewerSidebarHeader-DpV0rIOF.js";import"./useBaseUiId-Br3V4Y7Q.js";import"./useControlled-DruZmDs3.js";import"./CompositeRoot-DKXv_0uM.js";import"./CompositeItem-BE7Mz5Vz.js";import"./ToolbarRootContext-BWpuHFgW.js";import"./composite-DOASapxT.js";import"./svgIconContainer-CELXinHy.js";import"./PdfViewerSearchBar-DLoEtSc9.js";import"./chevron-up-CZfIwrNs.js";import"./chevron-down-BclEY4pC.js";import"./cross-VXN4aiwS.js";import"./PdfViewerSidebar-4IHjFJ4T.js";import"./index-CRtDM6bX.js";import"./index-B7GgCYYh.js";import"./index-CIu9B3ha.js";import"./PdfViewerToolbar-KzDwNHAN.js";import"./Button-LZRzEtLJ.js";import"./chevron-right-C5pE9j-q.js";import"./Input-B4WkyavH.js";import"./search-BC9yKYZ2.js";import"./spin-xb55Z2-j.js";import"./error-DK4Y1HxX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3977/d532ae7d8bf285c18e87d4c9c5fa90e51475bfab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
