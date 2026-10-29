import{j as n}from"./iframe-C7u8teZW.js";import{B as e}from"./BasePdfViewer-2b9Y6bvr.js";import"./preload-helper-BksW-fLa.js";import"./index-BhN64Vkr.js";import"./BasePdfViewer.module.css-DkZXnc8z.js";import"./PdfViewerAnnotationLayer-DeQ3Y4uH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-E-zuQPVz.js";import"./PdfViewerOutlineSidebar-FGkoFk-1.js";import"./PdfViewerSidebarHeader-BvPpIaLH.js";import"./useBaseUiId-DhUQmONl.js";import"./useControlled-wz_zz6UQ.js";import"./CompositeRoot-ZD0MP6fn.js";import"./CompositeItem-DBCCEsi2.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./composite-zfEBFY2E.js";import"./svgIconContainer-BCJkHoyI.js";import"./PdfViewerSearchBar-CGU3pgw1.js";import"./chevron-up-DyfwyxfJ.js";import"./chevron-down-CkA7RfLP.js";import"./cross-DxUgqzoH.js";import"./PdfViewerSidebar-DwkayNds.js";import"./index-CWtS_zs6.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./PdfViewerToolbar-DNZR2MgQ.js";import"./Button-ItUG0RJE.js";import"./chevron-right-WhiiwNq6.js";import"./Input-CkX7hrVd.js";import"./search-D1b21RXS.js";import"./spin-DxgUC3KV.js";import"./error-CEH3koMg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4253/d1ee9c7fd37b6632757cac2684b13bd905c5554d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
