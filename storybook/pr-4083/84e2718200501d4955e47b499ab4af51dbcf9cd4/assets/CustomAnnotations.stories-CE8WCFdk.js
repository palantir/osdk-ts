import{j as n}from"./iframe-DW6PMPsi.js";import{B as e}from"./BasePdfViewer-ClE1LuAY.js";import"./preload-helper-BlWs9PqI.js";import"./index-D66c38lk.js";import"./BasePdfViewer.module.css-XkllYXZg.js";import"./PdfViewerAnnotationLayer-76_gEZ3A.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ct7XgwyB.js";import"./PdfViewerOutlineSidebar-DMqUpqIP.js";import"./PdfViewerSidebarHeader-Ggq_HtYC.js";import"./useBaseUiId-Ddck3Zgv.js";import"./useControlled-DHdXh0yp.js";import"./CompositeRoot-Dh-8gF8y.js";import"./CompositeItem-Cs1O47Aq.js";import"./ToolbarRootContext-097dpJrh.js";import"./composite-n7_MOsSq.js";import"./svgIconContainer-DIp-XZwm.js";import"./PdfViewerSearchBar-CAo7kN2i.js";import"./chevron-up-C50MppHG.js";import"./chevron-down-DJEtRyIF.js";import"./cross-DYQhBJHJ.js";import"./PdfViewerSidebar-DpQZiWFQ.js";import"./index-cpYh8GYP.js";import"./index-FqdShp73.js";import"./index-DqyvE86A.js";import"./PdfViewerToolbar-D03z_1rb.js";import"./Button-B-NFgFRe.js";import"./chevron-right-D5Y3ct8D.js";import"./Input-CpyRhfdw.js";import"./search-C1KQWKmH.js";import"./spin-C1c-Lj1D.js";import"./error-DYDpYg5Z.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4083/84e2718200501d4955e47b499ab4af51dbcf9cd4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
