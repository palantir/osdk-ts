import{j as n}from"./iframe-BMT91W1Z.js";import{B as e}from"./BasePdfViewer-DQpDC3ru.js";import"./preload-helper-rvXeaCGs.js";import"./index-Bx6Ivmjs.js";import"./BasePdfViewer.module.css-2nuWJr2D.js";import"./PdfViewerAnnotationLayer-B1xxs8cm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-mzmW6RqA.js";import"./PdfViewerOutlineSidebar-D9ka79Px.js";import"./PdfViewerSidebarHeader-jG5aiJsA.js";import"./useBaseUiId-B4USe1gj.js";import"./useControlled-L0eiJeCg.js";import"./CompositeRoot-Xx8LPOzt.js";import"./CompositeItem-CssM4Gze.js";import"./ToolbarRootContext-D1Qf3sGL.js";import"./composite-D3rTrYkW.js";import"./svgIconContainer-B3o1vMYf.js";import"./PdfViewerSearchBar-DLPgVhvG.js";import"./chevron-up-CW_U01AK.js";import"./chevron-down-C4MVGpCZ.js";import"./cross-C9h9qNTe.js";import"./PdfViewerSidebar-DND-V-MN.js";import"./index-BVpohJtF.js";import"./index-xfqQSbot.js";import"./index-DEWgT4HO.js";import"./PdfViewerToolbar-CeGVHadb.js";import"./Button-Djft0tAo.js";import"./chevron-right-DPJyyD05.js";import"./Input-B-23mNdu.js";import"./search-CYSVIzHU.js";import"./spin-D-jwGpL9.js";import"./error-Dzj1sGPq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4292/3cd5fd16ba00c925e274b5591af64d3b2f7e5d08/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
