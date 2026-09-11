import{j as n}from"./iframe-CuKia_EN.js";import{B as e}from"./BasePdfViewer-D9qw3V9N.js";import"./preload-helper-DZuarx_D.js";import"./index-CVRiO_BO.js";import"./BasePdfViewer.module.css-CQfrwRm0.js";import"./PdfViewerAnnotationLayer-f8dNIzKp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LK0ZHTRJ.js";import"./PdfViewerOutlineSidebar-Bl-_MAXQ.js";import"./PdfViewerSidebarHeader-D-3XDznV.js";import"./useBaseUiId-C8uIC3Bm.js";import"./useControlled-UwQVkGem.js";import"./CompositeRoot-LXs6UxVj.js";import"./CompositeItem-CJjI731A.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./composite-Cpd5KJD8.js";import"./svgIconContainer-6Becg_K2.js";import"./PdfViewerSearchBar-DdZQI3ZP.js";import"./chevron-up-3T6V1inz.js";import"./chevron-down-DJVJwxKZ.js";import"./cross-X509BjS9.js";import"./PdfViewerSidebar-BIbe-mEz.js";import"./index-BcyKe8qn.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./PdfViewerToolbar-3EX5vcQ5.js";import"./Button-CVMu9YDi.js";import"./chevron-right-SeOAzUfA.js";import"./Input-BIdaiZoI.js";import"./search-Bab6PZbG.js";import"./spin-BxfFWaug.js";import"./error-C19RYWaj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/a162891345282512dd65f4bc7e592db800a9d5fd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
