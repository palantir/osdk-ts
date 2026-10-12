import{j as n}from"./iframe-De0JvUDI.js";import{B as e}from"./BasePdfViewer-CRwDf22R.js";import"./preload-helper-DW0Viam7.js";import"./index-D2ucVBaK.js";import"./BasePdfViewer.module.css-CxrgI0ac.js";import"./PdfViewerAnnotationLayer-BrmfjaIu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CaMoxxCJ.js";import"./PdfViewerOutlineSidebar-D1zE9DMS.js";import"./PdfViewerSidebarHeader-BSU2d6Z8.js";import"./useBaseUiId-ClfRKfDN.js";import"./useControlled-CRrAgDjk.js";import"./CompositeRoot-B46m9bWT.js";import"./CompositeItem-w6RFopZN.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./composite-Un7w28gc.js";import"./svgIconContainer-C40TH68P.js";import"./PdfViewerSearchBar-QGrkgU0u.js";import"./chevron-up-jDR939ib.js";import"./chevron-down-Yz9bQ-ge.js";import"./cross-D3NokT3S.js";import"./PdfViewerSidebar-DUsUCzg9.js";import"./index-POBaPims.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./PdfViewerToolbar-B9Xr7r5X.js";import"./Button-Bn-SxZv6.js";import"./chevron-right-C6sc62gp.js";import"./Input-C_CGkTkl.js";import"./search-MoU8b7Yy.js";import"./spin-Dd89WYD9.js";import"./error-D8UWFeng.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4212/00b6ce190dda56b8db2904041ee5466d74f6be74/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
