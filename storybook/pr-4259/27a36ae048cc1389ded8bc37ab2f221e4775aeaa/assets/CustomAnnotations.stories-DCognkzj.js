import{j as n}from"./iframe-7zkNpsTb.js";import{B as e}from"./BasePdfViewer-b6HQa6SK.js";import"./preload-helper-BcwadNu2.js";import"./index-D2Ps7yda.js";import"./BasePdfViewer.module.css-C6N2ZRcO.js";import"./PdfViewerAnnotationLayer-3tZEV9aJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DAW8hixQ.js";import"./PdfViewerOutlineSidebar-D7rzS3e2.js";import"./PdfViewerSidebarHeader-BK6IijnF.js";import"./useBaseUiId-KSlThZEb.js";import"./useControlled-CgLNclS7.js";import"./CompositeRoot-_klf7eT0.js";import"./CompositeItem-B9MRs6kj.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./composite-BrxcTD8Y.js";import"./svgIconContainer-WZg9oowH.js";import"./PdfViewerSearchBar-FOVASGh6.js";import"./chevron-up--u-AHcXJ.js";import"./chevron-down-R1agRcMd.js";import"./cross-CuqDFG72.js";import"./PdfViewerSidebar-fYIHRbvE.js";import"./index-Bav8Bbwa.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./PdfViewerToolbar-WVnghrU1.js";import"./Button-CF1rIE6I.js";import"./chevron-right-DYbWgAyo.js";import"./Input-Qt7qv0fd.js";import"./search-LTMAICSm.js";import"./spin-Dl9SFnp8.js";import"./error-CKvp5L_L.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4259/27a36ae048cc1389ded8bc37ab2f221e4775aeaa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
