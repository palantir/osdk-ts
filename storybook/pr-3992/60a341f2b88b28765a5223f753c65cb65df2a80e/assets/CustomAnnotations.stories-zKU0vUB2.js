import{j as n}from"./iframe-BOYcc0dJ.js";import{B as e}from"./BasePdfViewer-CxwzjEu4.js";import"./preload-helper-BnWf8j3v.js";import"./index-Yg2EcgVZ.js";import"./BasePdfViewer.module.css-DvNboi67.js";import"./PdfViewerAnnotationLayer-DmA5pSvQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-B94AOc.js";import"./PdfViewerOutlineSidebar-AvgFgXlp.js";import"./PdfViewerSidebarHeader-DzvMBYZ1.js";import"./useBaseUiId-DX9ZiXGI.js";import"./useControlled-D-ZDbicW.js";import"./CompositeRoot-DFaADai_.js";import"./CompositeItem-Bx5eT0s8.js";import"./ToolbarRootContext-Do3BrLln.js";import"./composite-D8na-rSh.js";import"./svgIconContainer-dI8qqoMC.js";import"./PdfViewerSearchBar-DD1GRGdd.js";import"./chevron-up-Uw6izt2X.js";import"./chevron-down-DcL5hgyv.js";import"./cross-M1Qm_DTM.js";import"./PdfViewerSidebar-BXX3HVJA.js";import"./index-BDkH7Rg4.js";import"./index-BkqK32VC.js";import"./index-CCBfJ9eW.js";import"./PdfViewerToolbar-1-r2VkdB.js";import"./Button-hF353HMT.js";import"./chevron-right-CK0nYmDF.js";import"./Input-BJWiKc9C.js";import"./search-BW9zSgLT.js";import"./spin-Bkj3losm.js";import"./error-JJ7_ntNs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3992/60a341f2b88b28765a5223f753c65cb65df2a80e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
