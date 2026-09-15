import{j as n}from"./iframe-BYyS3cG-.js";import{B as e}from"./BasePdfViewer-BUb6qwHb.js";import"./preload-helper-BXbEnpda.js";import"./index-BXxvc4Z_.js";import"./BasePdfViewer.module.css-DcgtTJDp.js";import"./PdfViewerAnnotationLayer-DgT1xAJZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9V-s3M-.js";import"./PdfViewerOutlineSidebar-DAKi1h0n.js";import"./PdfViewerSidebarHeader-B9KEq4mM.js";import"./useBaseUiId-CGKSvxjI.js";import"./useControlled-Br7xWf3M.js";import"./CompositeRoot-DaXVn6BX.js";import"./CompositeItem-GKFr0mZp.js";import"./ToolbarRootContext-dI5H3gst.js";import"./composite-ZjlJlMFO.js";import"./svgIconContainer-Dk59z4vq.js";import"./PdfViewerSearchBar-DHzq5G3d.js";import"./chevron-up-C5RiP6tL.js";import"./chevron-down-QowdN_dJ.js";import"./cross-K2cagqs8.js";import"./PdfViewerSidebar-DDK-lhs4.js";import"./index-Bi1g2iim.js";import"./index-D2gKK-6z.js";import"./index-DvCEvxA7.js";import"./PdfViewerToolbar-BiM-jxsD.js";import"./Button-DO8jDkqh.js";import"./chevron-right-CqdwaAjj.js";import"./Input-C27Z_igv.js";import"./search-Can7HIrw.js";import"./spin-DnlOYQYj.js";import"./error-BijATQGq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/cdb62c3be41a1f53d32db156e4abf777a3cfc752/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
