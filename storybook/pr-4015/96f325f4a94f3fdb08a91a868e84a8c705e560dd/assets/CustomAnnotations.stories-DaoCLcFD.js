import{j as n}from"./iframe-Dv4QQ6Y4.js";import{B as e}from"./BasePdfViewer-CE4s1jrW.js";import"./preload-helper-BZeo2aa_.js";import"./index-Bo5vUrye.js";import"./BasePdfViewer.module.css-B1gqsE3z.js";import"./PdfViewerAnnotationLayer-CWl3J772.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DxgcQVnT.js";import"./PdfViewerOutlineSidebar-CXZ7i9Hy.js";import"./PdfViewerSidebarHeader-B3dgj-C8.js";import"./useBaseUiId-DPM9QPEL.js";import"./useControlled-BcGMXD3D.js";import"./CompositeRoot-V7t5avHu.js";import"./CompositeItem-b4hZwQ2E.js";import"./ToolbarRootContext-Blue4JH4.js";import"./composite-D2e8WeVr.js";import"./svgIconContainer-De6SA4Dr.js";import"./PdfViewerSearchBar-CYe0-EEm.js";import"./chevron-up-S7OuVv0m.js";import"./chevron-down-XPf4kqix.js";import"./cross-CTXbroJK.js";import"./PdfViewerSidebar-B4AGaxry.js";import"./index-X99WJuZn.js";import"./index-D7zPEcZE.js";import"./index-wUCDkndP.js";import"./PdfViewerToolbar-3l7EisOD.js";import"./Button-B_X3_bQA.js";import"./chevron-right-BEK8PyQr.js";import"./Input-DTNwj_yO.js";import"./search-CWgR1vVP.js";import"./spin-BFd6LcUB.js";import"./error-CMA_8Zv0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/96f325f4a94f3fdb08a91a868e84a8c705e560dd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
