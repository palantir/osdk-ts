import{j as n}from"./iframe-BH9-Vfs1.js";import{B as e}from"./BasePdfViewer-CsZ6vs9_.js";import"./preload-helper-CoJdsvxJ.js";import"./index-_6Q5jVBK.js";import"./BasePdfViewer.module.css-Jd_fAF6k.js";import"./PdfViewerAnnotationLayer-DDqATwU3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGsFA5PN.js";import"./PdfViewerOutlineSidebar-DOBN2kvH.js";import"./PdfViewerSidebarHeader-BOgbcUp1.js";import"./useBaseUiId-CdU1pKU6.js";import"./useControlled-UCeQQNPP.js";import"./CompositeRoot-C4LeCwy8.js";import"./CompositeItem-D5PXOQkD.js";import"./ToolbarRootContext-CbUVM7d6.js";import"./composite-aDEaeN1m.js";import"./svgIconContainer-BPyIUPO5.js";import"./PdfViewerSearchBar-waMSOGKb.js";import"./chevron-up-CyXdAHIW.js";import"./chevron-down-SngEWHwD.js";import"./cross-HuW5yWPa.js";import"./PdfViewerSidebar-Dal5OWNv.js";import"./index-CHoEIfe6.js";import"./index-CUm5VRBM.js";import"./index-iq-MawLa.js";import"./PdfViewerToolbar-Cep15Hdu.js";import"./Button-DJTiAyTL.js";import"./chevron-right-CY4GXW28.js";import"./Input-CYVECsi-.js";import"./search-CaTzsfhK.js";import"./spin-C3TZH1yr.js";import"./error-BMBrp2lF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/971807e89fcb1b24c36b7fc2eb499abc8fc785e3/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
