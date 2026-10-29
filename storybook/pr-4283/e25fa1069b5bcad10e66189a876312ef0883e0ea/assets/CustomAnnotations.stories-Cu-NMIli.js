import{j as n}from"./iframe-CYk-VOyX.js";import{B as e}from"./BasePdfViewer-CbIhqmXY.js";import"./preload-helper-SkgcqAwO.js";import"./index-SBfcRZ8A.js";import"./BasePdfViewer.module.css-BRROD9pK.js";import"./PdfViewerAnnotationLayer-Dr559Glk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DmjdvCCb.js";import"./PdfViewerOutlineSidebar-CPZJy2cR.js";import"./PdfViewerSidebarHeader-B2Dqcg3T.js";import"./useBaseUiId-DaFkg2Hs.js";import"./useControlled-C7TGm_r4.js";import"./CompositeRoot-CZBch66U.js";import"./CompositeItem-CaDSOm5y.js";import"./ToolbarRootContext--t9DiEt8.js";import"./composite-BKwpvwkR.js";import"./svgIconContainer-jVuUMFBU.js";import"./PdfViewerSearchBar-_cW2qg5J.js";import"./chevron-up-Dk7oDl7e.js";import"./chevron-down-Bs06bZ_z.js";import"./cross-DMsanrWV.js";import"./PdfViewerSidebar-DcuU8g_j.js";import"./index-DHPPBEA9.js";import"./index-C_yRwNB9.js";import"./index-BIIvDw_e.js";import"./PdfViewerToolbar-C5VeHhko.js";import"./Button-CExSo-UX.js";import"./chevron-right-PpliS53s.js";import"./Input-D-JL81JO.js";import"./search-cR64-3Tm.js";import"./spin-DyUoKwhU.js";import"./error-zC5vfcSr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4283/e25fa1069b5bcad10e66189a876312ef0883e0ea/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
