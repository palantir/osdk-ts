import{j as n}from"./iframe-8pDs9AML.js";import{B as e}from"./BasePdfViewer-BsUTMvt1.js";import"./preload-helper-DR90AuyO.js";import"./index-BgxF440z.js";import"./BasePdfViewer.module.css-rMfAMpyB.js";import"./PdfViewerAnnotationLayer-CQlzQ9GD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Di2eLW3w.js";import"./PdfViewerOutlineSidebar-Cs-1Jx89.js";import"./PdfViewerSidebarHeader-BsKSI9Ek.js";import"./useBaseUiId-Y2Bqc82V.js";import"./useControlled-DjP6n15o.js";import"./CompositeRoot-BMRtaivU.js";import"./CompositeItem-B2g2yaWL.js";import"./ToolbarRootContext-BlIr8usp.js";import"./composite-DXO-Xhg7.js";import"./svgIconContainer-BOUHKa6M.js";import"./PdfViewerSearchBar-Deo_a6Rh.js";import"./chevron-up-wQgVC5xx.js";import"./chevron-down-Be7tG24a.js";import"./cross-FlHZ6uvS.js";import"./PdfViewerSidebar-C1yPPSjO.js";import"./index-BXm3f9eW.js";import"./index-gTFJVjv-.js";import"./index-DoNWJbFe.js";import"./PdfViewerToolbar-6YOyLPo2.js";import"./Button-DIdY9EdX.js";import"./chevron-right-C8-zuL6J.js";import"./Input-ClAW_50X.js";import"./search-D5muLECQ.js";import"./spin-CIi5TUav.js";import"./error-HBrPbPXF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4249/6a39da810676d92c22762c3de8884a21e6c17e8d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
