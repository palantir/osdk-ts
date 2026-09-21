import{j as n}from"./iframe-BdwSD-4g.js";import{B as e}from"./BasePdfViewer-Da7XqRLM.js";import"./preload-helper-Q7k08PSu.js";import"./index-DOSkW-9K.js";import"./BasePdfViewer.module.css-BzPaHgkr.js";import"./PdfViewerAnnotationLayer-C9mD909X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu8LPtD1.js";import"./PdfViewerOutlineSidebar-D_aA4byI.js";import"./PdfViewerSidebarHeader-CMEekYzR.js";import"./useBaseUiId-Dw0luXrm.js";import"./useControlled-D1Q7B9_S.js";import"./CompositeRoot-0JAd7nqK.js";import"./CompositeItem-_wAlG9yG.js";import"./ToolbarRootContext-BvaeGVZU.js";import"./composite-5NyIARcH.js";import"./svgIconContainer-DA4wNVnR.js";import"./PdfViewerSearchBar-Md_NRbfh.js";import"./chevron-up-BfLynbIl.js";import"./chevron-down-Dn6L64Ru.js";import"./cross-ALmhnM-F.js";import"./PdfViewerSidebar-kiQ5y3BN.js";import"./index-gxw3sShd.js";import"./index-Af48Q6og.js";import"./index-FAuKkFnB.js";import"./PdfViewerToolbar-BOuywJKc.js";import"./Button-DT6t-JAZ.js";import"./chevron-right-CnwUtuAZ.js";import"./Input-DFvD33w1.js";import"./search-zOT-eX5y.js";import"./spin-UXdHPJfp.js";import"./error-BrVGJ7z5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/7fd88d78215badd6b7d263c8496f66dd7c148787/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
