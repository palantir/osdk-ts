import{j as n}from"./iframe-CzN2QreI.js";import{B as e}from"./BasePdfViewer-Dxid9-dz.js";import"./preload-helper-BXZu3mB8.js";import"./index-Bj6GQi9V.js";import"./BasePdfViewer.module.css-BgDJlyGb.js";import"./PdfViewerAnnotationLayer-Cnschia8.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dqo5628h.js";import"./PdfViewerOutlineSidebar-4lJOTSfQ.js";import"./PdfViewerSidebarHeader-BgHybyjI.js";import"./useBaseUiId-XpXvVpGq.js";import"./useControlled-DC4k4z6-.js";import"./CompositeRoot-3N5Pesrn.js";import"./CompositeItem-C2xi6NQ8.js";import"./ToolbarRootContext-CKTJAN59.js";import"./composite-CvZGZMr_.js";import"./svgIconContainer-DJR2Y9nG.js";import"./PdfViewerSearchBar-DnV_kRgW.js";import"./chevron-up-DQgGPusN.js";import"./chevron-down-CQ9C1iv5.js";import"./cross-B7QKnjh-.js";import"./PdfViewerSidebar-Ch9K6TMc.js";import"./index-DT9lB2o2.js";import"./index-CP-vzmXq.js";import"./index-_8V292Ph.js";import"./PdfViewerToolbar-BPhI9KEm.js";import"./Button-CdEdBbWo.js";import"./chevron-right-Dy_ga6Yv.js";import"./Input-CegjBPQP.js";import"./search-CBwzahSV.js";import"./spin-Ban_EYuC.js";import"./error-Ds-mn25o.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4328/9352f49ca783693cc68be2ccee6b33bd9a0a2681/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
