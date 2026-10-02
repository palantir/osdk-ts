import{j as n}from"./iframe-BolfAo4P.js";import{B as e}from"./BasePdfViewer-BRkG-3ra.js";import"./preload-helper-ByLp_rEH.js";import"./index-Dmp4oRqW.js";import"./BasePdfViewer.module.css-BXLqQIr3.js";import"./PdfViewerAnnotationLayer-BexI6Eox.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B1fgIlxN.js";import"./PdfViewerOutlineSidebar-C9vq7pS6.js";import"./PdfViewerSidebarHeader-D3lzFB7B.js";import"./useBaseUiId-DvZ-ac1w.js";import"./useControlled-C5FT7OgD.js";import"./CompositeRoot-B2zEO4pR.js";import"./CompositeItem-BQgJHL6C.js";import"./ToolbarRootContext-Dsfyi3tb.js";import"./composite-kotVvYj1.js";import"./svgIconContainer-zqDwx0Og.js";import"./PdfViewerSearchBar-CUS2FxId.js";import"./chevron-up-DQQUjxtC.js";import"./chevron-down-Bj7fILeX.js";import"./cross-CPB91upb.js";import"./PdfViewerSidebar-DW9W04sl.js";import"./index-DXDGkGFP.js";import"./index-Bt9kKuNp.js";import"./index-Cea80THD.js";import"./PdfViewerToolbar-DpI6noaV.js";import"./Button-D-ABdEsl.js";import"./chevron-right--IBrR7Q_.js";import"./Input-DnQW0UEK.js";import"./search-Sp-9ghy3.js";import"./spin-CIeuJ9yU.js";import"./error-Dnl49oZI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/6fd6ca473d204ae59d4f0d6a19e07809e2f658a4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
