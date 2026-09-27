import{j as n}from"./iframe-Ced8wIim.js";import{B as e}from"./BasePdfViewer-BOAQlTLT.js";import"./preload-helper-BvnlfMzD.js";import"./index-DwlP8Kq2.js";import"./BasePdfViewer.module.css-DBnZpTfa.js";import"./PdfViewerAnnotationLayer-CcnZ65-H.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zRNimOSa.js";import"./PdfViewerOutlineSidebar-C9zWW-Xm.js";import"./PdfViewerSidebarHeader-Cp_zwPgl.js";import"./useBaseUiId-ZzsV-V0Z.js";import"./useControlled-Bx5lxC0c.js";import"./CompositeRoot-C04S684x.js";import"./CompositeItem-CKE15s8h.js";import"./ToolbarRootContext-BjCMra_B.js";import"./composite-gyhDmABu.js";import"./svgIconContainer-_H4YWiIz.js";import"./PdfViewerSearchBar-CSTRmbWZ.js";import"./chevron-up-Gx5vPmev.js";import"./chevron-down-DpwNucWD.js";import"./cross-C1ezeDDh.js";import"./PdfViewerSidebar-BSQon-gg.js";import"./index-mKFRvtOv.js";import"./index-LDJzIvQD.js";import"./index-Cm78izMo.js";import"./PdfViewerToolbar-Cd1RkxOo.js";import"./Button-D2RSl0IU.js";import"./chevron-right-C3aGEb_f.js";import"./Input-KnIMm_iE.js";import"./search-QSUOXDqi.js";import"./spin-DQxC9wyx.js";import"./error-yQjggD5T.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1924/002b4741698003b82b0b78eb876ceea7fe5ae379/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
