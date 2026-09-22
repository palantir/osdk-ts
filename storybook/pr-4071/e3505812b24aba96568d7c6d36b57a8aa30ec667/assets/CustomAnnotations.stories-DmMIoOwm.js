import{j as n}from"./iframe-bnALbjvc.js";import{B as e}from"./BasePdfViewer-D_eaTmeS.js";import"./preload-helper-C8kaRY2F.js";import"./index-CaRZXRvk.js";import"./BasePdfViewer.module.css-BDTZQWoW.js";import"./PdfViewerAnnotationLayer-UeJPA-xE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkOQ9aRy.js";import"./PdfViewerOutlineSidebar-Y1II3ol-.js";import"./PdfViewerSidebarHeader-BDatTLE6.js";import"./useBaseUiId-BxyyYmda.js";import"./useControlled-3Q0JUJSo.js";import"./CompositeRoot-D_OKtw7H.js";import"./CompositeItem-DQIpyI6o.js";import"./ToolbarRootContext-mleznJTR.js";import"./composite-BdnAwbZ3.js";import"./svgIconContainer-C-SVSCUi.js";import"./PdfViewerSearchBar-CS5q7c-F.js";import"./chevron-up-hf8umDq6.js";import"./chevron-down-CZKe5U1j.js";import"./cross-CGbNp8lf.js";import"./PdfViewerSidebar-DCJTpm96.js";import"./index-DB9OublQ.js";import"./index-C3s-D08F.js";import"./index-D8ht-iMr.js";import"./PdfViewerToolbar-D7yrqqa8.js";import"./Button-pyIzwVHB.js";import"./chevron-right-DTycRZ7l.js";import"./Input-sTQZo4x7.js";import"./search-L4rGQlW3.js";import"./spin-Dvaem_T0.js";import"./error-CRPXFfUM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4071/e3505812b24aba96568d7c6d36b57a8aa30ec667/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
