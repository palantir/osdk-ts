import{j as n}from"./iframe-Dhwk5ITi.js";import{B as e}from"./BasePdfViewer-BlCVBOpk.js";import"./preload-helper-DXH7Ji2G.js";import"./index-CqrX2hSZ.js";import"./BasePdfViewer.module.css-BvBQijYo.js";import"./PdfViewerAnnotationLayer-zAeXMh9A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dff4sATb.js";import"./PdfViewerOutlineSidebar-DDewuTgC.js";import"./PdfViewerSidebarHeader-BujdX0Gg.js";import"./useBaseUiId-CN9ap6QA.js";import"./useControlled-BzFCle-k.js";import"./CompositeRoot-BWFqHTeA.js";import"./CompositeItem-fUd5V9Oq.js";import"./ToolbarRootContext-tq1uYlSQ.js";import"./composite-Q4thQ8nQ.js";import"./svgIconContainer-DRo39Sdm.js";import"./PdfViewerSearchBar-DElkl3w8.js";import"./chevron-up-DeVZ5pga.js";import"./chevron-down-Bi9ECMIR.js";import"./cross-BCTjTq5q.js";import"./PdfViewerSidebar-D5_EXjdr.js";import"./index-CTvXLxpd.js";import"./index-Dqvhhr9j.js";import"./index-CQyEu1u7.js";import"./PdfViewerToolbar-BWntEBto.js";import"./Button-DQ5CRvak.js";import"./chevron-right-DVW3R71G.js";import"./Input-BHNHysVZ.js";import"./search-Be1zlQKz.js";import"./spin-fw8KY2n1.js";import"./error--SrXy3UU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4328/6e8997ec0b0cb15e43c3ffacda55a76f16496206/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
