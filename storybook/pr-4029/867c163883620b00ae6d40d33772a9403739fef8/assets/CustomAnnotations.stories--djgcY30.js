import{j as n}from"./iframe-Elh15CPO.js";import{B as e}from"./BasePdfViewer-pXiXXZCC.js";import"./preload-helper-Df_Un8ev.js";import"./index-DTYWX8Gd.js";import"./BasePdfViewer.module.css-BQK8RxCV.js";import"./PdfViewerAnnotationLayer-DgY3P1sx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BxOF8HPz.js";import"./PdfViewerOutlineSidebar-NsJ3xrx6.js";import"./PdfViewerSidebarHeader-BqnqBTfY.js";import"./useBaseUiId-DnwRjc07.js";import"./useControlled-enifNsDV.js";import"./CompositeRoot-DLmeUXo9.js";import"./CompositeItem-CzwKTDvK.js";import"./ToolbarRootContext--FtOM0jf.js";import"./composite-BSEtTnKL.js";import"./svgIconContainer-BzS94m4s.js";import"./PdfViewerSearchBar-CE3j0WNt.js";import"./chevron-up-CSkdsCL2.js";import"./chevron-down-vAkfWkS9.js";import"./cross-W2wOrtb4.js";import"./PdfViewerSidebar-BLrL_MCV.js";import"./index-B3O3SB4a.js";import"./index-Doj8EHeU.js";import"./index-DPHcjEKY.js";import"./PdfViewerToolbar-Bb9TJjXC.js";import"./Button-D4CjXtEU.js";import"./chevron-right-CDUX7ybP.js";import"./Input-C_Udp-5V.js";import"./search-O3qV3BZP.js";import"./spin-Bel4k5N4.js";import"./error-B_1KE3-h.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4029/867c163883620b00ae6d40d33772a9403739fef8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
