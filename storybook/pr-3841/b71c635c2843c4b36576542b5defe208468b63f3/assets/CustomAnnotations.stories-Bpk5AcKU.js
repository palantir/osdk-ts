import{j as n}from"./iframe-B-YGlnkZ.js";import{B as e}from"./BasePdfViewer-CbDoWAm8.js";import"./preload-helper-CtVpadX7.js";import"./index-BwbxpG9V.js";import"./BasePdfViewer.module.css-kE0eGwY4.js";import"./PdfViewerAnnotationLayer-eGqAmZ7B.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Df2hyTLU.js";import"./PdfViewerOutlineSidebar-binXN1Q0.js";import"./PdfViewerSidebarHeader-Cy1uJIm-.js";import"./useBaseUiId-H-3YJ5Rw.js";import"./useControlled-DdFFxVnf.js";import"./CompositeRoot-a-MzYvnw.js";import"./CompositeItem-BE3XYcA2.js";import"./ToolbarRootContext-CnbQ5y9z.js";import"./composite-Dqyj-RK-.js";import"./svgIconContainer-ur9r5SLx.js";import"./PdfViewerSearchBar-DZrNEAuk.js";import"./chevron-up-C9R30Plo.js";import"./chevron-down-G62k-E5h.js";import"./cross-Cxuf4ocZ.js";import"./PdfViewerSidebar-Cti5FAeT.js";import"./index-CQIVASoN.js";import"./index-B6aw-_Dz.js";import"./index-BOs-qFJy.js";import"./PdfViewerToolbar-CCkf_Vqx.js";import"./Button-BxSaRA57.js";import"./chevron-right-Cg8PpQrY.js";import"./Input-DaqHwlu0.js";import"./search-DXsdMEbr.js";import"./spin-3_Q0RMaU.js";import"./error-CFJFAjZO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/b71c635c2843c4b36576542b5defe208468b63f3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
