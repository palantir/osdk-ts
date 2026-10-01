import{j as n}from"./iframe-CxgAHdD_.js";import{B as e}from"./BasePdfViewer-Blh0A3qm.js";import"./preload-helper-DzzfBRd8.js";import"./index-B6MbbFlT.js";import"./BasePdfViewer.module.css-C6YnfpHy.js";import"./PdfViewerAnnotationLayer-B9-Xue1h.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZTijWND.js";import"./PdfViewerOutlineSidebar-Bao9Z13k.js";import"./PdfViewerSidebarHeader-y97MCo2d.js";import"./useBaseUiId-DFqoi1rW.js";import"./useControlled-UHTW7SDW.js";import"./CompositeRoot-CDlqzIwZ.js";import"./CompositeItem-rluq41vP.js";import"./ToolbarRootContext-CWhOmDUt.js";import"./composite-BPWDb3yK.js";import"./svgIconContainer-DjIuQsyB.js";import"./PdfViewerSearchBar-CPE21GxA.js";import"./chevron-up-mSDs35JY.js";import"./chevron-down-BzYJ5JTr.js";import"./cross-EITDvaH2.js";import"./PdfViewerSidebar-4_dN9aW7.js";import"./index-8jFysFom.js";import"./index-JYYI4S_c.js";import"./index-C5Y_pAhG.js";import"./PdfViewerToolbar-Q6c5IUVB.js";import"./Button-CKsUHdvx.js";import"./chevron-right-D6J5tpNW.js";import"./Input-DwYZqNpM.js";import"./search-DdlCwk58.js";import"./spin-C3aVE59w.js";import"./error-BEe-jKvu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/4375a8cd3fae670536129fa3227833fce4eedd22/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
