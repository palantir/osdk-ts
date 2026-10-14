import{j as n}from"./iframe-DIE5EIel.js";import{B as e}from"./BasePdfViewer-CF0Qi9EI.js";import"./preload-helper-CcEYMKBV.js";import"./index-gAWb2dR9.js";import"./BasePdfViewer.module.css-u23iHNik.js";import"./PdfViewerAnnotationLayer-DHezf3mE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CyIzpI6O.js";import"./PdfViewerOutlineSidebar-DSDj7Zev.js";import"./PdfViewerSidebarHeader-CYBOaMg-.js";import"./useBaseUiId-DU3L5eHE.js";import"./useControlled-ddG6ulVP.js";import"./CompositeRoot-CfmBhVZw.js";import"./CompositeItem-Crvs63Hb.js";import"./ToolbarRootContext-DFNBF5NL.js";import"./composite-DJfb-Teu.js";import"./svgIconContainer-Rj0rqZar.js";import"./PdfViewerSearchBar-CAKjc_D3.js";import"./chevron-up-OaxD1A4Y.js";import"./chevron-down-CUqhLbkD.js";import"./cross-siN9VgW1.js";import"./PdfViewerSidebar-gltL9Uct.js";import"./index-CPNhCNUx.js";import"./index-C3GNYR7s.js";import"./index-DMxLJ88X.js";import"./PdfViewerToolbar-Ck8WfEDG.js";import"./Button-DGriahwu.js";import"./chevron-right-DnDFPkBb.js";import"./Input-Co7zI1L-.js";import"./search-UnQR1AsU.js";import"./spin-BGkyB0nC.js";import"./error-aWHvmhUp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4202/c0bc8672858aa2d0b8d13f156c7fa9472d7afcb2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
