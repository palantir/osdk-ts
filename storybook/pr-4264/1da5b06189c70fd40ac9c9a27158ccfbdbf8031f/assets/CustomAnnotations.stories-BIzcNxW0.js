import{j as n}from"./iframe-BX9a9lIA.js";import{B as e}from"./BasePdfViewer-C0taqUdj.js";import"./preload-helper-BlXb_Vg9.js";import"./index-DU3Z-NO3.js";import"./BasePdfViewer.module.css-9lvqsVM3.js";import"./PdfViewerAnnotationLayer-DpnPjr2x.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-m1x-Gx7J.js";import"./PdfViewerOutlineSidebar-Bpn4d8M5.js";import"./PdfViewerSidebarHeader-DlPo4dFP.js";import"./useBaseUiId-rZTTYrCD.js";import"./useControlled-D1C6STzO.js";import"./CompositeRoot-DQdBi0T7.js";import"./CompositeItem-h-F_V8Zb.js";import"./ToolbarRootContext-CfpoMHoy.js";import"./composite-BZsQ_ZE_.js";import"./svgIconContainer-UHOj5M6P.js";import"./PdfViewerSearchBar-pZsU3tkh.js";import"./chevron-up-DfEuNmrF.js";import"./chevron-down-Baa_eZBL.js";import"./cross-DuBsq8tA.js";import"./PdfViewerSidebar-YA86QJt6.js";import"./index-CGQ8sj2I.js";import"./index-Xkcqocgf.js";import"./index-Cmn1GPS_.js";import"./PdfViewerToolbar-B4Z1YlZB.js";import"./Button-nhugV28E.js";import"./chevron-right-Cg9PieVE.js";import"./Input-R8AltOJ3.js";import"./search-D5VPbQqk.js";import"./spin-BheQegEV.js";import"./error-BEhn7utC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4264/1da5b06189c70fd40ac9c9a27158ccfbdbf8031f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
