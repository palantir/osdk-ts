import{j as n}from"./iframe-DvFhas0q.js";import{B as e}from"./BasePdfViewer-B8NvHLxb.js";import"./preload-helper-QHjuDrJd.js";import"./index-CmLQwMDk.js";import"./BasePdfViewer.module.css-ti9MWSqP.js";import"./PdfViewerAnnotationLayer-ouxvjKrB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CYw2S_30.js";import"./PdfViewerOutlineSidebar-mnUiL9qK.js";import"./PdfViewerSidebarHeader-BCYc6K6v.js";import"./useBaseUiId-BFo_-NKJ.js";import"./useControlled-CxHMv-Gu.js";import"./CompositeRoot-CwTTqsB_.js";import"./CompositeItem-Dn55C0Ya.js";import"./ToolbarRootContext-Dzf-NS_o.js";import"./composite-C99jNiLY.js";import"./svgIconContainer-BHO7oNHP.js";import"./PdfViewerSearchBar-nxKTnHTK.js";import"./chevron-up-CdfQr7_J.js";import"./chevron-down-EuTJEAw_.js";import"./cross-CM36P0tx.js";import"./PdfViewerSidebar-B2BEvuc0.js";import"./index-YzetP2f8.js";import"./index-Apg0qjyu.js";import"./index-BoSI0BFD.js";import"./PdfViewerToolbar-B36jZSBU.js";import"./Button-CK4f3ZCw.js";import"./chevron-right-DEPw7xU8.js";import"./Input-Co66Vae_.js";import"./search-C6DWKwgW.js";import"./spin-DVHQyyeR.js";import"./error-ASo9jiXR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3983/abd9950675165936978c206b34eed7c6cbbd6ed9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
