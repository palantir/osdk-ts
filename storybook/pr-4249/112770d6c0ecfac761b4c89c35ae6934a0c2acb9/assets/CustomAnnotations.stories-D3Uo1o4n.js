import{j as n}from"./iframe-DIhyjTQM.js";import{B as e}from"./BasePdfViewer-Bu_qg7iJ.js";import"./preload-helper-BITLElC1.js";import"./index-C8ppAklG.js";import"./BasePdfViewer.module.css-B535sbvE.js";import"./PdfViewerAnnotationLayer-Di5O4nJG.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Bcr1m80M.js";import"./PdfViewerOutlineSidebar-B_cIoP-t.js";import"./PdfViewerSidebarHeader-ejgB7zwp.js";import"./useBaseUiId-BRDIOgH7.js";import"./useControlled-vI7L-1v7.js";import"./CompositeRoot-DjhLx-rZ.js";import"./CompositeItem-D7Gjn2M2.js";import"./ToolbarRootContext-DDTggrNs.js";import"./composite-BkQZGQ9U.js";import"./svgIconContainer-BVwGEvqe.js";import"./PdfViewerSearchBar-DSffQ_ma.js";import"./chevron-up-DKTrmeoY.js";import"./chevron-down-fg_D-X7z.js";import"./cross-BVmbGj7v.js";import"./PdfViewerSidebar-D8-kInvd.js";import"./index-GGFmpVOs.js";import"./index-kla4dWAe.js";import"./index-SCNohOo6.js";import"./PdfViewerToolbar-DqnQ-XO9.js";import"./Button-BU0w-MK8.js";import"./chevron-right-D77rmiMA.js";import"./Input-BCY1gssj.js";import"./search-D7TMRqS5.js";import"./spin-C8fkLuzm.js";import"./error-BcXd4Yso.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4249/112770d6c0ecfac761b4c89c35ae6934a0c2acb9/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
