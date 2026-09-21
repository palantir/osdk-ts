import{j as n}from"./iframe-BLH-rzjX.js";import{B as e}from"./BasePdfViewer-Bo7rWmOU.js";import"./preload-helper-Boseizqx.js";import"./index-BshiJ0vb.js";import"./BasePdfViewer.module.css-DTQxah4m.js";import"./PdfViewerAnnotationLayer-D4lhrbmT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_5MznKy7.js";import"./PdfViewerOutlineSidebar-CZCct772.js";import"./PdfViewerSidebarHeader-hJHcOFSp.js";import"./useBaseUiId-_L7E6isP.js";import"./useControlled-DoMCNvxt.js";import"./CompositeRoot-h8Sldw2w.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./composite-CJF2SW-C.js";import"./svgIconContainer-ClFD8O3h.js";import"./PdfViewerSearchBar-CRPIU6eW.js";import"./chevron-up-CHdoJCyJ.js";import"./chevron-down-gdTU0sCy.js";import"./cross-CjxN7NXy.js";import"./PdfViewerSidebar-DAayhDiI.js";import"./index-D07nHwth.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./PdfViewerToolbar-B2NCH-gb.js";import"./Button-Cb7__wFY.js";import"./chevron-right-C3H8dwVY.js";import"./Input-ChiRpiSd.js";import"./search-Dcpgl82t.js";import"./spin-CJVFbEAy.js";import"./error-CxjKCqiV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4047/ca7230b4d3045e71cdf0747d8b0979d5ee6496fb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
