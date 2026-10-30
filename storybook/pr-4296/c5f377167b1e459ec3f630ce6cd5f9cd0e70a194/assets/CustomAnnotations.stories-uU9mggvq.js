import{j as n}from"./iframe-X83lPBeu.js";import{B as e}from"./BasePdfViewer-BTP_iVIk.js";import"./preload-helper-B2sKPI8B.js";import"./index-BQDctdoe.js";import"./BasePdfViewer.module.css-BYKvB7R6.js";import"./PdfViewerAnnotationLayer-BsS8RunE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-0HUkeWYi.js";import"./PdfViewerOutlineSidebar-DtvqJFnI.js";import"./PdfViewerSidebarHeader-BghUEAKU.js";import"./useBaseUiId-CXpBK7Xe.js";import"./useControlled-CRW8vka0.js";import"./CompositeRoot-Bsa-yt3y.js";import"./CompositeItem-DmkSf1ho.js";import"./ToolbarRootContext-DNKVBjDF.js";import"./composite-C3KQbPWK.js";import"./svgIconContainer-CrLLWaC0.js";import"./PdfViewerSearchBar-NkBW_GNw.js";import"./chevron-up-B0W0A1fi.js";import"./chevron-down-C6VkVqqF.js";import"./cross-DESSfx8f.js";import"./PdfViewerSidebar-DmRuhZHL.js";import"./index-ArSP-sSJ.js";import"./index-CC_w3gYY.js";import"./index-DeDXgDsX.js";import"./PdfViewerToolbar-BWLGi_x1.js";import"./Button-C6LVoI3t.js";import"./chevron-right-B8o-F-0w.js";import"./Input-C5377Qeu.js";import"./search-CGhIjKAK.js";import"./spin-D3_oGM7m.js";import"./error-gzJnjayk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4296/c5f377167b1e459ec3f630ce6cd5f9cd0e70a194/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
