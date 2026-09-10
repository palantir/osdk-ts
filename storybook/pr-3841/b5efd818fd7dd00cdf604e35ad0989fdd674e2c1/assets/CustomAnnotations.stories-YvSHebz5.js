import{j as n}from"./iframe-B9IeBNGg.js";import{B as e}from"./BasePdfViewer-B4g0gVVi.js";import"./preload-helper-ClkC783W.js";import"./index-DybWhixB.js";import"./BasePdfViewer.module.css-C1ITWOYI.js";import"./PdfViewerAnnotationLayer-CcE_5yJu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJb9CCgd.js";import"./PdfViewerOutlineSidebar-CifHAQvl.js";import"./PdfViewerSidebarHeader-DGvsVJ8a.js";import"./useBaseUiId-CH6EGP3F.js";import"./useControlled-DKviyNQT.js";import"./CompositeRoot-YP594CFC.js";import"./CompositeItem-c0dv1mNX.js";import"./ToolbarRootContext-B71dHQV4.js";import"./composite-boJAotvg.js";import"./svgIconContainer-BmjXdC_z.js";import"./PdfViewerSearchBar-DfoGQFwc.js";import"./chevron-up-DbfTWqEA.js";import"./chevron-down-CKtjlwoI.js";import"./cross-BHBvGy8S.js";import"./PdfViewerSidebar-DzsyjxVc.js";import"./index-DD1785H2.js";import"./index-CnuXrNj3.js";import"./index-CJqGIAUW.js";import"./PdfViewerToolbar-C1A9S4sO.js";import"./Button-CoXfleKP.js";import"./chevron-right-kUh_6NOf.js";import"./Input-Iq2bz4Jn.js";import"./search-Deq1gtA1.js";import"./spin-C3fv45lV.js";import"./error-Cg3e0-pZ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/b5efd818fd7dd00cdf604e35ad0989fdd674e2c1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
