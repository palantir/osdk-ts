import{j as n}from"./iframe-DJaET-4W.js";import{B as e}from"./BasePdfViewer-BucpqJ2_.js";import"./preload-helper-BLsfXLTb.js";import"./index-CXAjf3Lj.js";import"./BasePdfViewer.module.css-Byl8XziD.js";import"./PdfViewerAnnotationLayer-BeDbuGg2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D0qPv1ky.js";import"./PdfViewerOutlineSidebar-B6Bbttaj.js";import"./PdfViewerSidebarHeader-8Ap4FMGi.js";import"./useBaseUiId-C64d8rt1.js";import"./useControlled-CUKxlT-G.js";import"./CompositeRoot-CQnKrQdm.js";import"./CompositeItem-DfP3tBe3.js";import"./ToolbarRootContext-geDYh26O.js";import"./composite-DJhk57sk.js";import"./svgIconContainer-ZOxHgtx1.js";import"./PdfViewerSearchBar-D6Kj4DUH.js";import"./chevron-up-3GBfYp9-.js";import"./chevron-down-LDtg690T.js";import"./cross-DREoRCVi.js";import"./PdfViewerSidebar-DcQRWDcC.js";import"./index-Cy507Wuk.js";import"./index-DBzGUm2T.js";import"./index-BtLQLn9f.js";import"./PdfViewerToolbar-C-6idwzq.js";import"./Button-BMrMSDOy.js";import"./chevron-right-QCkY0RnE.js";import"./Input-Ckb4ze0a.js";import"./search-DhdNxuaM.js";import"./spin-K05C1dXj.js";import"./error-BfaKs4G2.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4060/4b742c30e9bd1ea5d4ee8180d5850149b4ee5457/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
