import{j as n}from"./iframe-CRfkLV31.js";import{B as e}from"./BasePdfViewer-BQN9ISpD.js";import"./preload-helper-YWkr71E4.js";import"./index-DFmae8Ml.js";import"./BasePdfViewer.module.css-DjTh7bxS.js";import"./PdfViewerAnnotationLayer-BlMd6WdY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Do3WcF0o.js";import"./PdfViewerOutlineSidebar-DQzUb5x5.js";import"./PdfViewerSidebarHeader-BXGnEJsc.js";import"./useBaseUiId-CtBQzgSV.js";import"./useControlled-B56Cy6tA.js";import"./CompositeRoot-vG43NwJO.js";import"./CompositeItem-BIX1YXND.js";import"./ToolbarRootContext-DesSIIiD.js";import"./composite-Caz7Fjnj.js";import"./svgIconContainer-Cv_5fobV.js";import"./PdfViewerSearchBar-BEUDrGFx.js";import"./chevron-up-CnPjyp5S.js";import"./chevron-down-CQ908lz2.js";import"./cross-2MhXpbG_.js";import"./PdfViewerSidebar-slABa7nE.js";import"./index-BTr8Rb7H.js";import"./index-Dqg3-20q.js";import"./index-xXRsgkLL.js";import"./PdfViewerToolbar-DRykKOFM.js";import"./Button-COPRfQ9y.js";import"./chevron-right-BwXHFoX2.js";import"./Input-C9MxuagH.js";import"./search-DgbssBMa.js";import"./spin-BDB3sDue.js";import"./error-Bjl4tfNj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4194/4f2e02ca14ae5869ad4ef18800ef45a024308b58/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
