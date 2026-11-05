import{j as n}from"./iframe-BhDMRuCM.js";import{B as e}from"./BasePdfViewer-DfB9et7d.js";import"./preload-helper-L4oI3E3x.js";import"./index-DBdWVfZr.js";import"./BasePdfViewer.module.css-DgIrZ6Or.js";import"./PdfViewerAnnotationLayer-W29FcQ4U.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9Z3XLbw.js";import"./PdfViewerOutlineSidebar-C-kzFNOm.js";import"./PdfViewerSidebarHeader-Dhc42_xy.js";import"./useBaseUiId-DsydWgv8.js";import"./useControlled-BwLkCqLj.js";import"./CompositeRoot-YI5tx5AI.js";import"./CompositeItem-BUYvwABx.js";import"./ToolbarRootContext-DcA5VE7P.js";import"./composite-D7bHzIxr.js";import"./svgIconContainer-DvnFME-C.js";import"./PdfViewerSearchBar-Dlk-Wu5Y.js";import"./chevron-up-Bo_U_gN-.js";import"./chevron-down-CJ-s6D7k.js";import"./cross-B8g5lC7t.js";import"./PdfViewerSidebar-BwA7TQLC.js";import"./index-AAIJN6Ah.js";import"./index-DO7zbhCL.js";import"./index-DbLkd8ga.js";import"./PdfViewerToolbar-8uCOX3rR.js";import"./Button-CqxlV9z0.js";import"./chevron-right-CIH1Ftvf.js";import"./Input-DwhP00hs.js";import"./search-B2ohHoFm.js";import"./spin-B4rQAyRJ.js";import"./error-Dy988hUQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4321/f1b931ba6dbd0c92d65001e9445e541f2340d135/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
