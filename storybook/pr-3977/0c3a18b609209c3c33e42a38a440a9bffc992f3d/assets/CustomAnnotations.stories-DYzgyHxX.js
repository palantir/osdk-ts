import{j as n}from"./iframe-Bw13kIxi.js";import{B as e}from"./BasePdfViewer-8sOAJLbe.js";import"./preload-helper-BzOLmTcY.js";import"./index-MMxGRtZu.js";import"./BasePdfViewer.module.css-dXA6WaQ_.js";import"./PdfViewerAnnotationLayer-CUKw5rlm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CrLy4_GT.js";import"./PdfViewerOutlineSidebar-hyjEZkta.js";import"./PdfViewerSidebarHeader-Dfkv8Tqg.js";import"./useBaseUiId-BD7FpPox.js";import"./useControlled-DefJa1NZ.js";import"./CompositeRoot-D3tWT_zL.js";import"./CompositeItem-B4j9mPKG.js";import"./ToolbarRootContext-IHMHRzml.js";import"./composite-BFCFgZut.js";import"./svgIconContainer-CHQSAFNt.js";import"./PdfViewerSearchBar-DsAGyuHE.js";import"./chevron-up-B2KSviuP.js";import"./chevron-down-hwQFkKEa.js";import"./cross-Bot7O1S5.js";import"./PdfViewerSidebar-ihpUCWkT.js";import"./index-Dtvh5Ts7.js";import"./index-CUU4Y7hn.js";import"./index-BqWGwO84.js";import"./PdfViewerToolbar-DB4YbZ0b.js";import"./Button-CE0Z6ey5.js";import"./chevron-right-Dt3lo7hs.js";import"./Input-2zOhGHVv.js";import"./search-DC1ogqGn.js";import"./spin-DqkbUM7m.js";import"./error-CDpWRRdK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3977/0c3a18b609209c3c33e42a38a440a9bffc992f3d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
