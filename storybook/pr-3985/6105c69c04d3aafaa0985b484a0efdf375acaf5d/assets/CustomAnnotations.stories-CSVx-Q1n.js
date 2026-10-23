import{j as n}from"./iframe-D07nCh-w.js";import{B as e}from"./BasePdfViewer-oSmYCqmE.js";import"./preload-helper-CmcD2_D_.js";import"./index-BuDZJHpF.js";import"./BasePdfViewer.module.css-Dm0WdGmC.js";import"./PdfViewerAnnotationLayer-DjQj7ttm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8mMDuWT.js";import"./PdfViewerOutlineSidebar-9oPhtvae.js";import"./PdfViewerSidebarHeader-BYx1vGZA.js";import"./useBaseUiId-psA3q1id.js";import"./useControlled-CXqQNY_F.js";import"./CompositeRoot-DJ0tY9Cs.js";import"./CompositeItem-Br0cx3Iq.js";import"./ToolbarRootContext-DqdX595l.js";import"./composite-C9jYcXJr.js";import"./svgIconContainer-PtRD7k8A.js";import"./PdfViewerSearchBar-D-IN9zYo.js";import"./chevron-up-uIPDCvf4.js";import"./chevron-down-dIbn2_mD.js";import"./cross-CTO9sPn-.js";import"./PdfViewerSidebar-CDB-tQWu.js";import"./index-a0NtOl0y.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./PdfViewerToolbar-C213f-iY.js";import"./Button-DEuGu2m_.js";import"./chevron-right-ChCG4MaV.js";import"./Input-98CZZbi3.js";import"./search-CytW_RDV.js";import"./spin-CH2u-C8a.js";import"./error-ByDyMI-d.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/6105c69c04d3aafaa0985b484a0efdf375acaf5d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
