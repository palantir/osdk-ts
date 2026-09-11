import{j as n}from"./iframe-CZqFYSvz.js";import{B as e}from"./BasePdfViewer-Di-rh3k-.js";import"./preload-helper-W-9dgf5b.js";import"./index-4I_FO6X-.js";import"./BasePdfViewer.module.css-gG38YbEW.js";import"./PdfViewerAnnotationLayer-Cb1891p4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dg4qrYd-.js";import"./PdfViewerOutlineSidebar-r7rZ_HMm.js";import"./PdfViewerSidebarHeader-DAwv1TX5.js";import"./useBaseUiId-D1DgvgDy.js";import"./useControlled-BEhUjoKU.js";import"./CompositeRoot-DDGOL2lB.js";import"./CompositeItem-BX8AU06n.js";import"./ToolbarRootContext-FrGRfv5z.js";import"./composite-DshpnDaY.js";import"./svgIconContainer-B4GgTWLP.js";import"./PdfViewerSearchBar-CO0Akf3s.js";import"./chevron-up-tL_9_Z7X.js";import"./chevron-down-DW5k5Yie.js";import"./cross-DwkOXENp.js";import"./PdfViewerSidebar-vKiDfz4K.js";import"./index-CkQb-QUw.js";import"./index-CwvgB0UQ.js";import"./index-TcvRDgBd.js";import"./PdfViewerToolbar-Cl9TVcOr.js";import"./Button-DPWKZHun.js";import"./chevron-right-YMnV4-tb.js";import"./Input-DFczC5qB.js";import"./search-DQIrKTJC.js";import"./spin-Dyx7TNGP.js";import"./error-B_2Afo6g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/70c8675727f041cfb8b05f3a8ad2fbe9059927e7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
