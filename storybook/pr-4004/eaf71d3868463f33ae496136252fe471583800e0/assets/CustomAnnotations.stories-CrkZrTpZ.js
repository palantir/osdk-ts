import{j as n}from"./iframe-CSNnL1Y0.js";import{B as e}from"./BasePdfViewer-C4Gtm4mt.js";import"./preload-helper-PMc3ZHFF.js";import"./index-DNTkQvxm.js";import"./BasePdfViewer.module.css-BUCqtz5Y.js";import"./PdfViewerAnnotationLayer-DJhZnGBw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C-Y2OFku.js";import"./PdfViewerOutlineSidebar-Bzfe_Nyu.js";import"./PdfViewerSidebarHeader-B9x17W8e.js";import"./useBaseUiId-pX-EM4Dz.js";import"./useControlled-CLpZ-2U1.js";import"./CompositeRoot-DxihqWUU.js";import"./CompositeItem-DxYljjwU.js";import"./ToolbarRootContext-DVTpeAWc.js";import"./composite-BlH-_uKm.js";import"./svgIconContainer-CM8I1f8r.js";import"./PdfViewerSearchBar-CEguw3uM.js";import"./chevron-up-CiJx7nH2.js";import"./chevron-down-BBAfQF9b.js";import"./cross-Bg_IlbQu.js";import"./PdfViewerSidebar-CyWEQFFI.js";import"./index-CP8GV_wH.js";import"./index-BzmaCTEY.js";import"./index-CIw5v7jp.js";import"./PdfViewerToolbar-CxJh1j9p.js";import"./Button-B6Txaqgo.js";import"./chevron-right-CWtvZ3Da.js";import"./Input-bh0XwuT_.js";import"./search-BPPJCzpv.js";import"./spin-FoB2eABw.js";import"./error-BFicHv-u.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4004/eaf71d3868463f33ae496136252fe471583800e0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
