import{j as n}from"./iframe-DX49BiZ-.js";import{B as e}from"./BasePdfViewer-B8ADU6BQ.js";import"./preload-helper-9LHBCYVI.js";import"./index-DxuHGCjB.js";import"./BasePdfViewer.module.css-BH-6VxB4.js";import"./PdfViewerAnnotationLayer-DoL29gub.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Oj9--JDb.js";import"./PdfViewerOutlineSidebar-CWS2VMR7.js";import"./PdfViewerSidebarHeader-DhQXWIcS.js";import"./useBaseUiId-DI7HJ1sZ.js";import"./useControlled-C31TKFPE.js";import"./CompositeRoot-C4mjLNI7.js";import"./CompositeItem-1DFf-U3D.js";import"./ToolbarRootContext-BkXM-WhV.js";import"./composite-BTvCmLum.js";import"./svgIconContainer-B548BSI_.js";import"./PdfViewerSearchBar-DQYi6VPo.js";import"./chevron-up-DAVFCRMo.js";import"./chevron-down-CPeorV8q.js";import"./cross-CauetHLv.js";import"./PdfViewerSidebar-D81TupZT.js";import"./index-DxqztkoM.js";import"./index-Ygr_7AWn.js";import"./index-C4WszJy1.js";import"./PdfViewerToolbar-DM3Jlbyq.js";import"./Button-RYY6ZBF7.js";import"./chevron-right-DpXTTHXi.js";import"./Input-BQDPJQM6.js";import"./search-D15_q6tD.js";import"./spin-D8AyJJ9U.js";import"./error-DKDHu63B.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4165/3b77ba0a0b62d188dff7cf226a9735a67e2d30ab/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
