import{j as n}from"./iframe-CLFvQKtr.js";import{B as e}from"./BasePdfViewer-Dm4Zg5XZ.js";import"./preload-helper-Dsl2rT4D.js";import"./index-Bc4ZDDw5.js";import"./BasePdfViewer.module.css-D5hNFetd.js";import"./PdfViewerAnnotationLayer-FtIDdkhQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DN62FSrE.js";import"./PdfViewerOutlineSidebar-DlXVOEEx.js";import"./PdfViewerSidebarHeader-Cil4JSXn.js";import"./useBaseUiId-DGth5ZlH.js";import"./useControlled-BsSE4zKc.js";import"./CompositeRoot-DxR4oMi5.js";import"./CompositeItem-BgZVgO8p.js";import"./ToolbarRootContext-DNG77-u2.js";import"./composite-BY1hAZzj.js";import"./svgIconContainer-DDtGdFbP.js";import"./PdfViewerSearchBar-BJWtovn9.js";import"./chevron-up-CZ1FrQ6o.js";import"./chevron-down-GxDR_faA.js";import"./cross-B8sVMx5E.js";import"./PdfViewerSidebar-UItG_b1M.js";import"./index-7BdV6mXZ.js";import"./index-BN1TScIw.js";import"./index-BVTx-0qU.js";import"./PdfViewerToolbar-DiOdqxdc.js";import"./Button-BuhAuEGs.js";import"./chevron-right-XSJHwGcV.js";import"./Input-B0zGDDc7.js";import"./search-BBKcx3DL.js";import"./spin-CPLqvIW4.js";import"./error-EDq0RnuF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4205/bd865e972ca501cb0117249adf4bd9256144f5b5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
