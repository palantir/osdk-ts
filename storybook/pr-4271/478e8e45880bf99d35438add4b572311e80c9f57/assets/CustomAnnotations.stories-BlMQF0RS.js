import{j as n}from"./iframe-CDXR5TiH.js";import{B as e}from"./BasePdfViewer-ER94IrO8.js";import"./preload-helper-Dl7TLzKT.js";import"./index-BUlTo8si.js";import"./BasePdfViewer.module.css-Bh9yIBpF.js";import"./PdfViewerAnnotationLayer-Cf7CjYSr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-dz3gCp10.js";import"./PdfViewerOutlineSidebar-A56K3uUc.js";import"./PdfViewerSidebarHeader-CevFyXkR.js";import"./useBaseUiId-DQwBq2Ep.js";import"./useControlled-D1Q05_VM.js";import"./CompositeRoot-TCN9vz98.js";import"./CompositeItem-BwsWbkWf.js";import"./ToolbarRootContext-DIR8ob_8.js";import"./composite-DrLkfYl3.js";import"./svgIconContainer-DvE8o4ZI.js";import"./PdfViewerSearchBar-Bab0m2ob.js";import"./chevron-up-D72_TCvN.js";import"./chevron-down-D5h4llJH.js";import"./cross-BNFw8vL_.js";import"./PdfViewerSidebar-BT0diqwo.js";import"./index-a1CxhX_F.js";import"./index-DyQAqcSx.js";import"./index-DgZ9bURa.js";import"./PdfViewerToolbar-4oDVer0T.js";import"./Button-BX5bEl7N.js";import"./chevron-right-yeWuda1b.js";import"./Input-CpjIkFYJ.js";import"./search-B19UftdY.js";import"./spin-DwEabI-a.js";import"./error-DB4Z3Bk1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4271/478e8e45880bf99d35438add4b572311e80c9f57/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
