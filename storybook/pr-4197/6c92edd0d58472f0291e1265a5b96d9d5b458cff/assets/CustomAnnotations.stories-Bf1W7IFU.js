import{j as n}from"./iframe-DaG_CcyR.js";import{B as e}from"./BasePdfViewer-CWu-BhbV.js";import"./preload-helper-fLmgAqZC.js";import"./index-C2NmqeV8.js";import"./BasePdfViewer.module.css-BJA3GTO3.js";import"./PdfViewerAnnotationLayer-1svw8IOp.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CTaywWS8.js";import"./PdfViewerOutlineSidebar-ptHfTH0e.js";import"./PdfViewerSidebarHeader-C_-KE32v.js";import"./useBaseUiId-BfCzIxwR.js";import"./useControlled-CiDIFyuy.js";import"./CompositeRoot-k224o5OP.js";import"./CompositeItem-BBL8fhGk.js";import"./ToolbarRootContext-D3JANhpq.js";import"./composite-DNA29nNr.js";import"./svgIconContainer-DJ0pmdAm.js";import"./PdfViewerSearchBar-BmmMfBZZ.js";import"./chevron-up-BR6PTGu3.js";import"./chevron-down-D4cFhIOL.js";import"./cross-CBdyBq1j.js";import"./PdfViewerSidebar-BMYZDB14.js";import"./index-DZsXV9bE.js";import"./index-BC4OQi8j.js";import"./index-BRmwEG4U.js";import"./PdfViewerToolbar-YcOYJq-j.js";import"./Button-BJNxKAu7.js";import"./chevron-right-DCP78vN_.js";import"./Input-B0e0EOXI.js";import"./search-C70hm_cR.js";import"./spin-CnS_5AVo.js";import"./error-Cof-i4TZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4197/6c92edd0d58472f0291e1265a5b96d9d5b458cff/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
