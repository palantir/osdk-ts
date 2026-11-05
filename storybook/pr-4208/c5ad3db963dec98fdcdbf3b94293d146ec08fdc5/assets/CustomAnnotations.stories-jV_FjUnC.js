import{j as n}from"./iframe-CW0iR0MW.js";import{B as e}from"./BasePdfViewer-Gs8XF5o-.js";import"./preload-helper-DPNRA16C.js";import"./index-R4-e3PKI.js";import"./BasePdfViewer.module.css-CPNe9JBw.js";import"./PdfViewerAnnotationLayer-BtSQXqsC.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ZNHmffWf.js";import"./PdfViewerOutlineSidebar-D6HsLAMr.js";import"./PdfViewerSidebarHeader-C2IqAcPI.js";import"./useBaseUiId-bY0lVTzO.js";import"./useControlled-BZraJw4c.js";import"./CompositeRoot-BBvyVKQJ.js";import"./CompositeItem-nFLipZIC.js";import"./ToolbarRootContext-Dfjrxij8.js";import"./composite-CEDiNU-s.js";import"./svgIconContainer-DRg1K7b0.js";import"./PdfViewerSearchBar-CAXGhkPo.js";import"./chevron-up-uDT8i8JB.js";import"./chevron-down-ChPXe2UO.js";import"./cross-CVgDD36J.js";import"./PdfViewerSidebar-BkhBfDzN.js";import"./index-CQ_ZQBXs.js";import"./index-Bj6P2ewC.js";import"./index-Wh16gVsR.js";import"./PdfViewerToolbar-DNSs8_NJ.js";import"./Button-IemAbPn8.js";import"./chevron-right-BmpW32kI.js";import"./Input-CEvDm9oX.js";import"./search-DRF2IcSw.js";import"./spin--DEyf8rh.js";import"./error-QdPzuwdp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4208/c5ad3db963dec98fdcdbf3b94293d146ec08fdc5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
