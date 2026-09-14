import{j as n}from"./iframe-DIZ-Bu8w.js";import{B as e}from"./BasePdfViewer-Bhx1dowH.js";import"./preload-helper-BCeaJvSh.js";import"./index-U9LN2Bz3.js";import"./BasePdfViewer.module.css-CHHenCyB.js";import"./PdfViewerAnnotationLayer-HXfaO76A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-4Q0VTEOu.js";import"./PdfViewerOutlineSidebar-Cdr0LIpu.js";import"./PdfViewerSidebarHeader-CwkVn7dp.js";import"./useBaseUiId-CBNbS5zc.js";import"./useControlled-CLVHgJsp.js";import"./CompositeRoot-UKrC5Af_.js";import"./CompositeItem-BtZ6x-gO.js";import"./ToolbarRootContext-BVSgixiH.js";import"./composite-g9iDGAQe.js";import"./svgIconContainer-IKodGSm3.js";import"./PdfViewerSearchBar-C6QZEzgj.js";import"./chevron-up-D9PLiJAm.js";import"./chevron-down-DSfB9wHE.js";import"./cross-DxgTLWiz.js";import"./PdfViewerSidebar-C1PCdtV0.js";import"./index-CkInxViu.js";import"./index-C_o4DvqR.js";import"./index-C_qvm4WD.js";import"./PdfViewerToolbar-D6KpILGQ.js";import"./Button-B1ALhdFr.js";import"./chevron-right-DNGrNe4w.js";import"./Input-CIeGAlok.js";import"./search-DmtLA8wB.js";import"./spin-CBa6SyXs.js";import"./error-uSSd40F1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/985b96937887bd1164ea05ed1f65ef4346c8da63/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
