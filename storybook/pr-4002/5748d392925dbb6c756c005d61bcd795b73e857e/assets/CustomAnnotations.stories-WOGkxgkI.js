import{j as n}from"./iframe-DrGL59fh.js";import{B as e}from"./BasePdfViewer-BMcx4N0B.js";import"./preload-helper-D-pltsU0.js";import"./index-BPJV00wo.js";import"./BasePdfViewer.module.css-DVtRATGJ.js";import"./PdfViewerAnnotationLayer-wwzfw9ps.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ck6K8h-D.js";import"./PdfViewerOutlineSidebar-C4U2xv1I.js";import"./PdfViewerSidebarHeader-DChQ96aj.js";import"./useBaseUiId-2W_ytHMV.js";import"./useControlled-D76B4nnK.js";import"./CompositeRoot-W6WIkq0A.js";import"./CompositeItem-BckOB5Eo.js";import"./ToolbarRootContext-C91J_2EK.js";import"./composite-VGQUbzTm.js";import"./svgIconContainer-CHeYR8wC.js";import"./PdfViewerSearchBar-CN7sibF-.js";import"./chevron-up-BX80xQ_d.js";import"./chevron-down-DCzbMy7Q.js";import"./cross-B3fC_apP.js";import"./PdfViewerSidebar-B3n6Su6A.js";import"./index-Bzlu61KO.js";import"./index-CAwEJolB.js";import"./index-cKTu6glV.js";import"./PdfViewerToolbar-B6HjqPlb.js";import"./Button-Dz98rt32.js";import"./chevron-right-CZAqLWtc.js";import"./Input-GRmoIvE6.js";import"./search-D_KAjQsE.js";import"./spin-DxHZ0qnZ.js";import"./error-B4r2g8yv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4002/5748d392925dbb6c756c005d61bcd795b73e857e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
