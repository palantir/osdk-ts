import{j as n}from"./iframe-BAp-mBFg.js";import{B as e}from"./BasePdfViewer-CLLFx_HR.js";import"./preload-helper-DMA-8k7h.js";import"./index-BL8Ey2sj.js";import"./BasePdfViewer.module.css-Cah169fO.js";import"./PdfViewerAnnotationLayer-Byr9sUBY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BAMXoU_x.js";import"./PdfViewerOutlineSidebar-BeV2CpC5.js";import"./PdfViewerSidebarHeader-BX3Vlxoo.js";import"./useBaseUiId-CLc976mR.js";import"./useControlled-DqAef5Et.js";import"./CompositeRoot-Cm7-hfoe.js";import"./CompositeItem-DuZe3uzk.js";import"./ToolbarRootContext-Ul6dl8O6.js";import"./composite-ziK8MZ0d.js";import"./svgIconContainer-CBRcPR9-.js";import"./PdfViewerSearchBar-BdvxJmg9.js";import"./chevron-up-C64on9e6.js";import"./chevron-down-DRRMSp6v.js";import"./cross-YEQVvPJ0.js";import"./PdfViewerSidebar-CX-HBIe7.js";import"./index-BPbKBD04.js";import"./index-bbZZKUgK.js";import"./index-CZnpWueQ.js";import"./PdfViewerToolbar-B71Ocrqk.js";import"./Button-jiVV_CtX.js";import"./chevron-right-otRtpLk1.js";import"./Input-CAD3JQQ8.js";import"./search-CXHMKnff.js";import"./spin-D72ZbfYp.js";import"./error-WBAOjD-R.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4045/918168cc0d93c1fa81be3cc0a43707e757889953/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
