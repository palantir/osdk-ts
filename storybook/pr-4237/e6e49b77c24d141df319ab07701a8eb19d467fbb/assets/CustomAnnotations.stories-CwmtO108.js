import{j as n}from"./iframe-DhSxUQkX.js";import{B as e}from"./BasePdfViewer-DjrYdBt6.js";import"./preload-helper-sXoL7niC.js";import"./index-BvSFmfl4.js";import"./BasePdfViewer.module.css-BuDBqh7X.js";import"./PdfViewerAnnotationLayer-B51-goZ6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CMXssfaa.js";import"./PdfViewerOutlineSidebar-BS2Xhqa5.js";import"./PdfViewerSidebarHeader-qxyg327Z.js";import"./useBaseUiId-CZTbsmZg.js";import"./useControlled-BFOHrubs.js";import"./CompositeRoot-LSFvc4CL.js";import"./CompositeItem-B0iGyW5R.js";import"./ToolbarRootContext-DCHPkWcS.js";import"./composite-CVjZUaK1.js";import"./svgIconContainer-Cv6Vlj7K.js";import"./PdfViewerSearchBar-DE0F3Kv5.js";import"./chevron-up-Cm8sHLff.js";import"./chevron-down-DgOK1tfP.js";import"./cross-DPp5FPP-.js";import"./PdfViewerSidebar-DiR2Z0o9.js";import"./index-DS-3NohG.js";import"./index-CIxCim47.js";import"./index-DqmtWcN5.js";import"./PdfViewerToolbar-DOd0ippP.js";import"./Button-WT-hQp_M.js";import"./chevron-right-BdkF1rM6.js";import"./Input-CZERibHA.js";import"./search-DUqXaRZn.js";import"./spin-Done8Qwx.js";import"./error-BkDo7z_m.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/e6e49b77c24d141df319ab07701a8eb19d467fbb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
