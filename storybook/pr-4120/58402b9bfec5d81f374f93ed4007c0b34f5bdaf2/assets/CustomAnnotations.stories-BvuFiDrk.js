import{j as n}from"./iframe-BNVJywF1.js";import{B as e}from"./BasePdfViewer-D4LBxlyo.js";import"./preload-helper-DWuXY-GF.js";import"./index-C4EkKaF7.js";import"./BasePdfViewer.module.css-D3K4xG7E.js";import"./PdfViewerAnnotationLayer-BxAxelBq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-nCWY3AJc.js";import"./PdfViewerOutlineSidebar-Cwml6HJV.js";import"./PdfViewerSidebarHeader-Bvsy9xM1.js";import"./useBaseUiId-Bpu1Oowx.js";import"./useControlled-B2RztQtr.js";import"./CompositeRoot-7lir25TR.js";import"./CompositeItem-BXGINh9c.js";import"./ToolbarRootContext-D79zfuWP.js";import"./composite-DiO_GxNw.js";import"./svgIconContainer-BcZCykGH.js";import"./PdfViewerSearchBar-Cf9ifctA.js";import"./chevron-up-7CzGWdJA.js";import"./chevron-down-D9ALcooV.js";import"./cross-CyiMpI_1.js";import"./PdfViewerSidebar-BubHKBt3.js";import"./index-BNfW4Vjp.js";import"./index-LJRfcAtw.js";import"./index-BQqTqN1m.js";import"./PdfViewerToolbar-B1LGs9SI.js";import"./Button-DMlU0zK6.js";import"./chevron-right-CU1M93dR.js";import"./Input-Da27pVQq.js";import"./search-C7WqGDQC.js";import"./spin-B6vBAqHo.js";import"./error-Kq-QRHM8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4120/58402b9bfec5d81f374f93ed4007c0b34f5bdaf2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
