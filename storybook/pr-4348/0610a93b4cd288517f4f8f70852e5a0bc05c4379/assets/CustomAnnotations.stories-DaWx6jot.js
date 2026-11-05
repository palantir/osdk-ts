import{j as n}from"./iframe-x4Y4VSHV.js";import{B as e}from"./BasePdfViewer-BQMYbEsa.js";import"./preload-helper-wFwf1Z_7.js";import"./index-BTkF7OpO.js";import"./BasePdfViewer.module.css-DxiwzFL4.js";import"./PdfViewerAnnotationLayer-BgECdyYH.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BNJLnFAJ.js";import"./PdfViewerOutlineSidebar-BaNa1BpL.js";import"./PdfViewerSidebarHeader-BttOmLcX.js";import"./useBaseUiId-O7ZsVKwo.js";import"./useControlled-B1vBMtLm.js";import"./CompositeRoot-DiSTgR-J.js";import"./CompositeItem-gQ_2jip-.js";import"./ToolbarRootContext-BTpSmFWY.js";import"./composite-HDXk98Mo.js";import"./svgIconContainer-BRq3fj7v.js";import"./PdfViewerSearchBar-BdUbboAC.js";import"./chevron-up-GROq8lE_.js";import"./chevron-down-DIIH-694.js";import"./cross-34rpmbRR.js";import"./PdfViewerSidebar-B0KI_lHV.js";import"./index-B9Z4kBgT.js";import"./index-BcBc9KVj.js";import"./index-B3Hd8yqN.js";import"./PdfViewerToolbar-CVusryac.js";import"./Button-D6WWCBJV.js";import"./chevron-right-BhWo1d7p.js";import"./Input-RqZQ3gi6.js";import"./search-t_lGFyp_.js";import"./spin-CrotzoR_.js";import"./error-1h6EWorL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4348/0610a93b4cd288517f4f8f70852e5a0bc05c4379/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
