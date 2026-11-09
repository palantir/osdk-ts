import{j as n}from"./iframe-B1cjW9lN.js";import{B as e}from"./BasePdfViewer-CqJ1oUjB.js";import"./preload-helper-esge5jOw.js";import"./index-DBKcAKBa.js";import"./BasePdfViewer.module.css-D8j6GUWV.js";import"./PdfViewerAnnotationLayer-K8w2dFvi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dl5G21Py.js";import"./PdfViewerOutlineSidebar-D660eWge.js";import"./PdfViewerSidebarHeader-BjoXotmA.js";import"./useBaseUiId-CtX_9P1W.js";import"./useControlled-DdMiAZ8X.js";import"./CompositeRoot-C1BaCtLB.js";import"./CompositeItem-CR9WkMFf.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./composite-rAM9AtlZ.js";import"./svgIconContainer-z9g6oSzF.js";import"./PdfViewerSearchBar-CPkCw4ES.js";import"./chevron-up-D8Q_lFV8.js";import"./chevron-down-Qs9iMpX5.js";import"./cross-B-sNKi3J.js";import"./PdfViewerSidebar-CwkkkmoB.js";import"./index-B7TJ5Vg6.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./PdfViewerToolbar-DYxCCcGM.js";import"./Button-Dy6NAp_j.js";import"./chevron-right-DpAEFy3I.js";import"./Input-DbrQZdXa.js";import"./search-050tV6oC.js";import"./spin-D2yhMrjA.js";import"./error-4QB3sX_8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4365/f2c41c24ec57a1579ab4b537d9b16d982f6bea47/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
