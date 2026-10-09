import{j as n}from"./iframe-C2bn1_9y.js";import{B as e}from"./BasePdfViewer-B1TsbXnu.js";import"./preload-helper-BKCOmGZc.js";import"./index-Rse0ui84.js";import"./BasePdfViewer.module.css-4ovSVSd-.js";import"./PdfViewerAnnotationLayer-CmUxImmV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CBl0OMd0.js";import"./PdfViewerOutlineSidebar-26x_g9s0.js";import"./PdfViewerSidebarHeader-Dc70f5BE.js";import"./useBaseUiId-BEW7P3cF.js";import"./useControlled-BN9CT1rQ.js";import"./CompositeRoot-Dt31koM5.js";import"./CompositeItem-Dhse_QgT.js";import"./ToolbarRootContext-C-eiR_Mr.js";import"./composite-DfH2wcee.js";import"./svgIconContainer-DPC29kub.js";import"./PdfViewerSearchBar-BjiuXv5w.js";import"./chevron-up-BILZRy9w.js";import"./chevron-down-BOQ5t9w6.js";import"./cross-D3-SLGNH.js";import"./PdfViewerSidebar-Deh3hqgQ.js";import"./index-C2JbH2_9.js";import"./index-pp8KWnVv.js";import"./index-Dvlf4PX0.js";import"./PdfViewerToolbar-O96rG5Ep.js";import"./Button-DYwf6UQE.js";import"./chevron-right-D23-KQ92.js";import"./Input-M9Th-rY9.js";import"./search-BCScHNOJ.js";import"./spin-ADNqhO95.js";import"./error-DBJpIi5X.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4204/240036eb6d14f19a3c9a6815ef439f1d912b2c0d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
