import{j as n}from"./iframe-CvQ7w9cm.js";import{B as e}from"./BasePdfViewer-B4gVIY6d.js";import"./preload-helper-DQXfiblR.js";import"./index-2iDqrev3.js";import"./BasePdfViewer.module.css-W_HjhKXg.js";import"./PdfViewerAnnotationLayer-pCwCDqHI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUMGJzOx.js";import"./PdfViewerOutlineSidebar-mJhnTza0.js";import"./PdfViewerSidebarHeader-CC5ThcTZ.js";import"./useBaseUiId-Dm6kpRCs.js";import"./useControlled-D1WZsU2S.js";import"./CompositeRoot-DNGKXjyy.js";import"./CompositeItem-BhDBjBvE.js";import"./ToolbarRootContext-DjbW4ahc.js";import"./composite-BwPwzWwu.js";import"./svgIconContainer-DN6Jj3b-.js";import"./PdfViewerSearchBar-gSRlNZw3.js";import"./chevron-up-CnOWiwR0.js";import"./chevron-down-CVrOZp8I.js";import"./cross-xNEqMC60.js";import"./PdfViewerSidebar-BHQStQNA.js";import"./index-F4qb8FGJ.js";import"./index-Ban7KgTd.js";import"./index-DRIyOfaO.js";import"./PdfViewerToolbar-CODcPoDm.js";import"./Button-Cq3u6MOe.js";import"./chevron-right-g5RwPUdT.js";import"./Input-DHzSCAAb.js";import"./search-D1f6LLc_.js";import"./spin-C7ZiOQls.js";import"./error-S-GP8zQ9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4379/faf228501a2c4854629916eb2f1d6e094855fd71/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
