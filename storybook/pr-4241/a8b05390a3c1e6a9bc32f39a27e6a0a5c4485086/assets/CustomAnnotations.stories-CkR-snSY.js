import{j as n}from"./iframe-8ifTlOPI.js";import{B as e}from"./BasePdfViewer-DSSqyzGn.js";import"./preload-helper-qjA7iF_h.js";import"./index-zP_CtKeM.js";import"./BasePdfViewer.module.css-D_GnWEAQ.js";import"./PdfViewerAnnotationLayer-CDG_iZAq.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-vYgxtu9L.js";import"./PdfViewerOutlineSidebar-BXmGvP99.js";import"./PdfViewerSidebarHeader-cqeQIQIA.js";import"./useBaseUiId-Cwh1jhj-.js";import"./useControlled-CyFBz6dn.js";import"./CompositeRoot-Ccf4syiJ.js";import"./CompositeItem-DP3maplG.js";import"./ToolbarRootContext-BVL9-YVY.js";import"./composite-B4CIj8hm.js";import"./svgIconContainer-D_TXE4Bb.js";import"./PdfViewerSearchBar-D51hChCx.js";import"./chevron-up-BBOSnLhC.js";import"./chevron-down-BBwBJyH3.js";import"./cross-CL785k1k.js";import"./PdfViewerSidebar-Npu1Fugz.js";import"./index-DPyB-hEV.js";import"./index-CoyaXW0G.js";import"./index-DwMFEFqg.js";import"./PdfViewerToolbar-B4lu-K-i.js";import"./Button-CkeTq1uo.js";import"./chevron-right-sxxYvo7F.js";import"./Input-CMGBsI9h.js";import"./search-cZtZgUJN.js";import"./spin-Cy22qQuQ.js";import"./error-CEWX4lms.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/a8b05390a3c1e6a9bc32f39a27e6a0a5c4485086/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
