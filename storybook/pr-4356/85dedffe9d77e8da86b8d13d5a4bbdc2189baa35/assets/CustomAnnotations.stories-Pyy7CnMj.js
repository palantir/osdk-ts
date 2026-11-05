import{j as n}from"./iframe-BGZow3KJ.js";import{B as e}from"./BasePdfViewer-rdMJU4kr.js";import"./preload-helper-CV0-5wxc.js";import"./index-BDJbf4mz.js";import"./BasePdfViewer.module.css-DEgI0ssU.js";import"./PdfViewerAnnotationLayer-Ic7M3gy4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvtBHVEq.js";import"./PdfViewerOutlineSidebar-DszAO5Un.js";import"./PdfViewerSidebarHeader-C3fR1Sa-.js";import"./useBaseUiId-BlZeP_kj.js";import"./useControlled-C-Ujr0_X.js";import"./CompositeRoot-BiZixX6A.js";import"./CompositeItem-BUIK-kSM.js";import"./ToolbarRootContext-CqO-yoJp.js";import"./composite-CN_PLOWp.js";import"./svgIconContainer-GlJoQzna.js";import"./PdfViewerSearchBar-BnE7bpV8.js";import"./chevron-up-BhsxBA7H.js";import"./chevron-down-4eRxImwL.js";import"./cross-Dn--TE22.js";import"./PdfViewerSidebar-8qDA0BGH.js";import"./index-D9ncN4SR.js";import"./index-BuHLiRGy.js";import"./index-C3aV2ZJb.js";import"./PdfViewerToolbar-6Ztrn-4k.js";import"./Button-B8_EYdXY.js";import"./chevron-right-DA-dtMyX.js";import"./Input-BSDEuHVc.js";import"./search-xttomfsG.js";import"./spin-CTWCRRlF.js";import"./error-C57Ogh7g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4356/85dedffe9d77e8da86b8d13d5a4bbdc2189baa35/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
