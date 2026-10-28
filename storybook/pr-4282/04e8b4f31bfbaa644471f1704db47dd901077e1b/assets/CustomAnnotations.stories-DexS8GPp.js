import{j as n}from"./iframe-DWrTLUp6.js";import{B as e}from"./BasePdfViewer-CQGG6Ps_.js";import"./preload-helper-G5GldQrR.js";import"./index-tEnhVYEp.js";import"./BasePdfViewer.module.css-CGbDwVYN.js";import"./PdfViewerAnnotationLayer-BCxMXsfC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCzHY7j0.js";import"./PdfViewerOutlineSidebar-CgOC2PIB.js";import"./PdfViewerSidebarHeader-b-Zj49OR.js";import"./useBaseUiId-X8UvLlac.js";import"./useControlled-BL4uBJXc.js";import"./CompositeRoot-r3dy_26P.js";import"./CompositeItem-BpSxYl_N.js";import"./ToolbarRootContext-Bh1zwv5x.js";import"./composite-CZ2VobqK.js";import"./svgIconContainer-BsgOYiaE.js";import"./PdfViewerSearchBar-CWBBcaUQ.js";import"./chevron-up-rKTYpzDt.js";import"./chevron-down-BdqS2CCw.js";import"./cross-rPpE888H.js";import"./PdfViewerSidebar-DWn7Z5we.js";import"./index-C7nt3-Ul.js";import"./index-m17_hvWN.js";import"./index-DtPEGSb3.js";import"./PdfViewerToolbar-CpjrM1kn.js";import"./Button-kvP0U3yl.js";import"./chevron-right-DUm10zqS.js";import"./Input-Dd76dU6P.js";import"./search-Cj067yfV.js";import"./spin-DnJxdbqx.js";import"./error-mT38HeTS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4282/04e8b4f31bfbaa644471f1704db47dd901077e1b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
