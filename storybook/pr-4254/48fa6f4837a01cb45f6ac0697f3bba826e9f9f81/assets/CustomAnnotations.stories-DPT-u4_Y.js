import{j as n}from"./iframe-B41lgdKN.js";import{B as e}from"./BasePdfViewer-csOGzfWC.js";import"./preload-helper-DI5m88JW.js";import"./index-C2q613GL.js";import"./BasePdfViewer.module.css-2_b3u1dF.js";import"./PdfViewerAnnotationLayer-BVXACVuF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CSXX9a3Y.js";import"./PdfViewerOutlineSidebar-D9PNCa_1.js";import"./PdfViewerSidebarHeader-C7mDJ2DC.js";import"./useBaseUiId-BgB3Fx_y.js";import"./useControlled-COiD_eR7.js";import"./CompositeRoot-DcMohphO.js";import"./CompositeItem-DKeB6UbW.js";import"./ToolbarRootContext-DaqyENip.js";import"./composite-B54UYmeO.js";import"./svgIconContainer-D7Eue1ZZ.js";import"./PdfViewerSearchBar-ruiHV3Iu.js";import"./chevron-up-Btp4j1eu.js";import"./chevron-down-DPEakPZ3.js";import"./cross-C9BOtq1y.js";import"./PdfViewerSidebar-DvnEw7Z8.js";import"./index-B5Wpr3Nx.js";import"./index-D_IcPDjf.js";import"./index-Cujrcm2-.js";import"./PdfViewerToolbar-BixkRRY1.js";import"./Button-CLPb2Ul9.js";import"./chevron-right-DauGk3BK.js";import"./Input-C5V0yZmk.js";import"./search-D5xcli0X.js";import"./spin-DAj4Xy_r.js";import"./error-DxQUrNdP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4254/48fa6f4837a01cb45f6ac0697f3bba826e9f9f81/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
