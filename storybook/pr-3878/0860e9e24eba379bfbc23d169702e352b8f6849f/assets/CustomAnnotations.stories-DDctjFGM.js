import{j as n}from"./iframe-DLHR6L4Z.js";import{B as e}from"./BasePdfViewer-PoWXMK-Y.js";import"./preload-helper-Dx-zoqBZ.js";import"./index-Ci6l6bLg.js";import"./BasePdfViewer.module.css-BTiwvq5r.js";import"./PdfViewerAnnotationLayer-Sa2wkT6X.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C7NGS4Mg.js";import"./PdfViewerOutlineSidebar-DoS8tIox.js";import"./PdfViewerSidebarHeader-CIjMn2pz.js";import"./useBaseUiId-1yQPi4Ok.js";import"./useControlled-CyfyjGCX.js";import"./CompositeRoot-BlNlniem.js";import"./CompositeItem-Uc_jxWPR.js";import"./ToolbarRootContext-huk_G4xt.js";import"./composite-DufSPfDq.js";import"./svgIconContainer-OFY1tmQv.js";import"./PdfViewerSearchBar-DE5knLXx.js";import"./chevron-up-CDsKfcLT.js";import"./chevron-down-CLyH651g.js";import"./cross-Dr9ey-no.js";import"./PdfViewerSidebar-hSl5bK5E.js";import"./index-DPyGU-iS.js";import"./index-Cty81kva.js";import"./index-qvggJvKY.js";import"./PdfViewerToolbar-CRS2_zt0.js";import"./Button-Bfsbp0Vn.js";import"./chevron-right-CjHK7AXO.js";import"./Input-DPBWJEz5.js";import"./search-BKzV_clV.js";import"./spin-CXZ8-Dbn.js";import"./error-CPzqX2rB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/0860e9e24eba379bfbc23d169702e352b8f6849f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
