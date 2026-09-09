import{j as n}from"./iframe-CHFOhFuc.js";import{B as e}from"./BasePdfViewer-P3tl1wIa.js";import"./preload-helper-B-1rSRgY.js";import"./index-BpX6hENj.js";import"./BasePdfViewer.module.css-D4JdG3EJ.js";import"./PdfViewerAnnotationLayer-8Coo2Nlx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BKtMpsdq.js";import"./PdfViewerOutlineSidebar-B7L0CjdA.js";import"./PdfViewerSidebarHeader-_BCyfR5Z.js";import"./useBaseUiId-CpuSZ-O9.js";import"./useControlled-Cnl8z_DZ.js";import"./CompositeRoot-WrvYFshd.js";import"./CompositeItem-V52V_N8R.js";import"./ToolbarRootContext-D3CnJ-Kn.js";import"./composite-C909Fk53.js";import"./svgIconContainer-zzwTq_t7.js";import"./PdfViewerSearchBar-Crkhd2f8.js";import"./chevron-up-C_rJHoy0.js";import"./chevron-down-DDx-Wnyx.js";import"./cross-CLtam5MT.js";import"./PdfViewerSidebar-Cz3yZeO5.js";import"./index-ClhHXn3z.js";import"./index-DQOrZvkv.js";import"./index-BvRLFMPY.js";import"./PdfViewerToolbar-BcMdaK1S.js";import"./Button-DHQU-3rC.js";import"./chevron-right-DxXAWTEu.js";import"./Input-D8YBib2L.js";import"./search-Ct1jR5-1.js";import"./spin-DR_fpufo.js";import"./error-2828ta47.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/c7480438b12801364098b71fa62fa3777a56ea96/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
