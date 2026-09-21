import{j as n}from"./iframe-ClmmZ3bm.js";import{B as e}from"./BasePdfViewer-Cc0GOLUN.js";import"./preload-helper-BZo60ewl.js";import"./index-DIDi76XU.js";import"./BasePdfViewer.module.css-hvlFZmKR.js";import"./PdfViewerAnnotationLayer-C3dRhC-q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHLZOWR-.js";import"./PdfViewerOutlineSidebar-DHn1EzRW.js";import"./PdfViewerSidebarHeader-B3gWOKKV.js";import"./useBaseUiId-WUEu06gE.js";import"./useControlled-DgsYzmvX.js";import"./CompositeRoot-BxNeDdLl.js";import"./CompositeItem-By3QnrLx.js";import"./ToolbarRootContext-BOxraJ6v.js";import"./composite-DFQP3WzO.js";import"./svgIconContainer-CXmUB5_k.js";import"./PdfViewerSearchBar-VlauXFxk.js";import"./chevron-up-CAMAxbx2.js";import"./chevron-down-cWg0tuLd.js";import"./cross-BZIbyAfw.js";import"./PdfViewerSidebar-BbcEDmGo.js";import"./index-BYMK15VD.js";import"./index-BVYmTNrb.js";import"./index-Bq9s53kA.js";import"./PdfViewerToolbar-C3f9njCO.js";import"./Button-BC65lBcv.js";import"./chevron-right-BEIc206Y.js";import"./Input-prqFStI6.js";import"./search-BSdPNEqM.js";import"./spin-BPbqP_eK.js";import"./error-joC9U9D6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4068/831be3bcbce9a65d5f7673be3bdd2f66d88bb76a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
