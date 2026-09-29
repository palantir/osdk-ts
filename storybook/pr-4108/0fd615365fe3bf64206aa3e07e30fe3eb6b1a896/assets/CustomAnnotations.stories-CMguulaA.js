import{j as n}from"./iframe-CziGYRZ5.js";import{B as e}from"./BasePdfViewer-DPzfAxDx.js";import"./preload-helper-gc9urLS2.js";import"./index-FTgGsQkL.js";import"./BasePdfViewer.module.css-zDPZiuO_.js";import"./PdfViewerAnnotationLayer-OSHvZcvt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cu9PI-ZG.js";import"./PdfViewerOutlineSidebar-Cg2NU83P.js";import"./PdfViewerSidebarHeader-BoXG0lNR.js";import"./useBaseUiId-DlaJxT3G.js";import"./useControlled-Cl0l9Mrk.js";import"./CompositeRoot-Cmcfk9Du.js";import"./CompositeItem-Bv09Xrw7.js";import"./ToolbarRootContext-YLrOIXIR.js";import"./composite-BvX1_pb1.js";import"./svgIconContainer-DFNJwVrV.js";import"./PdfViewerSearchBar-Ddpx1B5J.js";import"./chevron-up-DowPrP_U.js";import"./chevron-down-BzHtNLP_.js";import"./cross-BHNWGXzB.js";import"./PdfViewerSidebar-D9r9ij3B.js";import"./index-C3TtPejY.js";import"./index-DvwMpTX4.js";import"./index-BgvYMuxB.js";import"./PdfViewerToolbar-Cl3eFVZh.js";import"./Button-DfO3Y95R.js";import"./chevron-right-D7UEqjQ7.js";import"./Input-B_f-YNqg.js";import"./search-cETe_cym.js";import"./spin-DTScJCJR.js";import"./error-q8pihEMG.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4108/0fd615365fe3bf64206aa3e07e30fe3eb6b1a896/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
