import{j as n}from"./iframe-NrfGywpz.js";import{B as e}from"./BasePdfViewer-DRTPjwt1.js";import"./preload-helper-B_PzSpqk.js";import"./index-B4J3JGGr.js";import"./BasePdfViewer.module.css-BAdR4OQw.js";import"./PdfViewerAnnotationLayer-CIeoDWGr.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-K9IzMs4n.js";import"./PdfViewerOutlineSidebar-CUGUAQ9e.js";import"./PdfViewerSidebarHeader-Djh3hamG.js";import"./useBaseUiId-DgnEpncS.js";import"./useControlled-DTlMTcYw.js";import"./CompositeRoot-DpR0zZ54.js";import"./CompositeItem-DkX84chI.js";import"./ToolbarRootContext-DXSxTdJI.js";import"./composite-DA8gx3Og.js";import"./svgIconContainer-Cgk6hNay.js";import"./PdfViewerSearchBar-hwLcyyro.js";import"./chevron-up-Cnlk7Nam.js";import"./chevron-down-Cswe4CW9.js";import"./cross-Caw6Pz43.js";import"./PdfViewerSidebar-D6i0xUN8.js";import"./index-hEzcpiCN.js";import"./index-D-R7Oq4i.js";import"./index-ALjvoOKD.js";import"./PdfViewerToolbar-D3VwCiHb.js";import"./Button-DIZaR5tq.js";import"./chevron-right-kqEflTJU.js";import"./Input-CCWHU-92.js";import"./search-DU1IM6NB.js";import"./spin-uQJfkV6r.js";import"./error-DaUrBpBS.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3986/7fbe9ed63ea32f7dc97f6bc39d81e7cf6af9b36d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
