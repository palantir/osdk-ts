import{j as n}from"./iframe-DIsuQOn3.js";import{B as e}from"./BasePdfViewer-CVJ_6EZI.js";import"./preload-helper-B4-DY1XA.js";import"./index-DDUWefxd.js";import"./BasePdfViewer.module.css-CRWIfLxu.js";import"./PdfViewerAnnotationLayer-69c_A5Bt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFoTLudy.js";import"./PdfViewerOutlineSidebar-BuXRjJ73.js";import"./PdfViewerSidebarHeader-rgjR-KtW.js";import"./useBaseUiId-KXmclwOQ.js";import"./useControlled-CNU4MnWQ.js";import"./CompositeRoot-DlzFGTx3.js";import"./CompositeItem-Dk6CpBJD.js";import"./ToolbarRootContext-DPQZSAuV.js";import"./composite-Cieee4Ac.js";import"./svgIconContainer-Dc19E04o.js";import"./PdfViewerSearchBar-CFdmOPUl.js";import"./chevron-up-BhJgkVxf.js";import"./chevron-down-C_9riItt.js";import"./cross-tvYPvXsb.js";import"./PdfViewerSidebar-CfdZgweQ.js";import"./index-DkWi2KH1.js";import"./index-yKKDsrZW.js";import"./index-CHAIk4qd.js";import"./PdfViewerToolbar-BVLeoMcz.js";import"./Button-SgvkStmW.js";import"./chevron-right-CEGD0nC_.js";import"./Input-ChZNHuDE.js";import"./search-BXyxqXsb.js";import"./spin-C9xo102N.js";import"./error-DpfjWw-I.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3967/7a0d33bae7cbc9249f929eced675885dd057d986/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
