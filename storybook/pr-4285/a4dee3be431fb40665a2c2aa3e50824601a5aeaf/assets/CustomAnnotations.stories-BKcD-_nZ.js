import{j as n}from"./iframe-B5Ajdn-Z.js";import{B as e}from"./BasePdfViewer-BHq2Un1G.js";import"./preload-helper-B5yP3JPh.js";import"./index-DILEzbbv.js";import"./BasePdfViewer.module.css-CULLtCIG.js";import"./PdfViewerAnnotationLayer-Dc1R7Rhe.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-FcsCx3AP.js";import"./PdfViewerOutlineSidebar-Db4t24Az.js";import"./PdfViewerSidebarHeader-CQcXAL6-.js";import"./useBaseUiId-C1Uihcd0.js";import"./useControlled-UxmqIdoS.js";import"./CompositeRoot-CHqdcnrC.js";import"./CompositeItem-CVzNQNnm.js";import"./ToolbarRootContext-BWtD2D4r.js";import"./composite-CnqlIWYg.js";import"./svgIconContainer-DoY_K777.js";import"./PdfViewerSearchBar-DrlgDr4O.js";import"./chevron-up-Bo63fypX.js";import"./chevron-down-BAJRL46i.js";import"./cross-BBK4wgqQ.js";import"./PdfViewerSidebar-DCMgSM5C.js";import"./index-xivGH17H.js";import"./index-DVmTRqee.js";import"./index-0i5GjvBZ.js";import"./PdfViewerToolbar-B6rE4UNz.js";import"./Button-CF8mdfVJ.js";import"./chevron-right-BR2smy_u.js";import"./Input-BBXfcLrJ.js";import"./search-BuV2lV03.js";import"./spin-CUgbvzUa.js";import"./error-DVp4qBBx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4285/a4dee3be431fb40665a2c2aa3e50824601a5aeaf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
