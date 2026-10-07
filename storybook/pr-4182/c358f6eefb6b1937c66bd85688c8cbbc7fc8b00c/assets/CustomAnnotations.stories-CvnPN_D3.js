import{j as n}from"./iframe-7g13v2jN.js";import{B as e}from"./BasePdfViewer-C7fwOdt3.js";import"./preload-helper-CclsuuMH.js";import"./index-BgJ1FFdq.js";import"./BasePdfViewer.module.css-C7IBXRhn.js";import"./PdfViewerAnnotationLayer-COmrFsG3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIL3wS9o.js";import"./PdfViewerOutlineSidebar-B0NB1fhs.js";import"./PdfViewerSidebarHeader-CQOidbli.js";import"./useBaseUiId-C7XxkQYq.js";import"./useControlled-B23KZW1l.js";import"./CompositeRoot-8amK5kl9.js";import"./CompositeItem-B-yStqfF.js";import"./ToolbarRootContext-CE2CALLi.js";import"./composite-B2zIsJ0R.js";import"./svgIconContainer-DukTjdz5.js";import"./PdfViewerSearchBar-jIA1rBAV.js";import"./chevron-up-D_QaO6YL.js";import"./chevron-down-CFQZfM99.js";import"./cross-OMCp2mi_.js";import"./PdfViewerSidebar-wsQBj3ec.js";import"./index-BfjN1GaO.js";import"./index-f0-b4s2g.js";import"./index-DlhSwHJN.js";import"./PdfViewerToolbar-CDaYKOcM.js";import"./Button-Apw5WzKr.js";import"./chevron-right-DMq_Q7R5.js";import"./Input-CaqMv5Lb.js";import"./search-sAV5xLcY.js";import"./spin-DEx0SlPa.js";import"./error-D4UXhq88.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4182/c358f6eefb6b1937c66bd85688c8cbbc7fc8b00c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
