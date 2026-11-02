import{j as n}from"./iframe-DM1KpbCL.js";import{B as e}from"./BasePdfViewer-D0NB-n9h.js";import"./preload-helper-B5lE_CeJ.js";import"./index-CcTzWx10.js";import"./BasePdfViewer.module.css-BMAndMl6.js";import"./PdfViewerAnnotationLayer-ClC3ukgT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu1UHlw9.js";import"./PdfViewerOutlineSidebar-Fc8rr4_t.js";import"./PdfViewerSidebarHeader-DCGekNek.js";import"./useBaseUiId-BS0ydcCd.js";import"./useControlled-BpM5Znsw.js";import"./CompositeRoot-C-13SY6Q.js";import"./CompositeItem-DEphRU8b.js";import"./ToolbarRootContext-kXKFrX_U.js";import"./composite-UHbWR1-V.js";import"./svgIconContainer-D9_cFA2L.js";import"./PdfViewerSearchBar-D62Ufm2H.js";import"./chevron-up-CL4mdyy-.js";import"./chevron-down-B55CqhSV.js";import"./cross-CnFtk43X.js";import"./PdfViewerSidebar-DAezMjVZ.js";import"./index-BzYLadhD.js";import"./index-kvb1enIs.js";import"./index-Zf2bdMMR.js";import"./PdfViewerToolbar-0iIXkt3L.js";import"./Button-DbYUMIvf.js";import"./chevron-right-BYbHC32b.js";import"./Input-rJPz8yLN.js";import"./search-CDaKZsSd.js";import"./spin-BiemMRCk.js";import"./error-BpWcPv0-.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4312/9346e79c9d208ec22ce5f5153a464c193ca2e492/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
