import{j as n}from"./iframe-BarfOKYJ.js";import{B as e}from"./BasePdfViewer-BnLqVrpl.js";import"./preload-helper-DhgTfoUj.js";import"./index-DdXQxkq9.js";import"./BasePdfViewer.module.css-D8cnO4nK.js";import"./PdfViewerAnnotationLayer-Xtqo0bCI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ck47tpz7.js";import"./PdfViewerOutlineSidebar-CqfpJ8P_.js";import"./PdfViewerSidebarHeader-MHzxKHHV.js";import"./useBaseUiId-DPa9F6U_.js";import"./useControlled-Bj7AFHc7.js";import"./CompositeRoot-Dw00YbZP.js";import"./CompositeItem-DtdptPgn.js";import"./ToolbarRootContext-BuAvit0a.js";import"./composite-C6iH7oZR.js";import"./svgIconContainer-CZ2JLaJP.js";import"./PdfViewerSearchBar-Czc-m27r.js";import"./chevron-up-H5Hyk0Go.js";import"./chevron-down-CDrseuzZ.js";import"./cross-awiM4qkb.js";import"./PdfViewerSidebar-D8l1Hbar.js";import"./index-BYqnSnwI.js";import"./index-CylLJLDi.js";import"./index-BSz4BzcY.js";import"./PdfViewerToolbar-CHzGhixf.js";import"./Button-glJjOdf_.js";import"./chevron-right-CPPQM07z.js";import"./Input-BuDULjbT.js";import"./search-C8DSNwE8.js";import"./spin-EHLECWMU.js";import"./error-D3ss51fq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4117/612fb411511cba79aa8dd2276251b48d5b7aa72f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
