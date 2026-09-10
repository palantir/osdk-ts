import{j as n}from"./iframe-ByMeZtzX.js";import{B as e}from"./BasePdfViewer-BZS8pvOR.js";import"./preload-helper-CKCWlQAf.js";import"./index-MjIH22RC.js";import"./BasePdfViewer.module.css-CLBd_K4I.js";import"./PdfViewerAnnotationLayer-B4m9_FV0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cfc_MZAC.js";import"./PdfViewerOutlineSidebar-DXbsDSkQ.js";import"./PdfViewerSidebarHeader-CbeXauXW.js";import"./useBaseUiId-COE4qdfZ.js";import"./useControlled-DCuR4lHr.js";import"./CompositeRoot-Ci5hTCFp.js";import"./CompositeItem-CEWc-TNz.js";import"./ToolbarRootContext-B0lEY-MF.js";import"./composite-BJmqHe58.js";import"./svgIconContainer-BWYJe8Lc.js";import"./PdfViewerSearchBar-BbAVV4xS.js";import"./chevron-up-D8XQAZyy.js";import"./chevron-down-Chsl7nyR.js";import"./cross-BL14zVVR.js";import"./PdfViewerSidebar-CW1jO6CV.js";import"./index-B41_CCIn.js";import"./index-C5DhJsVj.js";import"./index-CGEFtaju.js";import"./PdfViewerToolbar-B2_XQBml.js";import"./Button-CfzUE4zU.js";import"./chevron-right-BzMtgKQg.js";import"./Input-Cu1JHp0_.js";import"./search-Cq1vvGyL.js";import"./spin-L9CnlxsJ.js";import"./error-yKJFbcKE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/39c66b242a51520b8b70141db0f3dc8f04e93fb6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
