import{j as n}from"./iframe-MDo3IV8i.js";import{B as e}from"./BasePdfViewer-BVuLYQCW.js";import"./preload-helper-DePZz3Cx.js";import"./index-Bd9muxHi.js";import"./BasePdfViewer.module.css-0Sr-FoBx.js";import"./PdfViewerAnnotationLayer-Co6iyT4r.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cz5ZTgek.js";import"./PdfViewerOutlineSidebar-Dy7e5rt0.js";import"./PdfViewerSidebarHeader-C1TehN1W.js";import"./useBaseUiId-DZYLQUMX.js";import"./useControlled-OtMCa810.js";import"./CompositeRoot-DdPdynNw.js";import"./CompositeItem-DLH43jaW.js";import"./ToolbarRootContext-gbgv7X5-.js";import"./composite-BLxakyPe.js";import"./svgIconContainer-Di1UT1Hh.js";import"./PdfViewerSearchBar-DycmcmXm.js";import"./chevron-up-Txw090Cf.js";import"./chevron-down-WrjnBnPA.js";import"./cross-DnJsfvPF.js";import"./PdfViewerSidebar-DfbVgTn6.js";import"./index-B_iT01JM.js";import"./index-C0Z9YQ4r.js";import"./index-DtzdNaWl.js";import"./PdfViewerToolbar-XP2fXEme.js";import"./Button-Bqg_-6Me.js";import"./chevron-right-BzGhI9Dq.js";import"./Input-DM_kQkOg.js";import"./search-DZiAT2nK.js";import"./spin-GkeoBK7Y.js";import"./error-x3VOvdeC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4220/e908456fd08efc7f5f888631dfb714d5c98bbcc2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
