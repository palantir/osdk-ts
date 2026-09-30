import{j as n}from"./iframe-BP89Z9wn.js";import{B as e}from"./BasePdfViewer-BAbc-Gtf.js";import"./preload-helper-CpDXy6ri.js";import"./index-7fPc8Pd4.js";import"./BasePdfViewer.module.css-t1rZmlRJ.js";import"./PdfViewerAnnotationLayer-x1I2zTuL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-H4YNhLNF.js";import"./PdfViewerOutlineSidebar-BXMn9oZG.js";import"./PdfViewerSidebarHeader-CenDvEB-.js";import"./useBaseUiId-BsQB3yjV.js";import"./useControlled-DYUiPWJr.js";import"./CompositeRoot-CBGwrkeq.js";import"./CompositeItem-BWaumFAX.js";import"./ToolbarRootContext-BM5nRA8f.js";import"./composite-JzO3n_7v.js";import"./svgIconContainer-B-B6fhYH.js";import"./PdfViewerSearchBar-DHR4_mma.js";import"./chevron-up-CnfXm6bd.js";import"./chevron-down-CbjEdb4A.js";import"./cross-CseKBkZX.js";import"./PdfViewerSidebar-Bo9IIfZp.js";import"./index-D2KO3R9_.js";import"./index-yCs_Jqs_.js";import"./index-B2q267Hw.js";import"./PdfViewerToolbar-CTkLG0GD.js";import"./Button-Bcmb5ML8.js";import"./chevron-right-Dki6zj_3.js";import"./Input-CurDQ8U3.js";import"./search-Ce4dpx9M.js";import"./spin-Bh6VaP9-.js";import"./error-B9U50q0S.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/15842a05bc3d1f13746c01dddc8049e0afd9a979/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
