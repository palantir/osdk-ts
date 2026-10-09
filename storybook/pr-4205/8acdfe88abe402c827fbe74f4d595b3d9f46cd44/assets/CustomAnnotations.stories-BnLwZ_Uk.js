import{j as n}from"./iframe-CMfq1HPL.js";import{B as e}from"./BasePdfViewer-DXx2xWU0.js";import"./preload-helper-DoN82JnL.js";import"./index-ZtSJidyR.js";import"./BasePdfViewer.module.css-Co-QEI9X.js";import"./PdfViewerAnnotationLayer-Blg2wn3b.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-LdDKjDi6.js";import"./PdfViewerOutlineSidebar-nA6rcp4r.js";import"./PdfViewerSidebarHeader-CnP1LE9M.js";import"./useBaseUiId-Doagaslz.js";import"./useControlled-DxbWxp5f.js";import"./CompositeRoot-BjEAhuda.js";import"./CompositeItem-4nYPF74E.js";import"./ToolbarRootContext-DbEzCTeH.js";import"./composite-BMLB8REs.js";import"./svgIconContainer-BrnRNdI4.js";import"./PdfViewerSearchBar-C1Gt9zyJ.js";import"./chevron-up-CchJ2ft7.js";import"./chevron-down-BB1rr6dV.js";import"./cross-DI771Rnq.js";import"./PdfViewerSidebar-ceLqsOsJ.js";import"./index-BOBP5vHC.js";import"./index-Cg-_dyYz.js";import"./index-B0zWLnpw.js";import"./PdfViewerToolbar-BhOqGt8P.js";import"./Button-D9k27imK.js";import"./chevron-right-Cl3BwTEY.js";import"./Input-DAfCa_F_.js";import"./search-CFS1aLLr.js";import"./spin-BAI1MhF9.js";import"./error-CdY5cnSm.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4205/8acdfe88abe402c827fbe74f4d595b3d9f46cd44/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
