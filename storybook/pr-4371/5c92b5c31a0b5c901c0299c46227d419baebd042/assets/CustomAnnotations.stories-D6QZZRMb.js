import{j as n}from"./iframe-BTjo4hoa.js";import{B as e}from"./BasePdfViewer-CKZxxxIR.js";import"./preload-helper-GDbQ32hR.js";import"./index-DzoGtTYW.js";import"./BasePdfViewer.module.css-RtbjwyYL.js";import"./PdfViewerAnnotationLayer-ctTTp3rY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FJPijIwR.js";import"./PdfViewerOutlineSidebar-WBEV-s-P.js";import"./PdfViewerSidebarHeader-BjuU4x5j.js";import"./useBaseUiId-DiKKztfj.js";import"./useControlled-DrQ-vlJr.js";import"./CompositeRoot-CKEaTo9L.js";import"./CompositeItem-DqO_c0k8.js";import"./ToolbarRootContext-BmwV-jMO.js";import"./composite-DnWT1pj_.js";import"./svgIconContainer-Ci_Sec47.js";import"./PdfViewerSearchBar-BLaVTkeN.js";import"./chevron-up-B3FYNOj0.js";import"./chevron-down-Ca_e0izc.js";import"./cross-C7uzIn7X.js";import"./PdfViewerSidebar-CPvH3EcB.js";import"./index-Dnr1AQ4b.js";import"./index-DzKvpZVF.js";import"./index-B2_XxYKv.js";import"./PdfViewerToolbar-DrVdNHEv.js";import"./Button-BcNFr6aW.js";import"./chevron-right-B5DLyBjh.js";import"./Input-C7imWp_z.js";import"./search-CK191Oob.js";import"./spin-B2gFy7N6.js";import"./error-D2oiLEA6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4371/5c92b5c31a0b5c901c0299c46227d419baebd042/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
