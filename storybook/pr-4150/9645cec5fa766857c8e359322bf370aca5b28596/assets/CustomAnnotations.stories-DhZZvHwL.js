import{j as n}from"./iframe-BzqK-L3x.js";import{B as e}from"./BasePdfViewer-BMi_Lgyw.js";import"./preload-helper-BKlEVweK.js";import"./index-CAFk7Pq5.js";import"./BasePdfViewer.module.css-DHGoIUwM.js";import"./PdfViewerAnnotationLayer-BJC78t4z.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvmVNZxe.js";import"./PdfViewerOutlineSidebar-Dv2RDoBe.js";import"./PdfViewerSidebarHeader-BbRIUpqS.js";import"./useBaseUiId-C-iu15of.js";import"./useControlled-C0lOLQQX.js";import"./CompositeRoot-BDdQN3j1.js";import"./CompositeItem-BZg5qy-d.js";import"./ToolbarRootContext-k1NWQ1L0.js";import"./composite-C9E7l6t3.js";import"./svgIconContainer-CSL2gIeC.js";import"./PdfViewerSearchBar-CJmet3Ix.js";import"./chevron-up-DpUThF0A.js";import"./chevron-down-CaTsAVif.js";import"./cross-Dbky2_5e.js";import"./PdfViewerSidebar-3FIICcYM.js";import"./index-Bn_5eQCw.js";import"./index-BlWV0Ebq.js";import"./index-DncDRzcB.js";import"./PdfViewerToolbar-1nEJwsoq.js";import"./Button-fL19aB2n.js";import"./chevron-right-BNfHZHqI.js";import"./Input-Cpl2x-wp.js";import"./search-D0Jcsyiy.js";import"./spin-4w2_Ogba.js";import"./error-CPni5UMa.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4150/9645cec5fa766857c8e359322bf370aca5b28596/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
