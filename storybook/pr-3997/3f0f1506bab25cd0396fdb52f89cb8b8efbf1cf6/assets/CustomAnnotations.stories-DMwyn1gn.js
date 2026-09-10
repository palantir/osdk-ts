import{j as n}from"./iframe-C-ZowQax.js";import{B as e}from"./BasePdfViewer-CMWhujZv.js";import"./preload-helper-BwoiUuS0.js";import"./index-Be4hOd1B.js";import"./BasePdfViewer.module.css-DSdvhArm.js";import"./PdfViewerAnnotationLayer-Bfcm5jMT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChQ1o9GN.js";import"./PdfViewerOutlineSidebar-DloGqGYQ.js";import"./PdfViewerSidebarHeader-BJ0d0b6d.js";import"./useBaseUiId-z3JC-8KB.js";import"./useControlled-BMJFbw6E.js";import"./CompositeRoot-BxA4Kn0M.js";import"./CompositeItem-Boyopm8a.js";import"./ToolbarRootContext-qpt4Azan.js";import"./composite-DecXstOI.js";import"./svgIconContainer-DOvH0cqq.js";import"./PdfViewerSearchBar-CjnyKQsd.js";import"./chevron-up-BbViTdpj.js";import"./chevron-down-BB7K5vpo.js";import"./cross-Eu5MsQSw.js";import"./PdfViewerSidebar-B6g8ER8J.js";import"./index-BDVpzpby.js";import"./index-Ds7XpPFE.js";import"./index-CLAxlO_0.js";import"./PdfViewerToolbar-CobAn1uj.js";import"./Button-BvplgYnA.js";import"./chevron-right-DjBltQ-v.js";import"./Input-DBndaIW5.js";import"./search-IKabI-9R.js";import"./spin-daVQS3OR.js";import"./error-DLiiLlwM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3997/3f0f1506bab25cd0396fdb52f89cb8b8efbf1cf6/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
