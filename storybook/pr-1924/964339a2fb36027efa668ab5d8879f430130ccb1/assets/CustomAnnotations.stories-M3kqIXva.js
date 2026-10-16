import{j as n}from"./iframe-D0LlCScw.js";import{B as e}from"./BasePdfViewer-CrcdWCGS.js";import"./preload-helper-BPYsHztA.js";import"./index-R-OWCfkC.js";import"./BasePdfViewer.module.css-DwEm8DAr.js";import"./PdfViewerAnnotationLayer-Cj1Jn0oi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DMxCe-2z.js";import"./PdfViewerOutlineSidebar-C8EE005-.js";import"./PdfViewerSidebarHeader-B9s5etKs.js";import"./useBaseUiId-Cnf8WH7W.js";import"./useControlled-C-xRoLJo.js";import"./CompositeRoot-D4wknlLT.js";import"./CompositeItem-DSL5KLQJ.js";import"./ToolbarRootContext-DxaGXN87.js";import"./composite-DawpNJ_k.js";import"./svgIconContainer-CPd4FEGO.js";import"./PdfViewerSearchBar-BOIUyWos.js";import"./chevron-up-0z63vdzI.js";import"./chevron-down-D3xB8NyO.js";import"./cross-BIKx7l1B.js";import"./PdfViewerSidebar-j0I_WP0q.js";import"./index-Bynh9I8M.js";import"./index-DXbsvYWy.js";import"./index-BZTOjdyb.js";import"./PdfViewerToolbar-pqmxAbOf.js";import"./Button-Bfbc-efe.js";import"./chevron-right-CZ2pTDXF.js";import"./Input-DguSmqlF.js";import"./search-Dy9Bh6oJ.js";import"./spin-ChG9fKWo.js";import"./error-g8Wu2PpH.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1924/964339a2fb36027efa668ab5d8879f430130ccb1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
