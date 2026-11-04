import{j as n}from"./iframe-DhySATRv.js";import{B as e}from"./BasePdfViewer-DDzfKFaR.js";import"./preload-helper-QnXVdlsZ.js";import"./index-By0zFJXy.js";import"./BasePdfViewer.module.css-CTXQMSzj.js";import"./PdfViewerAnnotationLayer-_j0L47Mj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-SZD9-d90.js";import"./PdfViewerOutlineSidebar-BP5SQtKK.js";import"./PdfViewerSidebarHeader-0N273MoM.js";import"./useBaseUiId-CczNNmwY.js";import"./useControlled-C3JFQqTN.js";import"./CompositeRoot-D_X3yfRq.js";import"./CompositeItem-CfgwqBcM.js";import"./ToolbarRootContext-COgLrlEX.js";import"./composite-B7Q8k8Y1.js";import"./svgIconContainer-DPn7rviW.js";import"./PdfViewerSearchBar-0vBD-JWI.js";import"./chevron-up-Duf7h6j4.js";import"./chevron-down-dCWUIGnY.js";import"./cross-dxd-Id56.js";import"./PdfViewerSidebar-CTKxmEbc.js";import"./index-C3T_yKoM.js";import"./index-B5HI7DFW.js";import"./index-HQYJE3H_.js";import"./PdfViewerToolbar-QDeHzJFU.js";import"./Button-BnJ18iND.js";import"./chevron-right-jp5WQsbF.js";import"./Input-BQwljXsc.js";import"./search-3iLspLPL.js";import"./spin-BXZaRecx.js";import"./error-DzMg1FzE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4328/0acc3b4374a7885298c2212ab5f2ad6ea2e18df5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
