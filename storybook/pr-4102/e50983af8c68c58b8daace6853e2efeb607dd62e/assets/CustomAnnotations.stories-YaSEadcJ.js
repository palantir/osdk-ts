import{j as n}from"./iframe-CdZ1-8VD.js";import{B as e}from"./BasePdfViewer-C2S_gOBr.js";import"./preload-helper-BfsuwAVK.js";import"./index-DyOp5UTf.js";import"./BasePdfViewer.module.css-CvLsMGkX.js";import"./PdfViewerAnnotationLayer-YR5aV8KB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B7tUntpD.js";import"./PdfViewerOutlineSidebar-Cx4_wXhK.js";import"./PdfViewerSidebarHeader-B-kYrRAB.js";import"./useBaseUiId-Bn-Ngw1_.js";import"./useControlled-U2uKb9nR.js";import"./CompositeRoot-B43KT5d8.js";import"./CompositeItem-yiTSbTdQ.js";import"./ToolbarRootContext-2AFAS280.js";import"./composite-DXQ2UI8x.js";import"./svgIconContainer-BzSPbIbT.js";import"./PdfViewerSearchBar-B9GWMyxZ.js";import"./chevron-up-D-YBkt24.js";import"./chevron-down-ElNoZV5X.js";import"./cross-D0Gcop_x.js";import"./PdfViewerSidebar-BSjc_OPz.js";import"./index-BDrIE1q3.js";import"./index-B0esJxNQ.js";import"./index-DVUFOk1V.js";import"./PdfViewerToolbar-mxBKeIOn.js";import"./Button-Bt5t_54D.js";import"./chevron-right-CzYea01Z.js";import"./Input-KSBtG81T.js";import"./search-BZxjL_1A.js";import"./spin-C69F6usU.js";import"./error-C5_AkzgF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/e50983af8c68c58b8daace6853e2efeb607dd62e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
