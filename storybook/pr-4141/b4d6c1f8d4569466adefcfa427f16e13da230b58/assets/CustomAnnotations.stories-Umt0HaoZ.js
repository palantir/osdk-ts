import{j as n}from"./iframe-Bet7ZyCm.js";import{B as e}from"./BasePdfViewer-Dp6u7osA.js";import"./preload-helper-BUkBrZyY.js";import"./index-DjVLxSFI.js";import"./BasePdfViewer.module.css-CxoIMRaj.js";import"./PdfViewerAnnotationLayer-BDeNeYkn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiPLi4zb.js";import"./PdfViewerOutlineSidebar-CLE77pOS.js";import"./PdfViewerSidebarHeader-Cjv_jJ8V.js";import"./useBaseUiId-CsxMin3O.js";import"./useControlled-COCV5_w3.js";import"./CompositeRoot-C-l802JC.js";import"./CompositeItem-DTquphkU.js";import"./ToolbarRootContext-DNj0Wk9x.js";import"./composite-CRapEzeJ.js";import"./svgIconContainer-Barh-7SS.js";import"./PdfViewerSearchBar-DY-VZ0s8.js";import"./chevron-up-BXIGlwB-.js";import"./chevron-down-5KX1Vgx1.js";import"./cross-BeELKFUT.js";import"./PdfViewerSidebar-CsUFj65W.js";import"./index-BcSOkjj6.js";import"./index-Dbf65m0z.js";import"./index-BTuCJIed.js";import"./PdfViewerToolbar-DGjNV2Mu.js";import"./Button-DA30xwtA.js";import"./chevron-right-B0ZgRfaY.js";import"./Input-C3dR_yK9.js";import"./search-DarFPo_N.js";import"./spin-BeiACEdq.js";import"./error-Y0ypiKIG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4141/b4d6c1f8d4569466adefcfa427f16e13da230b58/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
