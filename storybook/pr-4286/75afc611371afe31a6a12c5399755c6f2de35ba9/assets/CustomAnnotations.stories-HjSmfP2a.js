import{j as n}from"./iframe-DFOR2onK.js";import{B as e}from"./BasePdfViewer-Dh2pA6k-.js";import"./preload-helper-ByXSQw30.js";import"./index-BVkLsmBt.js";import"./BasePdfViewer.module.css-CegpEJI2.js";import"./PdfViewerAnnotationLayer-ktyZj2s_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFMMCMgL.js";import"./PdfViewerOutlineSidebar-Cb15Cgg_.js";import"./PdfViewerSidebarHeader-BFm9bNAy.js";import"./useBaseUiId-Dsp7jumh.js";import"./useControlled-CtMTriq1.js";import"./CompositeRoot-s1Ihit7X.js";import"./CompositeItem-CtUWLqeJ.js";import"./ToolbarRootContext-DMxHSqVF.js";import"./composite-CRJMZ4tZ.js";import"./svgIconContainer-DjkUaIxk.js";import"./PdfViewerSearchBar-Dx8Otbwh.js";import"./chevron-up-DC98x_tH.js";import"./chevron-down-BMNaDKAR.js";import"./cross-C9kRknfx.js";import"./PdfViewerSidebar-uKPbAz8J.js";import"./index-BCk6aVbl.js";import"./index-DY_-DVUB.js";import"./index-OUX8MUQn.js";import"./PdfViewerToolbar-DUjamy02.js";import"./Button-MewiuY9J.js";import"./chevron-right-BObRZvvG.js";import"./Input-tEOQdwSz.js";import"./search-4X3AVeSP.js";import"./spin-Cgkw6PHl.js";import"./error-BAimxzZD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/75afc611371afe31a6a12c5399755c6f2de35ba9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
