import{j as n}from"./iframe-D3l12Tr-.js";import{B as e}from"./BasePdfViewer-B_mmU8a0.js";import"./preload-helper-PcHol1Ue.js";import"./index-BPiZlFJR.js";import"./BasePdfViewer.module.css-DW5kn4Bx.js";import"./PdfViewerAnnotationLayer-yLOwXfaX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DniL4qo-.js";import"./PdfViewerOutlineSidebar-D0GRTpa0.js";import"./PdfViewerSidebarHeader-Fgeaij5q.js";import"./useBaseUiId-BNJrpCWm.js";import"./useControlled-DWcGrjw6.js";import"./CompositeRoot-Bpga13dn.js";import"./CompositeItem-BQJ1FDQm.js";import"./ToolbarRootContext-DbokOTWe.js";import"./composite-CuNBJcuu.js";import"./svgIconContainer-CrW6rOVr.js";import"./PdfViewerSearchBar-tyB5gES2.js";import"./chevron-up-i5kv5uz7.js";import"./chevron-down-C6Fq88S4.js";import"./cross-C3J0WO3R.js";import"./PdfViewerSidebar-DG-SeE_n.js";import"./index-ChSzKfO9.js";import"./index-3OzYw8WP.js";import"./index-D9TP-Dik.js";import"./PdfViewerToolbar-CQbI3bQO.js";import"./Button-DSLUEzYm.js";import"./chevron-right-DT_87kdi.js";import"./Input-BOpnVUAt.js";import"./search-CdpCaKTD.js";import"./spin-BtD-p2h1.js";import"./error-CKivbg2c.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3974/e3619f36dec521bab96b68d854bd65ab7bd3a5fe/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
