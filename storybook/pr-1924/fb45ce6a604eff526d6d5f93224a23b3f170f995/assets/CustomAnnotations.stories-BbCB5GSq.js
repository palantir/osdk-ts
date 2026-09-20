import{j as n}from"./iframe-BdKsMQww.js";import{B as e}from"./BasePdfViewer-CgHWfMhC.js";import"./preload-helper-MlpURx7u.js";import"./index-DKUuG3z9.js";import"./BasePdfViewer.module.css-BNh0V2rp.js";import"./PdfViewerAnnotationLayer-BqQW85bM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmGYhTs1.js";import"./PdfViewerOutlineSidebar-DaFZ3Q1H.js";import"./PdfViewerSidebarHeader-B4ROIYlV.js";import"./useBaseUiId-DO0eFKXX.js";import"./useControlled-7KbTYIa_.js";import"./CompositeRoot-CwHpMXLT.js";import"./CompositeItem-e2FL5qAU.js";import"./ToolbarRootContext-CdO1SR-V.js";import"./composite-BNox4Mzc.js";import"./svgIconContainer-BnCWnnko.js";import"./PdfViewerSearchBar-BKlDaK1H.js";import"./chevron-up-Ce4FETTr.js";import"./chevron-down-Bw8Fchsf.js";import"./cross-DNiGESUx.js";import"./PdfViewerSidebar-3Femg3xe.js";import"./index-BbdEClvW.js";import"./index-EXOzxBPi.js";import"./index-DYRORlje.js";import"./PdfViewerToolbar-D-nJeTcn.js";import"./Button-CcSyVXzr.js";import"./chevron-right-CCvR0w-N.js";import"./Input-D7CFUCMW.js";import"./search-PSF1rGs2.js";import"./spin-DSVRqJ2Y.js";import"./error-Nv9n4Hjz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1924/fb45ce6a604eff526d6d5f93224a23b3f170f995/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
