import{j as n}from"./iframe-Cidbd9U_.js";import{B as e}from"./BasePdfViewer-CRC89i01.js";import"./preload-helper-CDZ9ml3u.js";import"./index-DHtVl5lr.js";import"./BasePdfViewer.module.css-BEEkYmVy.js";import"./PdfViewerAnnotationLayer-CEtU-K4F.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJbBGMpM.js";import"./PdfViewerOutlineSidebar-C8DKTwZk.js";import"./PdfViewerSidebarHeader-PVSjLnvX.js";import"./useBaseUiId-qBbflN1T.js";import"./useControlled-CD8kHrNC.js";import"./CompositeRoot-7EDOhLfq.js";import"./CompositeItem-RBkj06fN.js";import"./ToolbarRootContext-CFGHeG8t.js";import"./composite-wQgj7E4E.js";import"./svgIconContainer-BRrBCQQQ.js";import"./PdfViewerSearchBar-c8PxQM-_.js";import"./chevron-up-CM55ykMJ.js";import"./chevron-down-gf2GhVLl.js";import"./cross-BTGq5cWg.js";import"./PdfViewerSidebar-BhoaH6KO.js";import"./index-CSBG_Ogr.js";import"./index-CvuA1U9Q.js";import"./index-B4TXSL8y.js";import"./PdfViewerToolbar-lMJBBPuU.js";import"./Button-B5k9EJ-k.js";import"./chevron-right-DRPE0Ill.js";import"./Input-DOViwQP-.js";import"./search-d8u8t1Cm.js";import"./spin-BbYtHddB.js";import"./error-CLTZOyUS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4162/5e062e762f316a0e17178b11112e3288c956d08d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
