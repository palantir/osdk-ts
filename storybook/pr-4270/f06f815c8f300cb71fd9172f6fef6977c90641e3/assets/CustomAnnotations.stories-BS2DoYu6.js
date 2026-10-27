import{j as n}from"./iframe-C4dizZ36.js";import{B as e}from"./BasePdfViewer-9_XcJIGe.js";import"./preload-helper-yVPvR8z3.js";import"./index-CFT7unnD.js";import"./BasePdfViewer.module.css-CvfPPs4r.js";import"./PdfViewerAnnotationLayer-CD8dPDyX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJTbah7Z.js";import"./PdfViewerOutlineSidebar-D7xzCOnb.js";import"./PdfViewerSidebarHeader-XloMMd9O.js";import"./useBaseUiId-k_5E4sc5.js";import"./useControlled-CUKEEG6I.js";import"./CompositeRoot-Ca7fO5C3.js";import"./CompositeItem-Deat6XJ7.js";import"./ToolbarRootContext-cilGYW-z.js";import"./composite-BKXJ61hE.js";import"./svgIconContainer-DfcgCVjr.js";import"./PdfViewerSearchBar-ChI2ripZ.js";import"./chevron-up-1nGzqBay.js";import"./chevron-down-B_DWNPfU.js";import"./cross-drbNV1T7.js";import"./PdfViewerSidebar-DEJbgRrc.js";import"./index-C5-B81cJ.js";import"./index-CTCpbOLj.js";import"./index-BMu-FTMn.js";import"./PdfViewerToolbar-O_NrbPV5.js";import"./Button-B3WKdDfx.js";import"./chevron-right-CPOanG-V.js";import"./Input-DPBssrp3.js";import"./search-D-SP9Yj6.js";import"./spin-Ca55JF73.js";import"./error-j1AChp6N.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4270/f06f815c8f300cb71fd9172f6fef6977c90641e3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
