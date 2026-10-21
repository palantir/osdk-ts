import{j as n}from"./iframe-Bg0i_UAO.js";import{B as e}from"./BasePdfViewer-CALTwNUW.js";import"./preload-helper-bomzM5Jo.js";import"./index-iuNvYGUj.js";import"./BasePdfViewer.module.css-B2NC8MHn.js";import"./PdfViewerAnnotationLayer-OjD5R0cO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-25vbzKe9.js";import"./PdfViewerOutlineSidebar-VPPlmZIt.js";import"./PdfViewerSidebarHeader-BuEA0FEX.js";import"./useBaseUiId-Dy2tLJKh.js";import"./useControlled-BYTWKxAR.js";import"./CompositeRoot-C3CwfXtV.js";import"./CompositeItem-DcA0lzjF.js";import"./ToolbarRootContext-BrU5VQqZ.js";import"./composite-DU2hn-v2.js";import"./svgIconContainer-458A5wVg.js";import"./PdfViewerSearchBar-ClWQl__D.js";import"./chevron-up-B4yy4nu1.js";import"./chevron-down-WqwXZksn.js";import"./cross-DYXULJqv.js";import"./PdfViewerSidebar-Dqr2Skdn.js";import"./index-DdfZaivF.js";import"./index-BNlKleF-.js";import"./index-DmhiGDhn.js";import"./PdfViewerToolbar-BS41D-KK.js";import"./Button-BG7UnPBU.js";import"./chevron-right-DMYFjuWB.js";import"./Input-DGqcQ9G-.js";import"./search-FIM5R_Xb.js";import"./spin-DagrF9id.js";import"./error-DVM1iMsf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/b4b6500bae675c79305a9c6f252a6e7a9a8a092e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
