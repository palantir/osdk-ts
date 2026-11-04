import{j as n}from"./iframe-BVgEXOM0.js";import{B as e}from"./BasePdfViewer-4oh5JkRu.js";import"./preload-helper-CactQ6nb.js";import"./index-8aR2Ioa8.js";import"./BasePdfViewer.module.css-rTfAfOjr.js";import"./PdfViewerAnnotationLayer-QySnewE4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D8PRvvmO.js";import"./PdfViewerOutlineSidebar-Ds2tE0Hs.js";import"./PdfViewerSidebarHeader-DPwh2aVs.js";import"./useBaseUiId-D5ZxfDH3.js";import"./useControlled-BIcpHOeT.js";import"./CompositeRoot-DfmXFzEj.js";import"./CompositeItem-DmERPWlX.js";import"./ToolbarRootContext-Cn0yRgUL.js";import"./composite-CZzw119W.js";import"./svgIconContainer-CDZ82EYf.js";import"./PdfViewerSearchBar-DArrfQk7.js";import"./chevron-up-D3mBBAI9.js";import"./chevron-down-CrDZIThJ.js";import"./cross-D1T8VNxn.js";import"./PdfViewerSidebar-C6VSxaCQ.js";import"./index-BfuXcFcC.js";import"./index-DQzPD5cl.js";import"./index-DwR3j9NI.js";import"./PdfViewerToolbar-DO8PjZJL.js";import"./Button-WKXKQ1tY.js";import"./chevron-right-DGUhyTXR.js";import"./Input-odv82aFx.js";import"./search-CxzK3q4z.js";import"./spin-C4FWmCEg.js";import"./error-B5TbSbWu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4237/39f16e6c1c90eefda508ff5ead1997eeb8fd9865/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
