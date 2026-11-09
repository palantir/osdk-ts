import{j as n}from"./iframe-BGt7IhdS.js";import{B as e}from"./BasePdfViewer-BtL8b0R9.js";import"./preload-helper-DUkvm5oM.js";import"./index-gkzrPHGR.js";import"./BasePdfViewer.module.css-CAkhdKqA.js";import"./PdfViewerAnnotationLayer-DQLP1ABV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CvW1catE.js";import"./PdfViewerOutlineSidebar-CkmEZn1R.js";import"./PdfViewerSidebarHeader-DFSY-Dho.js";import"./useBaseUiId-Dcw5wc3b.js";import"./useControlled-BgB3rMOH.js";import"./CompositeRoot-B7PjbCYj.js";import"./CompositeItem-VInoCAcU.js";import"./ToolbarRootContext-DcgyCrBd.js";import"./composite-CtTlfVza.js";import"./svgIconContainer-Bf5Aovc1.js";import"./PdfViewerSearchBar-BXNUwf73.js";import"./chevron-up-Cn1zNPCt.js";import"./chevron-down-DB4w1r6J.js";import"./cross-Cb9gWeTe.js";import"./PdfViewerSidebar-ChFvVS0f.js";import"./index-C1TCtrZ_.js";import"./index-DUEp08qS.js";import"./index-W3km3k8_.js";import"./PdfViewerToolbar-IDDgJ-4C.js";import"./Button-Bf0GrAaJ.js";import"./chevron-right-Pa0ufVUP.js";import"./Input-BDhQTr7d.js";import"./search-B8wvEhc-.js";import"./spin-CNKnPFet.js";import"./error-5t3qELAN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4378/ad7659d4f5f253a2aaacaa5f00b120b8f6baa9ca/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
