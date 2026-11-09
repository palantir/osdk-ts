import{j as n}from"./iframe-DqApX63y.js";import{B as e}from"./BasePdfViewer-Bxs6Z3ZC.js";import"./preload-helper-Bec-Ia2T.js";import"./index-CyvkUScE.js";import"./BasePdfViewer.module.css-DLqwArO_.js";import"./PdfViewerAnnotationLayer-D1dcp_Mn.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-VNrv71yB.js";import"./PdfViewerOutlineSidebar-D67-aBNy.js";import"./PdfViewerSidebarHeader-2NgX3nhQ.js";import"./useBaseUiId-BKFVtTe-.js";import"./useControlled-dziTOMb-.js";import"./CompositeRoot-BD9dbC-t.js";import"./CompositeItem-D1qVgSi4.js";import"./ToolbarRootContext-Dv213T19.js";import"./composite-CRmy7_bC.js";import"./svgIconContainer-6cRzMh8j.js";import"./PdfViewerSearchBar-DIYVGiUh.js";import"./chevron-up-CaNjSDpS.js";import"./chevron-down-DvNVUZis.js";import"./cross-C5bmvSOT.js";import"./PdfViewerSidebar-CB-W2u1R.js";import"./index-Drho1d5n.js";import"./index-BOcOla9y.js";import"./index-DRbiLs21.js";import"./PdfViewerToolbar-CvRjx2I1.js";import"./Button-ChF1ZUI_.js";import"./chevron-right-CnuQl9tu.js";import"./Input-DEWSCfWZ.js";import"./search-DWIX6Qtd.js";import"./spin-B_GHqehE.js";import"./error-D4Jl5yqC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4323/e5f3d73454d19676c58c3ff18c7fa3a554722232/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
