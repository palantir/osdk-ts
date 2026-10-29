import{j as n}from"./iframe-D8AA8tZ5.js";import{B as e}from"./BasePdfViewer-ClOZgQhZ.js";import"./preload-helper-BH6-9HD1.js";import"./index-CukSKf6K.js";import"./BasePdfViewer.module.css-CZe_aYXW.js";import"./PdfViewerAnnotationLayer-CHpuL-oc.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nYXfhmHU.js";import"./PdfViewerOutlineSidebar-BRbSJDzA.js";import"./PdfViewerSidebarHeader-BicsmAaT.js";import"./useBaseUiId-DoN4Gm5G.js";import"./useControlled-B43d18Tf.js";import"./CompositeRoot-BG_c5da8.js";import"./CompositeItem-DyTH_2rH.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./composite-BXcEZn4p.js";import"./svgIconContainer-M2XD2W51.js";import"./PdfViewerSearchBar-CRxgbIx5.js";import"./chevron-up-DjAOzO7D.js";import"./chevron-down-CUVA2CdW.js";import"./cross-hRHI0Bet.js";import"./PdfViewerSidebar-nkdZcE9B.js";import"./index-DdNWZRPv.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./PdfViewerToolbar-BM5Wyzka.js";import"./Button-DM4RbJ0A.js";import"./chevron-right-B4OMg3yd.js";import"./Input-CB7rgA9u.js";import"./search-g_GQHQvF.js";import"./spin-BDe2qmHX.js";import"./error-CvnJxzc0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4290/33e531ff112ef01cdf11cdf247efde905ba19134/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
