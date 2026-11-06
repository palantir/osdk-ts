import{j as n}from"./iframe-CT0ueW5J.js";import{B as e}from"./BasePdfViewer-Bh9LURYI.js";import"./preload-helper-CJAqHn_u.js";import"./index-BnCCNHc8.js";import"./BasePdfViewer.module.css-BVs6LeuZ.js";import"./PdfViewerAnnotationLayer-DIvCqVj6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BDc0dcov.js";import"./PdfViewerOutlineSidebar-DEJnnwAt.js";import"./PdfViewerSidebarHeader-737Pscm0.js";import"./useBaseUiId-sdgRlT1f.js";import"./useControlled-FL95Cn3G.js";import"./CompositeRoot-BotftMZY.js";import"./CompositeItem-iZ_HyQEG.js";import"./ToolbarRootContext-B-rHXnnf.js";import"./composite-DKQtJrfK.js";import"./svgIconContainer-IfNYosH4.js";import"./PdfViewerSearchBar-BypC8FnO.js";import"./chevron-up-YMHc84Sj.js";import"./chevron-down-CY0HcTjS.js";import"./cross-Cyv96KiS.js";import"./PdfViewerSidebar-B0Ui7JWG.js";import"./index-BLIQsvSb.js";import"./index-C9OqCYVT.js";import"./index-BjzTUR_u.js";import"./PdfViewerToolbar-CsHST3XF.js";import"./Button-ICT0IjE_.js";import"./chevron-right-DNxWFdYS.js";import"./Input-DATuNACb.js";import"./search-LkIpH0hE.js";import"./spin-r8Vk5o_Q.js";import"./error-D7Pe4Z66.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/7fee01b1fdb490c83e124f26678037aaddf4e450/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
