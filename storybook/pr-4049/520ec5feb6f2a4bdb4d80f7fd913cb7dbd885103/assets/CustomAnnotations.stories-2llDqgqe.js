import{j as n}from"./iframe-CJFgfqJQ.js";import{B as e}from"./BasePdfViewer-Bw4zFtkP.js";import"./preload-helper-CB2bVH8w.js";import"./index-BDuqkffg.js";import"./BasePdfViewer.module.css-CyoJbnzs.js";import"./PdfViewerAnnotationLayer-E1APrMth.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DSya-lAQ.js";import"./PdfViewerOutlineSidebar-Cam-YTrX.js";import"./PdfViewerSidebarHeader-DVDdQd0b.js";import"./useBaseUiId-KMobehZg.js";import"./useControlled-HhXb2sFD.js";import"./CompositeRoot-Cc2xxpdp.js";import"./CompositeItem-8xWeC0Vv.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./composite-D_U5DxNy.js";import"./svgIconContainer-SiM3kExX.js";import"./PdfViewerSearchBar-BR-ptGvD.js";import"./chevron-up-BmG3vX6H.js";import"./chevron-down-DGQA7IYp.js";import"./cross-CGqAK_rm.js";import"./PdfViewerSidebar-XnOJbtfN.js";import"./index-DFjPXJ5y.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./PdfViewerToolbar-CIAZt46m.js";import"./Button-cr6PNOy5.js";import"./chevron-right-BbQNND44.js";import"./Input-DmfjYINK.js";import"./search-DdMhLoUU.js";import"./spin-hmIWTH83.js";import"./error-DUmxQ8UR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4049/520ec5feb6f2a4bdb4d80f7fd913cb7dbd885103/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
