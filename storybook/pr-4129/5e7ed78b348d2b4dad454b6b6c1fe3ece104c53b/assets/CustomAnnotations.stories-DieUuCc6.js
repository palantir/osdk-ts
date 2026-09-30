import{j as n}from"./iframe-DcZIbII1.js";import{B as e}from"./BasePdfViewer-DVOkoG1K.js";import"./preload-helper-CtJBcs4m.js";import"./index-CknXFCuG.js";import"./BasePdfViewer.module.css-h89CJZSz.js";import"./PdfViewerAnnotationLayer-BmxrppdV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CPhOg-_V.js";import"./PdfViewerOutlineSidebar-D9kVOJfc.js";import"./PdfViewerSidebarHeader-BvJrnDIZ.js";import"./useBaseUiId-Bwnxqilm.js";import"./useControlled-CtuIn0tc.js";import"./CompositeRoot-DHtGtgFZ.js";import"./CompositeItem-0HlJZQq8.js";import"./ToolbarRootContext-DW70chtw.js";import"./composite-im6S2sQa.js";import"./svgIconContainer-CCPtMkY_.js";import"./PdfViewerSearchBar-R4AaiCgX.js";import"./chevron-up-DJd1hGhJ.js";import"./chevron-down-CgbkcCiQ.js";import"./cross-B7rc_3vM.js";import"./PdfViewerSidebar-C6J6_1pd.js";import"./index-DSHI6oH0.js";import"./index-Dkeo5kI9.js";import"./index-B9y2Cfx6.js";import"./PdfViewerToolbar-D_LeBPfZ.js";import"./Button-fbYfSW4g.js";import"./chevron-right-Cx3Vp_dU.js";import"./Input-DgnbxA8W.js";import"./search-ByPzgBRT.js";import"./spin-CF4LYkF5.js";import"./error-CfhtcL_7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4129/5e7ed78b348d2b4dad454b6b6c1fe3ece104c53b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
