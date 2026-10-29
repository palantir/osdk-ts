import{j as n}from"./iframe-DrkKxiw5.js";import{B as e}from"./BasePdfViewer-vVYzB7jr.js";import"./preload-helper-CoexQg1D.js";import"./index-9bu5FaWD.js";import"./BasePdfViewer.module.css-Cb_Ksmd0.js";import"./PdfViewerAnnotationLayer-BXY-zCjc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxTxP1i2.js";import"./PdfViewerOutlineSidebar-DjZncpSZ.js";import"./PdfViewerSidebarHeader-CqAdC9vJ.js";import"./useBaseUiId-NPWMEoN9.js";import"./useControlled-BCrFB87J.js";import"./CompositeRoot-WPBDk70c.js";import"./CompositeItem-C5ekTE5F.js";import"./ToolbarRootContext-C8q64USb.js";import"./composite-BHNDyYYF.js";import"./svgIconContainer-BwjWYJj_.js";import"./PdfViewerSearchBar-BmWO7NoW.js";import"./chevron-up-SZpzcDbD.js";import"./chevron-down-DsVdM_C_.js";import"./cross-CNIYbi9C.js";import"./PdfViewerSidebar-Cyq_bW3E.js";import"./index-0ErCHoJl.js";import"./index-BR2AMsRx.js";import"./index-YiUJ_53T.js";import"./PdfViewerToolbar-PW6aaF6q.js";import"./Button-CF-FMXcU.js";import"./chevron-right-BFV2pmzU.js";import"./Input-DOgtVus-.js";import"./search-D4-R-e8V.js";import"./spin-BgqxAXZw.js";import"./error-C2HVZj6I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4289/573a8c733699778f96cc7784afd4228ba1f9f6c1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
