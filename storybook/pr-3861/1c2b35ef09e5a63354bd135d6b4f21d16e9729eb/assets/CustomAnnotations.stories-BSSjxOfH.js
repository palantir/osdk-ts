import{j as n}from"./iframe-BXNko62s.js";import{B as e}from"./BasePdfViewer-BfgG6Iax.js";import"./preload-helper-Bj6UNjqi.js";import"./index-BraeF99A.js";import"./BasePdfViewer.module.css-LoMVtG8-.js";import"./PdfViewerAnnotationLayer-DLOHink5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CtZYnbHE.js";import"./PdfViewerOutlineSidebar-DE6vH6ou.js";import"./PdfViewerSidebarHeader-DVmBC5nq.js";import"./useBaseUiId-Ca98QWO9.js";import"./useControlled-B2FQFptp.js";import"./CompositeRoot-LFz6s7of.js";import"./CompositeItem-BnI6v8nN.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./composite-C9CWzIa9.js";import"./svgIconContainer-DY8ASQOr.js";import"./PdfViewerSearchBar-COj0IKoz.js";import"./chevron-up-CXqsWlQ8.js";import"./chevron-down-Za9QV_62.js";import"./cross-CxMC5EUY.js";import"./PdfViewerSidebar-BfZM3aJE.js";import"./index-hSkBF6vZ.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./PdfViewerToolbar-CRcRxyd7.js";import"./Button-Cb25ceXV.js";import"./chevron-right-B1kP6VLM.js";import"./Input-DXEo1WM0.js";import"./search-0j6eRv30.js";import"./spin-CE50n_cx.js";import"./error-CgTFtvP9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/1c2b35ef09e5a63354bd135d6b4f21d16e9729eb/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
