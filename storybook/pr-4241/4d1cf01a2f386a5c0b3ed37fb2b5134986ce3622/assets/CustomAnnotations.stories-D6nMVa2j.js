import{j as n}from"./iframe-DfEkohu4.js";import{B as e}from"./BasePdfViewer-BVsdd1Ch.js";import"./preload-helper-DFhwYWPX.js";import"./index-BScMX4pI.js";import"./BasePdfViewer.module.css-ChwSeEq0.js";import"./PdfViewerAnnotationLayer-BjHk08vS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtmgUMv9.js";import"./PdfViewerOutlineSidebar-2M58pw3P.js";import"./PdfViewerSidebarHeader-BHS7lX3C.js";import"./useBaseUiId-B77SsLeT.js";import"./useControlled-BtbuRmOW.js";import"./CompositeRoot-BHbMOPqa.js";import"./CompositeItem-Efavp-9X.js";import"./ToolbarRootContext-CElxzA4r.js";import"./composite-Bps_FR72.js";import"./svgIconContainer-52IA31OT.js";import"./PdfViewerSearchBar-DJB2UIqR.js";import"./chevron-up-BLj9cjIl.js";import"./chevron-down-BPKdn-wb.js";import"./cross-BPfWpbhR.js";import"./PdfViewerSidebar-B8MbVrRU.js";import"./index-CFbhSp4o.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./PdfViewerToolbar-D15abTeq.js";import"./Button-hRgK4Dbu.js";import"./chevron-right-CVvN9QKn.js";import"./Input-BPcgfpFu.js";import"./search-B6VKD1Dj.js";import"./spin-BzgASfk-.js";import"./error-CvHPy682.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/4d1cf01a2f386a5c0b3ed37fb2b5134986ce3622/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
