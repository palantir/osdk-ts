import{j as n}from"./iframe-BoQuj6Ft.js";import{B as e}from"./BasePdfViewer-CBJmEQDM.js";import"./preload-helper-DFHoCRfY.js";import"./index-B3vkyGje.js";import"./BasePdfViewer.module.css-CI4Jqd75.js";import"./PdfViewerAnnotationLayer-DiC4D6Bx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DWLmS2p1.js";import"./PdfViewerOutlineSidebar-Cgu--GUU.js";import"./PdfViewerSidebarHeader-DJI24stA.js";import"./useBaseUiId-DKKiKBjO.js";import"./useControlled-DfpvXrbD.js";import"./CompositeRoot-DjmA6m7I.js";import"./CompositeItem-DPojjMsZ.js";import"./ToolbarRootContext-Civm9m7-.js";import"./composite-CvoBvof0.js";import"./svgIconContainer-D1Y91RJ2.js";import"./PdfViewerSearchBar-CpckwXip.js";import"./chevron-up-KRx7WT9j.js";import"./chevron-down-DuDBYDyj.js";import"./cross-DIlflA87.js";import"./PdfViewerSidebar-CJuW7typ.js";import"./index-Cye0oCf9.js";import"./index-BQDMsvBO.js";import"./index-BUrjWVUX.js";import"./PdfViewerToolbar-DYp9WMAe.js";import"./Button-CVGCG-PX.js";import"./chevron-right-cqr6ubxI.js";import"./Input-BrV6l60a.js";import"./search-DxfJTzvK.js";import"./spin-CQBEYvDU.js";import"./error-ovbXz9QM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4058/9bdd58f07b72f7255e358f835f1222a99b855501/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
