import{j as n}from"./iframe-C_zjGY3J.js";import{B as e}from"./BasePdfViewer-CnstEd-n.js";import"./preload-helper-CxQirRCn.js";import"./index-DKxF60He.js";import"./BasePdfViewer.module.css-BTEbx6l2.js";import"./PdfViewerAnnotationLayer-CaAWAq8M.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOOJSaI9.js";import"./PdfViewerOutlineSidebar-QI7A1R4_.js";import"./PdfViewerSidebarHeader-2oRwYz6a.js";import"./useBaseUiId-B_8kV6Oo.js";import"./useControlled-Cax61rbp.js";import"./CompositeRoot-FvSK3I_g.js";import"./CompositeItem-LZfgl15E.js";import"./ToolbarRootContext-CDpaEjw6.js";import"./composite-Cr4kgIEQ.js";import"./svgIconContainer-D5MQxCYm.js";import"./PdfViewerSearchBar-pD_VNEbD.js";import"./chevron-up-C0TyuGk4.js";import"./chevron-down-DXGDx1Zu.js";import"./cross-CQU2s8jh.js";import"./PdfViewerSidebar-Jwth_AHM.js";import"./index-B0AlpjVO.js";import"./index-9SuB44sP.js";import"./index-DHjZHyf_.js";import"./PdfViewerToolbar-CVQ10YQg.js";import"./Button-CKW0-13G.js";import"./chevron-right-DepHxSqI.js";import"./Input-DcJi9KF0.js";import"./search-BzCll0d5.js";import"./spin-Dz4s1qj7.js";import"./error-D5GOl81y.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/28fe852c6a306362cb094a0aa21beb8efec2382d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
