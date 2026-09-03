import{j as n}from"./iframe-5sgXXUq2.js";import{B as e}from"./BasePdfViewer-DPGJTcv9.js";import"./preload-helper-Cbn9zcHA.js";import"./index-CzwNxfu7.js";import"./BasePdfViewer.module.css-D3EB3-U-.js";import"./PdfViewerAnnotationLayer-DUL1zWZl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQNUF0a1.js";import"./PdfViewerOutlineSidebar-Ce54Sqpa.js";import"./PdfViewerSidebarHeader-w_aHznlC.js";import"./useBaseUiId-DG_QbP_U.js";import"./useControlled-siu4g8xe.js";import"./CompositeRoot-CNmt4m1i.js";import"./CompositeItem-CIAR7LV4.js";import"./ToolbarRootContext-HX5a3LbS.js";import"./composite-Ine8e3tf.js";import"./svgIconContainer-6O_QyJta.js";import"./PdfViewerSearchBar-DBT_RE-1.js";import"./chevron-up-BlsyuAls.js";import"./chevron-down-B4APaT5X.js";import"./cross-Dl1YYoqq.js";import"./PdfViewerSidebar-D3z2WcO0.js";import"./index-BUovi2pL.js";import"./index-C3HPrqRk.js";import"./index-Dnj1V73h.js";import"./PdfViewerToolbar-DHFfuDJI.js";import"./Button-71PqqjpD.js";import"./chevron-right-sTMCiits.js";import"./Input-CwUkFVhs.js";import"./search-BYA2jSn3.js";import"./spin-DmVIF2yK.js";import"./error-CIAmmsFo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3964/dd25d9a41e624ec67f1dcc8b7d3f398117940306/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
