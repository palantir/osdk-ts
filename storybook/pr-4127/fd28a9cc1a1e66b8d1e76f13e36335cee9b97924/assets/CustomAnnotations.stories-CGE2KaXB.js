import{j as n}from"./iframe-BqOAaVYX.js";import{B as e}from"./BasePdfViewer-DGxqb0OY.js";import"./preload-helper-DfAqa6Ns.js";import"./index-hhMnxhy8.js";import"./BasePdfViewer.module.css-D0SokHgJ.js";import"./PdfViewerAnnotationLayer-BWCkSc7t.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-V36GARDv.js";import"./PdfViewerOutlineSidebar-Dh-_B008.js";import"./PdfViewerSidebarHeader-1P7xVe0W.js";import"./useBaseUiId-D8PXSJwD.js";import"./useControlled-Cw0rstUZ.js";import"./CompositeRoot-_ulds24G.js";import"./CompositeItem-lsMfNC7P.js";import"./ToolbarRootContext-Db3ZHaqK.js";import"./composite-FQnt6Ug_.js";import"./svgIconContainer-fHQR-WGO.js";import"./PdfViewerSearchBar-COtMZNl3.js";import"./chevron-up-CX9ShSqo.js";import"./chevron-down-CWxaKaem.js";import"./cross-VDw2oJTP.js";import"./PdfViewerSidebar-ufeQALtA.js";import"./index-l3AZM9tW.js";import"./index-D2HyYCxp.js";import"./index-W1jvd9mH.js";import"./PdfViewerToolbar-BL4n4zEd.js";import"./Button-DLn-Tp2Y.js";import"./chevron-right-B8XlGj8M.js";import"./Input-DGoYfUS_.js";import"./search-BrbOR0sP.js";import"./spin-CEnY82oF.js";import"./error-BmfSiLn5.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4127/fd28a9cc1a1e66b8d1e76f13e36335cee9b97924/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
