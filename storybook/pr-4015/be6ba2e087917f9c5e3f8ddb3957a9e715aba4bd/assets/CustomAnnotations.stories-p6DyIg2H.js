import{j as n}from"./iframe-BEJEJisA.js";import{B as e}from"./BasePdfViewer-Cul4l8zD.js";import"./preload-helper-CTiopNJo.js";import"./index-1N58UMzJ.js";import"./BasePdfViewer.module.css-CLMoMlgE.js";import"./PdfViewerAnnotationLayer-hbySagAd.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-kp0xtDJ9.js";import"./PdfViewerOutlineSidebar-B5Zl1fqo.js";import"./PdfViewerSidebarHeader-_1nsi7gn.js";import"./useBaseUiId-Ew8LxSgO.js";import"./useControlled-FA-c2Sau.js";import"./CompositeRoot-C86FSW08.js";import"./CompositeItem-B4OpLzis.js";import"./ToolbarRootContext-NNa6yEkX.js";import"./composite-KwTbpSJb.js";import"./svgIconContainer-DsO6erGI.js";import"./PdfViewerSearchBar-gSpRIy0Y.js";import"./chevron-up-D-Q_6_7V.js";import"./chevron-down-USDozdCe.js";import"./cross-BjrVNHd5.js";import"./PdfViewerSidebar--6Vkym2K.js";import"./index-BgY1n9at.js";import"./index-DCG3LK_H.js";import"./index-BMTQnMoQ.js";import"./PdfViewerToolbar-dUGTaqGE.js";import"./Button-BNegRBwl.js";import"./chevron-right-CRC0a4Qj.js";import"./Input-Dc1pIxfK.js";import"./search-CrTCcvos.js";import"./spin-DdN4wbE2.js";import"./error-C4eZ36G4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/be6ba2e087917f9c5e3f8ddb3957a9e715aba4bd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
