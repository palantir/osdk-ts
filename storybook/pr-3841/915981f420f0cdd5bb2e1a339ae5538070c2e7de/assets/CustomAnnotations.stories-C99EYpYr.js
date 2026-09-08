import{j as n}from"./iframe-BOmrqFPc.js";import{B as e}from"./BasePdfViewer-DsSVbHYm.js";import"./preload-helper-DHdkCmlX.js";import"./index-CsuBd3Ct.js";import"./BasePdfViewer.module.css-DlsMqj7L.js";import"./PdfViewerAnnotationLayer-CDqO6ljR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEgcR9ww.js";import"./PdfViewerOutlineSidebar-B1Bbxbek.js";import"./PdfViewerSidebarHeader-Bemz63Sd.js";import"./useBaseUiId-BbxoKReU.js";import"./useControlled-fJQSQ2l_.js";import"./CompositeRoot-DmCOYPCl.js";import"./CompositeItem-BQhn1KAi.js";import"./ToolbarRootContext-CZljBiwl.js";import"./composite-DD_Mh2Hz.js";import"./svgIconContainer-BIv09OFd.js";import"./PdfViewerSearchBar-CGJCl_ff.js";import"./chevron-up-C0Rd-ssI.js";import"./chevron-down-CjR8Mc2-.js";import"./cross-C3JW1YVW.js";import"./PdfViewerSidebar-D32YvtC0.js";import"./index-7ewfs4s5.js";import"./index-CwZfU70k.js";import"./index-CmDTuj0A.js";import"./PdfViewerToolbar-DN6UhUAT.js";import"./Button-CzVdVKcN.js";import"./chevron-right-SMgjrj7f.js";import"./Input-DztT7-KE.js";import"./search-BDQnen_f.js";import"./spin-DrISX71u.js";import"./error-lpzYnACL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/915981f420f0cdd5bb2e1a339ae5538070c2e7de/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
