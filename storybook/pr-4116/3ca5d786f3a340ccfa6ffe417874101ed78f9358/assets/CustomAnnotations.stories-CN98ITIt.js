import{j as n}from"./iframe-DxVz5dus.js";import{B as e}from"./BasePdfViewer-DiESzAkj.js";import"./preload-helper-dij9S3RJ.js";import"./index-C_W-VT0S.js";import"./BasePdfViewer.module.css-PzIWRFhP.js";import"./PdfViewerAnnotationLayer-CU_XgA4S.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D5phEnFU.js";import"./PdfViewerOutlineSidebar-Cm7G6rG1.js";import"./PdfViewerSidebarHeader-Vt_S4-fR.js";import"./useBaseUiId-BWXYzcoK.js";import"./useControlled-laJEGVBG.js";import"./CompositeRoot-d5etySDx.js";import"./CompositeItem-DZxjvmIc.js";import"./ToolbarRootContext-BhnwoH5s.js";import"./composite-BDVlfNwN.js";import"./svgIconContainer-ftSbGeci.js";import"./PdfViewerSearchBar-DmDqfP45.js";import"./chevron-up-CumbAUZ6.js";import"./chevron-down-CJ_JWdST.js";import"./cross-IXW3xmZm.js";import"./PdfViewerSidebar-Dbowd7E4.js";import"./index-DQFNyqTE.js";import"./index-ClRjmnyd.js";import"./index-gok66sxW.js";import"./PdfViewerToolbar-l5iA6_OV.js";import"./Button-DkKQyNy7.js";import"./chevron-right-D_SHD3cf.js";import"./Input-BLn4Lqlk.js";import"./search-C5WRo3gI.js";import"./spin-Dqjj5m5s.js";import"./error-l8hi8NpA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4116/3ca5d786f3a340ccfa6ffe417874101ed78f9358/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
