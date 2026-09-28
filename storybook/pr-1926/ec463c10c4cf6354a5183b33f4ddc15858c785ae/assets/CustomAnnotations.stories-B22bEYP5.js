import{j as n}from"./iframe-D7UqPUqg.js";import{B as e}from"./BasePdfViewer-DpG1j96d.js";import"./preload-helper-Cn4dnxMR.js";import"./index-B1myIupO.js";import"./BasePdfViewer.module.css-BdwiuBGl.js";import"./PdfViewerAnnotationLayer-Cczz7DNZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GoKbZ4f3.js";import"./PdfViewerOutlineSidebar-6_53oXI_.js";import"./PdfViewerSidebarHeader-BA_U0GHX.js";import"./useBaseUiId-cZ22buUA.js";import"./useControlled-BvzqTfft.js";import"./CompositeRoot-DcOfLjWr.js";import"./CompositeItem-DTU093CG.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./composite-CksaxzsE.js";import"./svgIconContainer-CDkwNXGT.js";import"./PdfViewerSearchBar-CBOTgllm.js";import"./chevron-up-B4rNVdRr.js";import"./chevron-down-DzpLubs1.js";import"./cross-Bj6j_CtG.js";import"./PdfViewerSidebar-Cc8-1SFE.js";import"./index-BLUZuP7j.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./PdfViewerToolbar-BBaU07Qb.js";import"./Button-zkNcwcgB.js";import"./chevron-right-BauPPWGD.js";import"./Input-DUMT1c48.js";import"./search-Da0O3BMF.js";import"./spin-bnjPnvUZ.js";import"./error-n93hCEyg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/ec463c10c4cf6354a5183b33f4ddc15858c785ae/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
