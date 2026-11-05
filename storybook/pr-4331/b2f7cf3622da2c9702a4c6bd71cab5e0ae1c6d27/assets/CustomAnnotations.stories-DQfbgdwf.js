import{j as n}from"./iframe-Cvj3FNL2.js";import{B as e}from"./BasePdfViewer-Fpan8DWy.js";import"./preload-helper-CetzPUwQ.js";import"./index-DH-N1YV0.js";import"./BasePdfViewer.module.css-Xon6BHZA.js";import"./PdfViewerAnnotationLayer-KWL4tM4m.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJnLFSTe.js";import"./PdfViewerOutlineSidebar-D_HgRVC1.js";import"./PdfViewerSidebarHeader-4oRRJPEc.js";import"./useBaseUiId-D4o_acv_.js";import"./useControlled-0y2fy9QQ.js";import"./CompositeRoot-waF50HIr.js";import"./CompositeItem-BgbI3PXY.js";import"./ToolbarRootContext-C86500_m.js";import"./composite-BeeOPu6q.js";import"./svgIconContainer-2e47raBd.js";import"./PdfViewerSearchBar-Db6ioyPM.js";import"./chevron-up-DvCDTiVR.js";import"./chevron-down-BLip4j8E.js";import"./cross-BgxfwZhF.js";import"./PdfViewerSidebar-WIRrXRRr.js";import"./index-BMbRZnNU.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./PdfViewerToolbar-CGjgmRvn.js";import"./Button-BZDb9IOS.js";import"./chevron-right-CcmHjkwT.js";import"./Input-RAe99RCN.js";import"./search-DUdBrB5_.js";import"./spin-CjpYsLN8.js";import"./error-QqbcWqTY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4331/b2f7cf3622da2c9702a4c6bd71cab5e0ae1c6d27/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
