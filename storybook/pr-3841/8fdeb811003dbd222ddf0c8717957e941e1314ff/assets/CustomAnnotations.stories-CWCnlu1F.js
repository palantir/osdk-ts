import{j as n}from"./iframe-DmKkedGZ.js";import{B as e}from"./BasePdfViewer-DhJVIAyH.js";import"./preload-helper-V3mfUD4w.js";import"./index-5w_QhudL.js";import"./BasePdfViewer.module.css-B8P3IrSy.js";import"./PdfViewerAnnotationLayer-C5VJL7BF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CC6q0V1i.js";import"./PdfViewerOutlineSidebar-BR7i474Y.js";import"./PdfViewerSidebarHeader-BsxD-fZq.js";import"./useBaseUiId-DNfqz0_E.js";import"./useControlled-DU4z2hem.js";import"./CompositeRoot-C86n7YeI.js";import"./CompositeItem-D1JLw8xz.js";import"./ToolbarRootContext-DEQXnygN.js";import"./composite-COYZrTxF.js";import"./svgIconContainer-DvNCuvEs.js";import"./PdfViewerSearchBar-BOtbysTc.js";import"./chevron-up-aDYxr8z-.js";import"./chevron-down-BfRThbY_.js";import"./cross-CpmvhUuW.js";import"./PdfViewerSidebar-Bqsj6_mJ.js";import"./index-C25z4X6E.js";import"./index-CPiWOVlX.js";import"./index-CNJ8NeHE.js";import"./PdfViewerToolbar-Bl-GpDt-.js";import"./Button-D6JtrfeD.js";import"./chevron-right-DUOJ1SgU.js";import"./Input-jwVhWV6R.js";import"./search-xXbvdTMv.js";import"./spin-CA8RB8pp.js";import"./error-ByC5dNyY.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/8fdeb811003dbd222ddf0c8717957e941e1314ff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
