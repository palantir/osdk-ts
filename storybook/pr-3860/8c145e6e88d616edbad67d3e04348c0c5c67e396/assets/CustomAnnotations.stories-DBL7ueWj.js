import{j as n}from"./iframe-Dixwoq4L.js";import{B as e}from"./BasePdfViewer-Bdw6L9_e.js";import"./preload-helper-BsHp-RGP.js";import"./index-CcIVVuqf.js";import"./BasePdfViewer.module.css-5cyz-HKf.js";import"./PdfViewerAnnotationLayer-MSHVZGPc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C6wUl4RI.js";import"./PdfViewerOutlineSidebar-kSmpLh9k.js";import"./PdfViewerSidebarHeader-DQkDPppe.js";import"./useBaseUiId-DaT4VLXm.js";import"./useControlled-CJEoS3fz.js";import"./CompositeRoot-DV1d4smP.js";import"./CompositeItem-BVhXUg3I.js";import"./ToolbarRootContext-Dg49HtmA.js";import"./composite-BiAYM8pY.js";import"./svgIconContainer-CffeXbYk.js";import"./PdfViewerSearchBar-DcAve_DM.js";import"./chevron-up-CXGOAf4Z.js";import"./chevron-down-BK-6EzsA.js";import"./cross-D7TdtDyo.js";import"./PdfViewerSidebar--aGON1NR.js";import"./index-nO-PLXJg.js";import"./index-BX_I2TdV.js";import"./index-BXWUqN74.js";import"./PdfViewerToolbar-DW72E6YR.js";import"./Button-Dr6WGivc.js";import"./chevron-right-DR-B7vcY.js";import"./Input-gkS7bq_U.js";import"./search-DAIXcQnY.js";import"./spin-Dsm3wvLr.js";import"./error-CqJY6TRA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3860/8c145e6e88d616edbad67d3e04348c0c5c67e396/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
