import{j as n}from"./iframe-BFWJZaOo.js";import{B as e}from"./BasePdfViewer-BXHRT0ZG.js";import"./preload-helper-BB-wZWHQ.js";import"./index-XqSw18dv.js";import"./BasePdfViewer.module.css-NCa8bLdD.js";import"./PdfViewerAnnotationLayer-DXmiPqWh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvMoyjX9.js";import"./PdfViewerOutlineSidebar-DoIUPocr.js";import"./PdfViewerSidebarHeader-CKQJVwYq.js";import"./useBaseUiId-D0TRwsGc.js";import"./useControlled-B54yZwri.js";import"./CompositeRoot-D0VNorFa.js";import"./CompositeItem-BYv_HkoB.js";import"./ToolbarRootContext-t3ZlqxTu.js";import"./composite-BuqSO83P.js";import"./svgIconContainer-D508kkfI.js";import"./PdfViewerSearchBar-CEFmWQAE.js";import"./chevron-up-B2UI6qyl.js";import"./chevron-down-jCzULGyN.js";import"./cross-Bdxg6WL4.js";import"./PdfViewerSidebar-DLxAXqbG.js";import"./index-DhrvNfiG.js";import"./index-13lJ30rX.js";import"./index-CxTEg5iL.js";import"./PdfViewerToolbar-SX0mUIqQ.js";import"./Button-BucLG5Fq.js";import"./chevron-right-CNbJtGbT.js";import"./Input-CT8p6Er9.js";import"./search-CoXqkvjq.js";import"./spin-DwtWeUMM.js";import"./error-ov0Da29u.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/b51be9eac3f4b30a70befe7d3de6c494be0ee913/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
