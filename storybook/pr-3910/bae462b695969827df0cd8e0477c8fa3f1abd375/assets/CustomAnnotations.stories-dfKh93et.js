import{j as n}from"./iframe-lO6oHnL4.js";import{B as e}from"./BasePdfViewer-DVR3zb78.js";import"./preload-helper-CZ1zKWtp.js";import"./index-Dl6F1U12.js";import"./BasePdfViewer.module.css-DhESsjvb.js";import"./PdfViewerAnnotationLayer-BlMoV_6j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Deo0dCJD.js";import"./PdfViewerOutlineSidebar-D12oEeL0.js";import"./PdfViewerSidebarHeader-Bcci_MoR.js";import"./useBaseUiId-B846_agE.js";import"./useControlled-D27zJnZ2.js";import"./CompositeRoot-Dm4bOIC_.js";import"./CompositeItem-FdcQgDtf.js";import"./ToolbarRootContext-BfcKDhBA.js";import"./composite-BjZ2VOoR.js";import"./svgIconContainer-BCDfPS-8.js";import"./PdfViewerSearchBar-Q72LXttA.js";import"./chevron-up-ixzeTbOR.js";import"./chevron-down-0zZDUaq4.js";import"./cross-CmTyvcmm.js";import"./PdfViewerSidebar-y1hMFBMz.js";import"./index-Cx18vdAy.js";import"./index-D1QV3ytK.js";import"./index-DwP6FR90.js";import"./PdfViewerToolbar-jLnjsbIC.js";import"./Button-8GX9Y-dN.js";import"./chevron-right-C3LxtTzT.js";import"./Input-oxwV_krW.js";import"./search-BNOG_dw_.js";import"./spin-D0H-DIBq.js";import"./error-CA5mje1x.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3910/bae462b695969827df0cd8e0477c8fa3f1abd375/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
