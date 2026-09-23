import{j as n}from"./iframe-Cmp4Wz_P.js";import{B as e}from"./BasePdfViewer-B--ugiao.js";import"./preload-helper-Da0vPE9s.js";import"./index-xjnGmoVb.js";import"./BasePdfViewer.module.css-CoTO2d0k.js";import"./PdfViewerAnnotationLayer-BkvB7-AU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-GDs6R5L_.js";import"./PdfViewerOutlineSidebar-DJ3mcL9D.js";import"./PdfViewerSidebarHeader-BOSjbZqC.js";import"./useBaseUiId-BcNPDCTs.js";import"./useControlled-CRN5n83g.js";import"./CompositeRoot-ChMeRNET.js";import"./CompositeItem-CC2Ai5yy.js";import"./ToolbarRootContext-_b46dMtv.js";import"./composite-hwQ1nQqf.js";import"./svgIconContainer-Clw7VTOr.js";import"./PdfViewerSearchBar-CwqprWQG.js";import"./chevron-up-DpyzxJ6t.js";import"./chevron-down-DQjw3lMC.js";import"./cross-Cpc_V52N.js";import"./PdfViewerSidebar-q4mE2SLR.js";import"./index-DLqh48ip.js";import"./index-DCv1fgBH.js";import"./index-C0uAgYnw.js";import"./PdfViewerToolbar-0TjYBvFi.js";import"./Button-CjafA2QB.js";import"./chevron-right-DgYFai9c.js";import"./Input-Dxt6Zigl.js";import"./search-DwQ9m9I4.js";import"./spin-B7UFz0WI.js";import"./error-BUufFz3W.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4027/c864787f8b3c22a090fac7874dc8837c7eaf1880/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
