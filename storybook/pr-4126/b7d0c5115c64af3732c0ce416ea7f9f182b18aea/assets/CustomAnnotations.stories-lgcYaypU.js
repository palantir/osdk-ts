import{j as n}from"./iframe-ByGhu7Rs.js";import{B as e}from"./BasePdfViewer-Ct1Euxn2.js";import"./preload-helper-CovqUMwC.js";import"./index-D9CH1iu6.js";import"./BasePdfViewer.module.css-B6uJvl-M.js";import"./PdfViewerAnnotationLayer-C0XTL3OZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cv3snJPZ.js";import"./PdfViewerOutlineSidebar-C2fkbA6H.js";import"./PdfViewerSidebarHeader-B21Ctoio.js";import"./useBaseUiId-BtV3BRGt.js";import"./useControlled-BMq25ryS.js";import"./CompositeRoot-DnFUjQUd.js";import"./CompositeItem-DOTYC0vy.js";import"./ToolbarRootContext--ybsc-5r.js";import"./composite-5pEQHoFG.js";import"./svgIconContainer-BM73F7-1.js";import"./PdfViewerSearchBar-BFrFUBAK.js";import"./chevron-up-CTnvYEiR.js";import"./chevron-down-CVFp5ZF3.js";import"./cross--Vb8zQ9y.js";import"./PdfViewerSidebar-D_AcWwo8.js";import"./index-BhXiEem_.js";import"./index-CSR_OQNU.js";import"./index-Sa0Sgq1C.js";import"./PdfViewerToolbar-BlgBaM1g.js";import"./Button-FdiR0YBj.js";import"./chevron-right-BszbI75O.js";import"./Input-CPzfsq5Q.js";import"./search-CqZJJM3l.js";import"./spin-t4PN0_mV.js";import"./error-BtdAILjI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4126/b7d0c5115c64af3732c0ce416ea7f9f182b18aea/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
