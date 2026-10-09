import{j as n}from"./iframe-Cul2E1vG.js";import{B as e}from"./BasePdfViewer-BySBWFJg.js";import"./preload-helper--6M4Khrx.js";import"./index-Bn5VDq5b.js";import"./BasePdfViewer.module.css-CzMJ3gB6.js";import"./PdfViewerAnnotationLayer-aSjw3Pjj.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Caot4xpq.js";import"./PdfViewerOutlineSidebar-BradOUv1.js";import"./PdfViewerSidebarHeader-4BN92mw0.js";import"./useBaseUiId-BQIQ8jck.js";import"./useControlled-CzFr7QRD.js";import"./CompositeRoot-BiKaUxyj.js";import"./CompositeItem-CvRXWH1T.js";import"./ToolbarRootContext-3DRfEU0Q.js";import"./composite-SNvyYtRl.js";import"./svgIconContainer-mVJAcMp8.js";import"./PdfViewerSearchBar-BlgberjP.js";import"./chevron-up-BRfUTmQt.js";import"./chevron-down-zZ58BLda.js";import"./cross-C6zh1HjN.js";import"./PdfViewerSidebar-BYEV6I1G.js";import"./index-C8CW-UMA.js";import"./index-cnCRVpDv.js";import"./index-B39_Zfhs.js";import"./PdfViewerToolbar-h9xn2MGz.js";import"./Button-oDRXfShn.js";import"./chevron-right-AgUlQs3w.js";import"./Input-DRePQ-W6.js";import"./search-BwSeGY7Y.js";import"./spin-XJiyoZ8V.js";import"./error-Bp_j0tyg.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4206/3e5b480cf12e0d091b93d9dd8dce577fb12d95fa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
