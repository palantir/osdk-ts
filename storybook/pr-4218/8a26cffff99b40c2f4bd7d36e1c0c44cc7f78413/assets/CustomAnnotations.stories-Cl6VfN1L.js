import{j as n}from"./iframe-qlavKhcC.js";import{B as e}from"./BasePdfViewer-BPo81BrS.js";import"./preload-helper-C1Px9yiL.js";import"./index-B67iUNS7.js";import"./BasePdfViewer.module.css-B9d2_O8c.js";import"./PdfViewerAnnotationLayer-CBDL4JBB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qCTPXjW2.js";import"./PdfViewerOutlineSidebar-DDU3NkDS.js";import"./PdfViewerSidebarHeader-CBZsWubG.js";import"./useBaseUiId-D99Is1tN.js";import"./useControlled-DfaRfuwf.js";import"./CompositeRoot-BYTqPwEC.js";import"./CompositeItem-DQfjGBA0.js";import"./ToolbarRootContext-CciloOLN.js";import"./composite-BRoxV9_z.js";import"./svgIconContainer-B4I2H2FD.js";import"./PdfViewerSearchBar-BRBt9c3e.js";import"./chevron-up-sxwRQlTI.js";import"./chevron-down-CeWg8uEU.js";import"./cross-_jhIc_Zd.js";import"./PdfViewerSidebar-Dl8IIT0U.js";import"./index-8MYCUco8.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./PdfViewerToolbar-CJq07Wmx.js";import"./Button-r2aYddAL.js";import"./chevron-right-BGDX78vO.js";import"./Input-CtY9R5P4.js";import"./search-UuNwtUH-.js";import"./spin-BDQl5Vxu.js";import"./error-DGVK5Ulu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4218/8a26cffff99b40c2f4bd7d36e1c0c44cc7f78413/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
