import{j as n}from"./iframe-NBWgt9Kz.js";import{B as e}from"./BasePdfViewer-DEppOGhf.js";import"./preload-helper-dD2tealv.js";import"./index-CvVwqIuN.js";import"./BasePdfViewer.module.css-BLAyNnQ4.js";import"./PdfViewerAnnotationLayer-DQa2TdTo.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLn-cYe-.js";import"./PdfViewerOutlineSidebar-RgnTfvuu.js";import"./PdfViewerSidebarHeader-Dtv2ikxd.js";import"./useBaseUiId-CQ82DsVx.js";import"./useControlled-CzU7BR2U.js";import"./CompositeRoot-CMO-6k5Q.js";import"./CompositeItem-C9UmmHfT.js";import"./ToolbarRootContext-Ds0fuH8S.js";import"./composite-fJ5Lq9kI.js";import"./svgIconContainer-ClcvIiJ_.js";import"./PdfViewerSearchBar-BfCk336X.js";import"./chevron-up-DmrxnCTU.js";import"./chevron-down-BQb3Bdcv.js";import"./cross-DT-CTOSO.js";import"./PdfViewerSidebar-DkXw8cf2.js";import"./index-Cog39q-i.js";import"./index-zqSU5Gel.js";import"./index-CGp-CZFX.js";import"./PdfViewerToolbar-BIxA2EKZ.js";import"./Button-BFGOLVaf.js";import"./chevron-right-De7N2QS8.js";import"./Input-CslBGOUO.js";import"./search-DE3aPm_j.js";import"./spin-hhxeE2Ae.js";import"./error-EEVYrIXI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4047/79a7d643094c5b32a67e0da7e940f3eb3f2bd2ec/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
