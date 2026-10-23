import{j as n}from"./iframe-DKFdWtvL.js";import{B as e}from"./BasePdfViewer-DEO3w-bF.js";import"./preload-helper-CE0EJEax.js";import"./index-Zr7MzFSe.js";import"./BasePdfViewer.module.css-Ba5sA0A3.js";import"./PdfViewerAnnotationLayer-Bz7UUApU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKrPnQ0D.js";import"./PdfViewerOutlineSidebar-DQp-I0c1.js";import"./PdfViewerSidebarHeader-3h8sVQ0L.js";import"./useBaseUiId-wiNmPbxB.js";import"./useControlled-xNoP3k9v.js";import"./CompositeRoot-Dk2X-VSV.js";import"./CompositeItem-BafBUoyW.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./composite-Cu9id-g4.js";import"./svgIconContainer-mDDpTeTZ.js";import"./PdfViewerSearchBar-CCy5HAez.js";import"./chevron-up-BtJVnOvE.js";import"./chevron-down-BKXttnNC.js";import"./cross-DwMbeucq.js";import"./PdfViewerSidebar-L7hMeYWQ.js";import"./index-Esiyv4F3.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./PdfViewerToolbar-CgMc824X.js";import"./Button-DqI2Ud1s.js";import"./chevron-right-kDTYGnxO.js";import"./Input-veW-XqjJ.js";import"./search-DRLDRoqN.js";import"./spin-Dn-X5IP5.js";import"./error-D3OaIHY1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4228/bb22c5cc9de068388565d0cbbde394833af44d96/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
