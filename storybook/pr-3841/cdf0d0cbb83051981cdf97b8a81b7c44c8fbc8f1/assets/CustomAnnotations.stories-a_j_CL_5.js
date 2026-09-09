import{j as n}from"./iframe-B8cnvOYh.js";import{B as e}from"./BasePdfViewer-DDQEqoB9.js";import"./preload-helper-LnHSiiGM.js";import"./index-B3ykqjKt.js";import"./BasePdfViewer.module.css-uAoggtyV.js";import"./PdfViewerAnnotationLayer-DR68vNhi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_QA6Ln_s.js";import"./PdfViewerOutlineSidebar-BA4uGmBI.js";import"./PdfViewerSidebarHeader-CeesXUb6.js";import"./useBaseUiId-BfhiVoPE.js";import"./useControlled-Bd_oVfJe.js";import"./CompositeRoot-BGdctOya.js";import"./CompositeItem-BZ4KTjXl.js";import"./ToolbarRootContext-GOwsslzm.js";import"./composite-CpLfOjCv.js";import"./svgIconContainer-DXuXKKtJ.js";import"./PdfViewerSearchBar-DV62XDxP.js";import"./chevron-up-6l7dLMhq.js";import"./chevron-down-CKQT8552.js";import"./cross-CRSXtga6.js";import"./PdfViewerSidebar-Cgsk6OAP.js";import"./index-BDYln6VT.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./PdfViewerToolbar-S3KlWb2Q.js";import"./Button-BXcD7GGd.js";import"./chevron-right-ha15VmVM.js";import"./Input-DjBLxYPn.js";import"./search-Dy-VZ8UW.js";import"./spin-CNatU4cd.js";import"./error-Bttrd0IT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/cdf0d0cbb83051981cdf97b8a81b7c44c8fbc8f1/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
