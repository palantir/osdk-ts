import{j as n}from"./iframe-DzwZADhG.js";import{B as e}from"./BasePdfViewer-BnnvCBX9.js";import"./preload-helper-D4CIUPhb.js";import"./index-bPezx-Jx.js";import"./BasePdfViewer.module.css-D8q3Yipa.js";import"./PdfViewerAnnotationLayer-BFXCFDas.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dn9rg_Kv.js";import"./PdfViewerOutlineSidebar-B537Ynk6.js";import"./PdfViewerSidebarHeader-4-lcXlF6.js";import"./useBaseUiId-DCeowPEc.js";import"./useControlled-BKgOzc4N.js";import"./CompositeRoot-DU4J_RW3.js";import"./CompositeItem-Cis4rFWY.js";import"./ToolbarRootContext-DiUMk1ef.js";import"./composite-C5aR63In.js";import"./svgIconContainer-BcCLnS_P.js";import"./PdfViewerSearchBar-CcU2J5qB.js";import"./chevron-up-C5g2LH0L.js";import"./chevron-down-CZ1AUZYm.js";import"./cross-CyC5zJCO.js";import"./PdfViewerSidebar-BqxUhwoK.js";import"./index-D8Hs_QlL.js";import"./index-C3Zy7bdQ.js";import"./index-60H3em-G.js";import"./PdfViewerToolbar-CX956oEf.js";import"./Button-C5a400vo.js";import"./chevron-right-CcPU8Yxy.js";import"./Input-DGm0m1Rw.js";import"./search-BQh3drJY.js";import"./spin-D1XwUdhC.js";import"./error-CM-fSgTg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/f4d025e507e2ed36c85a553e4e13c2d0d512541c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
