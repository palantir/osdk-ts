import{j as n}from"./iframe-dvXPHGEz.js";import{B as e}from"./BasePdfViewer-E5sZG3Bp.js";import"./preload-helper-BmaGIWKK.js";import"./index-DyjG60lF.js";import"./BasePdfViewer.module.css-BCPQHMno.js";import"./PdfViewerAnnotationLayer-D-bL_x3w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vXrG0ZSF.js";import"./PdfViewerOutlineSidebar-I3Jf3gd7.js";import"./PdfViewerSidebarHeader-B5F084L_.js";import"./useBaseUiId-B5XDNhHC.js";import"./useControlled-C_6t7Yik.js";import"./CompositeRoot-iMymv8X-.js";import"./CompositeItem-BOkdWJ_P.js";import"./ToolbarRootContext-puVPhTN3.js";import"./composite-CadSmb_E.js";import"./svgIconContainer-Cks84kGC.js";import"./PdfViewerSearchBar-CvUfSeaP.js";import"./chevron-up-D3T5OG4U.js";import"./chevron-down-EmJ3ovaR.js";import"./cross-Z5DuI0bi.js";import"./PdfViewerSidebar-C0_Tgmo2.js";import"./index-C6zBVqUK.js";import"./index-DabbcYA7.js";import"./index-D0dNC_Uw.js";import"./PdfViewerToolbar-DiHXqjQ-.js";import"./Button-XhiN3AVX.js";import"./chevron-right-CiFIFHnW.js";import"./Input-CQg1dEqW.js";import"./search-DSXnECBw.js";import"./spin-aBV1eLXi.js";import"./error-CQ-TuYDa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/e687dae1046cc87332fb11d6f53421b898622211/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
