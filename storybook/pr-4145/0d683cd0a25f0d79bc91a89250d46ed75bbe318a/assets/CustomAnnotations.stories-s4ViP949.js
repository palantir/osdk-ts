import{j as n}from"./iframe-D4DE_xCy.js";import{B as e}from"./BasePdfViewer-DSwY7YBJ.js";import"./preload-helper-B6-3aPT9.js";import"./index-D326T4JO.js";import"./BasePdfViewer.module.css-DnOfEaxs.js";import"./PdfViewerAnnotationLayer-CFZumqry.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DjHgA49v.js";import"./PdfViewerOutlineSidebar-BLozL9g6.js";import"./PdfViewerSidebarHeader-hj8KH9ri.js";import"./useBaseUiId-BXESL0ei.js";import"./useControlled-C35ONjfY.js";import"./CompositeRoot-R3vCpSS2.js";import"./CompositeItem-Dl-hENiN.js";import"./ToolbarRootContext-DpJnwIQq.js";import"./composite-Dnv2BJfH.js";import"./svgIconContainer-jzN4JDBP.js";import"./PdfViewerSearchBar-CRFzK3yW.js";import"./chevron-up-BjG9V2Qh.js";import"./chevron-down-9HoUrmLz.js";import"./cross-DXk5c3Hx.js";import"./PdfViewerSidebar-nlfeWmUK.js";import"./index-CVC749TS.js";import"./index-DjBeJPFN.js";import"./index-DpB5XU9M.js";import"./PdfViewerToolbar-ByKaGsmm.js";import"./Button-ByxF5usp.js";import"./chevron-right-Clo1IcQf.js";import"./Input-BdkDXHFP.js";import"./search-DMWfSMTs.js";import"./spin-CINaep8X.js";import"./error-BbjQgfT9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4145/0d683cd0a25f0d79bc91a89250d46ed75bbe318a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
