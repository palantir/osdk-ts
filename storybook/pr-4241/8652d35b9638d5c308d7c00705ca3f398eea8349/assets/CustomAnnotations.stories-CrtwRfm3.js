import{j as n}from"./iframe-q7KMYOTO.js";import{B as e}from"./BasePdfViewer-Cl5a6IN3.js";import"./preload-helper-6z_lVhDZ.js";import"./index-Bu4qz67A.js";import"./BasePdfViewer.module.css-D2r9Q17J.js";import"./PdfViewerAnnotationLayer-DkRfUq6F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bq6S8E8-.js";import"./PdfViewerOutlineSidebar-C0qfhKsb.js";import"./PdfViewerSidebarHeader-CeFJw6yN.js";import"./useBaseUiId-CDKYXFfl.js";import"./useControlled-wetohDUI.js";import"./CompositeRoot-CHZbYlDd.js";import"./CompositeItem-p-JPFChH.js";import"./ToolbarRootContext-Bn2kB8OQ.js";import"./composite-msqnCEF7.js";import"./svgIconContainer-Lo22dyXX.js";import"./PdfViewerSearchBar-BNqo4Goh.js";import"./chevron-up-gZ1gDCJg.js";import"./chevron-down-CBifMXCi.js";import"./cross-GKTMVUJ_.js";import"./PdfViewerSidebar-Cx22mLot.js";import"./index-CPlC8aoM.js";import"./index-CbNuHbfY.js";import"./index-B07PL0k3.js";import"./PdfViewerToolbar-DLx6TCS7.js";import"./Button-4IQspW2w.js";import"./chevron-right-9dhwL3zc.js";import"./Input-DS3b7656.js";import"./search-BHHQGkAK.js";import"./spin-ByQD6nfF.js";import"./error-BS4T7RXs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/8652d35b9638d5c308d7c00705ca3f398eea8349/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
