import{j as n}from"./iframe-Cj5xKvLA.js";import{B as e}from"./BasePdfViewer-J_p_XhtO.js";import"./preload-helper-D1DDVoTO.js";import"./index-BBh4Z0mE.js";import"./BasePdfViewer.module.css-BP_PMIXO.js";import"./PdfViewerAnnotationLayer-Cnq1X997.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9cAUyfmO.js";import"./PdfViewerOutlineSidebar-BA5yQa1S.js";import"./PdfViewerSidebarHeader-Cr5AEY1j.js";import"./useBaseUiId-n2QF9Zar.js";import"./useControlled-D5krREh9.js";import"./CompositeRoot-CgebjbKf.js";import"./CompositeItem-Cu_iWJpi.js";import"./ToolbarRootContext-DFdsIL16.js";import"./composite-925znV2G.js";import"./svgIconContainer-DZYGEA7n.js";import"./PdfViewerSearchBar-D_fWtNOa.js";import"./chevron-up-BLaMXbBL.js";import"./chevron-down-C93yiICa.js";import"./cross-BPLfBPr7.js";import"./PdfViewerSidebar-CcPotWe8.js";import"./index-oe6lplKX.js";import"./index-DKWCLtL5.js";import"./index-Cb9jn425.js";import"./PdfViewerToolbar-CxOzPX7g.js";import"./Button-Be388aOs.js";import"./chevron-right-BCRFOobl.js";import"./Input-Bffgvop9.js";import"./search-BmtS1KCs.js";import"./spin-2Tv5W9pX.js";import"./error-Bd1ykK4E.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4320/c2ab3dd5d86be45aa6394ed8342c63abb8062d75/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
