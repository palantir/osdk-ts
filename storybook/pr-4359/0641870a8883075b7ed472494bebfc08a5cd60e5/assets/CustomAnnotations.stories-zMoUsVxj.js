import{j as n}from"./iframe-BZzSz7BH.js";import{B as e}from"./BasePdfViewer-Bas0EbJT.js";import"./preload-helper-CNCm3N6L.js";import"./index-B0_2NaMN.js";import"./BasePdfViewer.module.css-2hZHI_wu.js";import"./PdfViewerAnnotationLayer-BywAbGjm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Clv_60Y8.js";import"./PdfViewerOutlineSidebar-CR7bWkpO.js";import"./PdfViewerSidebarHeader-DPhDZZLE.js";import"./useBaseUiId-DkyKYNDq.js";import"./useControlled-DTdqQX0O.js";import"./CompositeRoot-96hpSuFG.js";import"./CompositeItem-B-WQrem9.js";import"./ToolbarRootContext-BbBpvcok.js";import"./composite-BTQMDNX2.js";import"./svgIconContainer-Dhl9__RH.js";import"./PdfViewerSearchBar-BIclPpET.js";import"./chevron-up-Bjrspjdo.js";import"./chevron-down-BtcR6Z3d.js";import"./cross-DZZxBCNz.js";import"./PdfViewerSidebar-DzIcbUWN.js";import"./index-CKPZYnP1.js";import"./index-BRGRaTrf.js";import"./index-CuHAqEhQ.js";import"./PdfViewerToolbar-CGyDFNj1.js";import"./Button-DjbJHqTl.js";import"./chevron-right-l1XoDR9M.js";import"./Input-D_wnf1zt.js";import"./search-Bp2lXg3F.js";import"./spin-C9zRgI05.js";import"./error-CUMr5i6e.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4359/0641870a8883075b7ed472494bebfc08a5cd60e5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
