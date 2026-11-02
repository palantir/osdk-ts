import{j as n}from"./iframe-BITxIQXM.js";import{B as e}from"./BasePdfViewer--Ovk_X1s.js";import"./preload-helper-CJCZF6BK.js";import"./index-BXV9FcBB.js";import"./BasePdfViewer.module.css-uk79k73m.js";import"./PdfViewerAnnotationLayer-DvYRVeRi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DH5zx7Pz.js";import"./PdfViewerOutlineSidebar-CAR1H1Zj.js";import"./PdfViewerSidebarHeader-BQaFH3ia.js";import"./useBaseUiId-DoTbd__l.js";import"./useControlled-Yy2fJI9L.js";import"./CompositeRoot-BSUx5Jdj.js";import"./CompositeItem-TvjrH8CY.js";import"./ToolbarRootContext-Ddl053qU.js";import"./composite-CqBnb1yV.js";import"./svgIconContainer-4yskBugb.js";import"./PdfViewerSearchBar-y92KfuIZ.js";import"./chevron-up-CoLjarCK.js";import"./chevron-down-DVE6tSD6.js";import"./cross-DYXRPDx7.js";import"./PdfViewerSidebar-DbRTHuM0.js";import"./index-DoQAUbhM.js";import"./index-UMWtaZVa.js";import"./index-DQpYD4zL.js";import"./PdfViewerToolbar-C6w7YXEB.js";import"./Button-CrhbLtNZ.js";import"./chevron-right-BUbsE24c.js";import"./Input-DB8ShKaf.js";import"./search-Bb0Ck9Ps.js";import"./spin-eAmeeLkz.js";import"./error-DxPjfWes.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4315/3a8502ee5e0fea223a134af189a15020824f6c38/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
