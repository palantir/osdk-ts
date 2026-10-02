import{j as n}from"./iframe-CPz-wzhp.js";import{B as e}from"./BasePdfViewer-4Sty3XDA.js";import"./preload-helper-B3PLv50W.js";import"./index-CtV6ZPdt.js";import"./BasePdfViewer.module.css-BxLiw04T.js";import"./PdfViewerAnnotationLayer-BYOvfuyy.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PAVDiebQ.js";import"./PdfViewerOutlineSidebar-CNs-4Wfc.js";import"./PdfViewerSidebarHeader-CC9uguXO.js";import"./useBaseUiId-bEyq9hSb.js";import"./useControlled-7vp-sIj7.js";import"./CompositeRoot-C8X-4Z7i.js";import"./CompositeItem-t2T-QHuZ.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./composite-Dda615xV.js";import"./svgIconContainer-B99gTCIO.js";import"./PdfViewerSearchBar-CLQ8_-iW.js";import"./chevron-up-DuRMlZ8v.js";import"./chevron-down-BNy5Nzph.js";import"./cross-DRBzl1mu.js";import"./PdfViewerSidebar-DVP5Hldk.js";import"./index-CbuVsfr5.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./PdfViewerToolbar-J6bO5xZP.js";import"./Button-6LWfTNU-.js";import"./chevron-right-C1tzrdVi.js";import"./Input-BO6jo4k5.js";import"./search-CPfH1VP1.js";import"./spin-TSMazN24.js";import"./error-BD3e32HB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4136/70960f7a462455af63d8f32217bada514f22da76/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
