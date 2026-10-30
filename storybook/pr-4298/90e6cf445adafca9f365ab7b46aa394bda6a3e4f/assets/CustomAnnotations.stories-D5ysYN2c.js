import{j as n}from"./iframe-BUjiwBf5.js";import{B as e}from"./BasePdfViewer-6a0BPDGD.js";import"./preload-helper-B6c2vp8P.js";import"./index-CKk_335J.js";import"./BasePdfViewer.module.css-C4apA35M.js";import"./PdfViewerAnnotationLayer-BJtFxwZN.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BoCMgVOz.js";import"./PdfViewerOutlineSidebar-C7tuHDJ_.js";import"./PdfViewerSidebarHeader-BrB5eIwd.js";import"./useBaseUiId-C7GiG9Zo.js";import"./useControlled-u72cUfPk.js";import"./CompositeRoot-BvAusmZw.js";import"./CompositeItem-BuyG-Xnd.js";import"./ToolbarRootContext-Bw5pjQww.js";import"./composite-DKWT5B2T.js";import"./svgIconContainer-B-5qucwe.js";import"./PdfViewerSearchBar-DSZgEa_g.js";import"./chevron-up-BIMbkWFm.js";import"./chevron-down-BxUE_6XI.js";import"./cross-DMwbX_xt.js";import"./PdfViewerSidebar-BHdC9KLA.js";import"./index-Bh90kKL7.js";import"./index-DQS8f553.js";import"./index-BXREvfES.js";import"./PdfViewerToolbar-uBbi04CF.js";import"./Button-DdiFhH1O.js";import"./chevron-right-BCH_Xwa6.js";import"./Input-DrlS66iR.js";import"./search-DWZ7jrir.js";import"./spin-CdKG7PDy.js";import"./error-Dm0kzNQU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4298/90e6cf445adafca9f365ab7b46aa394bda6a3e4f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
