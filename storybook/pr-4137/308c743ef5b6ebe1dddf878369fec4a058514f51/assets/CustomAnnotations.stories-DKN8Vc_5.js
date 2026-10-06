import{j as n}from"./iframe-C-FIv6o_.js";import{B as e}from"./BasePdfViewer-ZzRYhGP3.js";import"./preload-helper-BlbsPBXS.js";import"./index-DiYvs7cZ.js";import"./BasePdfViewer.module.css-BlYRtUaQ.js";import"./PdfViewerAnnotationLayer-BONd7mhu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Vzrmu4y7.js";import"./PdfViewerOutlineSidebar-CAHuJrng.js";import"./PdfViewerSidebarHeader-ubc2TtMC.js";import"./useBaseUiId-8fHz63fW.js";import"./useControlled-CSYe1hyF.js";import"./CompositeRoot-CAnEnr_v.js";import"./CompositeItem-C0WJbRI5.js";import"./ToolbarRootContext-Kc9KsJC5.js";import"./composite-DY-2h9J_.js";import"./svgIconContainer-CH0vCO_z.js";import"./PdfViewerSearchBar-ByTpOUGb.js";import"./chevron-up-BC2QNaDC.js";import"./chevron-down-CGWHDi30.js";import"./cross-D6R41ZsP.js";import"./PdfViewerSidebar-Bc_7MLTA.js";import"./index-CqnCJeYa.js";import"./index-B0FBWnJm.js";import"./index-Bbgv3w0b.js";import"./PdfViewerToolbar-DagDWPDx.js";import"./Button-CDwEbwO9.js";import"./chevron-right-9WYZwqVr.js";import"./Input-BU1-9D_8.js";import"./search-kQP18GK_.js";import"./spin-CHQCS0a3.js";import"./error-BRmo5GmE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/308c743ef5b6ebe1dddf878369fec4a058514f51/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
