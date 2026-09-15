import{j as n}from"./iframe-BhKMX8Fx.js";import{B as e}from"./BasePdfViewer-DdCkn1Z1.js";import"./preload-helper-CZy_0jgg.js";import"./index-DyXRR_oe.js";import"./BasePdfViewer.module.css-DSGQEcwP.js";import"./PdfViewerAnnotationLayer-Bkxqy3fQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZ_5G-W0.js";import"./PdfViewerOutlineSidebar-D_41Og8G.js";import"./PdfViewerSidebarHeader-COq0NQr0.js";import"./useBaseUiId-B9dth6ze.js";import"./useControlled-D7ZrYDZP.js";import"./CompositeRoot-DnjZA3jo.js";import"./CompositeItem-CaT0iTXd.js";import"./ToolbarRootContext-CjkyXnS-.js";import"./composite-CveWDbYe.js";import"./svgIconContainer-Dqg69n5p.js";import"./PdfViewerSearchBar-Cuf5Zkhx.js";import"./chevron-up-DunxYoVZ.js";import"./chevron-down-B_4JujMO.js";import"./cross-Cg-ZPVlB.js";import"./PdfViewerSidebar-BclWzTna.js";import"./index-C-yRIYxo.js";import"./index-BvAdv-zV.js";import"./index-C8--fwDy.js";import"./PdfViewerToolbar-DfneYPt6.js";import"./Button-XEWUMbMz.js";import"./chevron-right-NwxtFUjm.js";import"./Input-qedQc-sF.js";import"./search-BJB8jL9m.js";import"./spin-C4G32LEy.js";import"./error-BDttauQc.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4024/4b2fd49363c6f0f5dd0dcaa3aa6040bcf744e713/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
