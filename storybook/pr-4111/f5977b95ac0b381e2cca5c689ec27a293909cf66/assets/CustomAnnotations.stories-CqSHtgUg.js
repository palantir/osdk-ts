import{j as n}from"./iframe-CSmstThV.js";import{B as e}from"./BasePdfViewer-DbsRPGmK.js";import"./preload-helper-CQQlEffD.js";import"./index-L8cshBl8.js";import"./BasePdfViewer.module.css-B0W2cHK9.js";import"./PdfViewerAnnotationLayer-CDHZUM-d.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cqv9WK5K.js";import"./PdfViewerOutlineSidebar-H9uyRIKY.js";import"./PdfViewerSidebarHeader-CTApuBBK.js";import"./useBaseUiId-BiI5AoOG.js";import"./useControlled-CNZAIfTk.js";import"./CompositeRoot-gxqN6m5H.js";import"./CompositeItem-BaYmn_Wk.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./composite-D-st0uki.js";import"./svgIconContainer-BHO01tKx.js";import"./PdfViewerSearchBar-CyyCvymj.js";import"./chevron-up-BVjnXGuR.js";import"./chevron-down-Dn4WYVvB.js";import"./cross-D9KoCzL1.js";import"./PdfViewerSidebar-Dhv0BGII.js";import"./index-CQ6HYfiM.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./PdfViewerToolbar-COnVybMt.js";import"./Button-DI_WLWpV.js";import"./chevron-right-DxmM9qlR.js";import"./Input-1EXkKDbs.js";import"./search-DOAaZcfu.js";import"./spin-BPz0e_a_.js";import"./error-Cu8ttO5d.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4111/f5977b95ac0b381e2cca5c689ec27a293909cf66/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
