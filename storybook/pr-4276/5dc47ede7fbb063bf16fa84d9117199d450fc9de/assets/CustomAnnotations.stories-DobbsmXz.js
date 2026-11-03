import{j as n}from"./iframe-BPsV-cND.js";import{B as e}from"./BasePdfViewer-D_5IyGkn.js";import"./preload-helper-B1nX7WCL.js";import"./index-npdz9ccL.js";import"./BasePdfViewer.module.css-C52ffXZK.js";import"./PdfViewerAnnotationLayer-Bmnwg3Ld.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRJwJcPI.js";import"./PdfViewerOutlineSidebar-CWUZ2TSg.js";import"./PdfViewerSidebarHeader-DW06ndzP.js";import"./useBaseUiId-CFNxIaBI.js";import"./useControlled-DoUE8kJv.js";import"./CompositeRoot-DJK5ItIQ.js";import"./CompositeItem-HwzticEg.js";import"./ToolbarRootContext-B-c1meOe.js";import"./composite-Cd7xAWbk.js";import"./svgIconContainer-CZZJ1Sam.js";import"./PdfViewerSearchBar-C8Vbmfq3.js";import"./chevron-up-CZhrZea4.js";import"./chevron-down-C-mS6li4.js";import"./cross-e0Z9OM7S.js";import"./PdfViewerSidebar-BqAJxGeh.js";import"./index-arYZ6QX0.js";import"./index-g7oHnE4A.js";import"./index-DLTSwoUf.js";import"./PdfViewerToolbar-a24Xs5M8.js";import"./Button-DLrft56q.js";import"./chevron-right-BhS6BaSh.js";import"./Input-BkWiOI8x.js";import"./search-hkaYb7x5.js";import"./spin-OzBfjH6j.js";import"./error-Cql48BE9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4276/5dc47ede7fbb063bf16fa84d9117199d450fc9de/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
