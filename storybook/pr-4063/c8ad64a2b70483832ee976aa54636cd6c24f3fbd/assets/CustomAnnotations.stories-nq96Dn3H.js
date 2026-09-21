import{j as n}from"./iframe-BMrwWMZ2.js";import{B as e}from"./BasePdfViewer-DMnhZfU4.js";import"./preload-helper-DoFjuVNT.js";import"./index-B-70XFhu.js";import"./BasePdfViewer.module.css-Bd1Rzvw2.js";import"./PdfViewerAnnotationLayer-Ca9Z54uM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DkDu4xPX.js";import"./PdfViewerOutlineSidebar-QlTSCXd_.js";import"./PdfViewerSidebarHeader-BhlXpbp5.js";import"./useBaseUiId-CWfKm3xo.js";import"./useControlled-D483ZYKr.js";import"./CompositeRoot-8skUI5uI.js";import"./CompositeItem-Cr7Wo-Nu.js";import"./ToolbarRootContext-yILvKIp4.js";import"./composite-BaT2Rrgm.js";import"./svgIconContainer-kz6kEcEQ.js";import"./PdfViewerSearchBar-KY7YJvZZ.js";import"./chevron-up-wg8bUuDi.js";import"./chevron-down-Cm6BVMO0.js";import"./cross-xNU9IbBp.js";import"./PdfViewerSidebar-OqvmFtU8.js";import"./index-CE_tjB-k.js";import"./index-CSBMmUL0.js";import"./index-p-n9-sXg.js";import"./PdfViewerToolbar-BxHM9Qo8.js";import"./Button-WcPNJQ9X.js";import"./chevron-right-DjWs0iro.js";import"./Input-BMTygJUG.js";import"./search-BhHSPRHE.js";import"./spin-DN1IHlT8.js";import"./error-ZGBsqwOl.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/c8ad64a2b70483832ee976aa54636cd6c24f3fbd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
