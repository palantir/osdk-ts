import{j as n}from"./iframe-C-srjCzr.js";import{B as e}from"./BasePdfViewer-83lRLegD.js";import"./preload-helper-CdgKYpfH.js";import"./index-Bzj5y-57.js";import"./BasePdfViewer.module.css-DOTfBZW1.js";import"./PdfViewerAnnotationLayer-Spk38gMJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-AkgS8Ef_.js";import"./PdfViewerOutlineSidebar-Ck9_C7h1.js";import"./PdfViewerSidebarHeader-CefTlIni.js";import"./useBaseUiId-BU2Bdgfn.js";import"./useControlled-BtWeYBTy.js";import"./CompositeRoot-D6_jNRLS.js";import"./CompositeItem-DAR9wsSJ.js";import"./ToolbarRootContext-8-BoPq-4.js";import"./composite--DZGcVxK.js";import"./svgIconContainer-5LtXf4dR.js";import"./PdfViewerSearchBar-BBWvJMSL.js";import"./chevron-up-D2Sv500k.js";import"./chevron-down-BhL4Yc8G.js";import"./cross-CBTpZY1-.js";import"./PdfViewerSidebar-BZBE2tfk.js";import"./index-BiBF6oIE.js";import"./index-DoGeYTl3.js";import"./index-CvZ9Zy9b.js";import"./PdfViewerToolbar-BabIop0f.js";import"./Button-FlArcDop.js";import"./chevron-right-rSJvZKJL.js";import"./Input-T5Kj4Vfz.js";import"./search-CESWhMh6.js";import"./spin-Cj9fg5Gs.js";import"./error-D5X5TRqT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/7ae123711b40dad0e8ae9f5efe53e707d336127a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
