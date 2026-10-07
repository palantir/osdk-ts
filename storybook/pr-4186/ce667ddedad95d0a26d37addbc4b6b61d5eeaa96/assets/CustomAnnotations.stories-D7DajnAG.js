import{j as n}from"./iframe-wJSBANRY.js";import{B as e}from"./BasePdfViewer-Djc9GXH2.js";import"./preload-helper-B2Ho1hLQ.js";import"./index-BcqSzCju.js";import"./BasePdfViewer.module.css-DE6vlAlR.js";import"./PdfViewerAnnotationLayer-BVaC8jz1.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BLCrAg9l.js";import"./PdfViewerOutlineSidebar-BK9bxVXF.js";import"./PdfViewerSidebarHeader-BUITwH-i.js";import"./useBaseUiId-DWH3HBR0.js";import"./useControlled-BvO6L4jZ.js";import"./CompositeRoot-rXaR9oy9.js";import"./CompositeItem-CMcnLQ_L.js";import"./ToolbarRootContext-ChwiRPwn.js";import"./composite-CrDIQ1mA.js";import"./svgIconContainer-Ci6LfE3v.js";import"./PdfViewerSearchBar-Ccy8QZ9N.js";import"./chevron-up-CVRaGDQV.js";import"./chevron-down-Cwjazhdf.js";import"./cross-iKlVZHPy.js";import"./PdfViewerSidebar-BXHJkCOE.js";import"./index-pP0t4O08.js";import"./index-v1Sv6Skf.js";import"./index-BVhp-lLY.js";import"./PdfViewerToolbar-DtrxVpau.js";import"./Button-Bs-O5zId.js";import"./chevron-right-CDINXQnR.js";import"./Input-Cn5YrDjO.js";import"./search-D4rdWSgZ.js";import"./spin-nDHlaISv.js";import"./error-ByPPsGV9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4186/ce667ddedad95d0a26d37addbc4b6b61d5eeaa96/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
