import{j as n}from"./iframe-D9LEKPHA.js";import{B as e}from"./BasePdfViewer-Cam1Pf7M.js";import"./preload-helper-Dxzd1OZD.js";import"./index-DzK_y6C8.js";import"./BasePdfViewer.module.css-Dof4RJux.js";import"./PdfViewerAnnotationLayer-BKn-Zlfs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BOfaNYCJ.js";import"./PdfViewerOutlineSidebar-CFR5T5i1.js";import"./PdfViewerSidebarHeader-D08mXPSu.js";import"./useBaseUiId-CBbaApFb.js";import"./useControlled-3uaONOlZ.js";import"./CompositeRoot-pJmJhLIb.js";import"./CompositeItem-C_PTfcmx.js";import"./ToolbarRootContext-CATQRVeE.js";import"./composite-CGRnG1Ww.js";import"./svgIconContainer-e-ufemnI.js";import"./PdfViewerSearchBar-CQSf8nW1.js";import"./chevron-up-BXiNTq90.js";import"./chevron-down-5k8pvBL_.js";import"./cross-C3SLdrCX.js";import"./PdfViewerSidebar-DVgB4eBt.js";import"./index-vYt4oG90.js";import"./index-DXKCvCyZ.js";import"./index-Bc3q1fMe.js";import"./PdfViewerToolbar-C7XTzVTd.js";import"./Button-CFsy2fIN.js";import"./chevron-right-B5Q5WMjR.js";import"./Input-D7T3_Ui_.js";import"./search-CA19qJZK.js";import"./spin-uFat5Vyo.js";import"./error-CuQM1-tZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4329/bc0cdb2ada70b3fbdd3f288f15796786df879afa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
