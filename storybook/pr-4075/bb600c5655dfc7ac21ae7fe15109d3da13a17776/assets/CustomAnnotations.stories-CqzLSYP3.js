import{j as n}from"./iframe-C23O6NDH.js";import{B as e}from"./BasePdfViewer-CGh9x2WA.js";import"./preload-helper-C6QLezK5.js";import"./index-X4EzQgBc.js";import"./BasePdfViewer.module.css-DM3glnlp.js";import"./PdfViewerAnnotationLayer-Dx2jR7lQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C3ANCZPH.js";import"./PdfViewerOutlineSidebar-CVbi6rdJ.js";import"./PdfViewerSidebarHeader-ji4r3MU3.js";import"./useBaseUiId-Dfg7k-g6.js";import"./useControlled-nFjFO6Es.js";import"./CompositeRoot-6PkP2U4N.js";import"./CompositeItem-MVk24y7z.js";import"./ToolbarRootContext-CCDSBvgO.js";import"./composite-BUM50nEL.js";import"./svgIconContainer-CspjXoBM.js";import"./PdfViewerSearchBar-Bsv2TVrr.js";import"./chevron-up-BE5pmvVV.js";import"./chevron-down-BjdzvOWL.js";import"./cross-PRFvDACG.js";import"./PdfViewerSidebar-C2Vh76pe.js";import"./index-BGnkTDfz.js";import"./index-CHGHLDNb.js";import"./index-CBgO55BO.js";import"./PdfViewerToolbar-BTZkSGsd.js";import"./Button-jRCHNGhX.js";import"./chevron-right-C2P_zHQ0.js";import"./Input-Cu2UirtN.js";import"./search-Bu-mkKdB.js";import"./spin-D_4ShcUm.js";import"./error-OxS9nPVJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4075/bb600c5655dfc7ac21ae7fe15109d3da13a17776/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
