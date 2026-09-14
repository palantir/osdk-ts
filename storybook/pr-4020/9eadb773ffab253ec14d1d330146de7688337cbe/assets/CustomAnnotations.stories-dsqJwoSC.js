import{j as n}from"./iframe-DwHN39Jj.js";import{B as e}from"./BasePdfViewer-BMcxnVG_.js";import"./preload-helper-TQIKMTBe.js";import"./index-Bnvv13O1.js";import"./BasePdfViewer.module.css-BC1cZJi1.js";import"./PdfViewerAnnotationLayer-CWLDw_Ii.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-uINbtnDe.js";import"./PdfViewerOutlineSidebar-DCJ76F1D.js";import"./PdfViewerSidebarHeader-C8CBAWnn.js";import"./useBaseUiId-BuiLz8Kz.js";import"./useControlled-B5wlEGdC.js";import"./CompositeRoot-DC5DveBS.js";import"./CompositeItem-BQu1HqMn.js";import"./ToolbarRootContext-C0072MJ6.js";import"./composite-BHUO4-On.js";import"./svgIconContainer-D3xSNEvE.js";import"./PdfViewerSearchBar-CdkO_AM1.js";import"./chevron-up-CgMDDgxn.js";import"./chevron-down-DzHcaasw.js";import"./cross-DiSoPuVQ.js";import"./PdfViewerSidebar-BfHPiqF-.js";import"./index-st8A3vYR.js";import"./index-yATLLLgy.js";import"./index-DdofC8Tl.js";import"./PdfViewerToolbar-BIg6YPpr.js";import"./Button-BYP0P9Ib.js";import"./chevron-right-CR7RpRQ6.js";import"./Input-C40ac1xS.js";import"./search-60c5efTm.js";import"./spin-vycS3R7z.js";import"./error-B0Y2Fvc9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4020/9eadb773ffab253ec14d1d330146de7688337cbe/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
