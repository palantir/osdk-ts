import{j as n}from"./iframe-B5xJqKl6.js";import{B as e}from"./BasePdfViewer-CPeGz6oG.js";import"./preload-helper-Ne8FQQgc.js";import"./index-CCjfPqEl.js";import"./BasePdfViewer.module.css-CpgDilar.js";import"./PdfViewerAnnotationLayer-BfFhxY-6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DlG2L1yS.js";import"./PdfViewerOutlineSidebar-BPu0hh1S.js";import"./PdfViewerSidebarHeader-BFObbKf1.js";import"./useBaseUiId-Cotk4UXc.js";import"./useControlled-Cyv6PlBx.js";import"./CompositeRoot-seDd-uhE.js";import"./CompositeItem-CLpB1ycb.js";import"./ToolbarRootContext-C6Gq0LMZ.js";import"./composite-BjyS4v5o.js";import"./svgIconContainer-B69lMk25.js";import"./PdfViewerSearchBar-Du6DCm9P.js";import"./chevron-up-ChndvNYI.js";import"./chevron-down-Dbn0Vtw3.js";import"./cross-C5VNjLCx.js";import"./PdfViewerSidebar-CMxb-snT.js";import"./index-6kBwbZOO.js";import"./index-D_ZLDl4o.js";import"./index-CGviHfV1.js";import"./PdfViewerToolbar-rfQjYKUc.js";import"./Button-qyC1OAbF.js";import"./chevron-right-B0NYUytP.js";import"./Input-WDAACwdq.js";import"./search-DaqXKDSx.js";import"./spin-AdKR5cRg.js";import"./error-DFd4_H53.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4014/59301c5cea67034bbc1d13043dc97a1fa351a3d3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
