import{j as n}from"./iframe-DbS9D_O3.js";import{B as e}from"./BasePdfViewer-DujHsMP9.js";import"./preload-helper-CCKJK0hs.js";import"./index-DtbYZf2o.js";import"./BasePdfViewer.module.css-Dp8m_Q-T.js";import"./PdfViewerAnnotationLayer-ChLUsakK.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cm5etKMO.js";import"./PdfViewerOutlineSidebar-Dl9mxVac.js";import"./PdfViewerSidebarHeader-C2HExgkf.js";import"./useBaseUiId-DGo7w5rM.js";import"./useControlled-BU_DIXGN.js";import"./CompositeRoot-BX4IXpi5.js";import"./CompositeItem-CBVEdJrU.js";import"./ToolbarRootContext-DAT__9MO.js";import"./composite-BVFSknHB.js";import"./svgIconContainer-BWtkfvw7.js";import"./PdfViewerSearchBar-BlOdGdD_.js";import"./chevron-up-Dgd7h0T-.js";import"./chevron-down-CRHApYO-.js";import"./cross-D8Acxe7x.js";import"./PdfViewerSidebar-BJn-93Sk.js";import"./index-Cn4ErW0D.js";import"./index-DjECoGdr.js";import"./index-Cz6dsjwa.js";import"./PdfViewerToolbar-BWGRUAHb.js";import"./Button-CgXhCctb.js";import"./chevron-right-nogJPmOp.js";import"./Input-BjkhNLJi.js";import"./search-O2b5hRrN.js";import"./spin-BzeJqwXZ.js";import"./error-RW3dtBbn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/c46b6e1481100ef60a4c8df7e30cb26fd9a88417/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
