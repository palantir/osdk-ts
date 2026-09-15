import{j as n}from"./iframe-DuUcAaP1.js";import{B as e}from"./BasePdfViewer-C5Z7kBBz.js";import"./preload-helper-Cljs7IBf.js";import"./index-BMAxCDX5.js";import"./BasePdfViewer.module.css-BoMTSAWC.js";import"./PdfViewerAnnotationLayer-B8_yNU4I.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CbjfTuSn.js";import"./PdfViewerOutlineSidebar-z4Vt2n8K.js";import"./PdfViewerSidebarHeader-VVkAk4Z_.js";import"./useBaseUiId-CfMTCz35.js";import"./useControlled-hj_GBxd9.js";import"./CompositeRoot-BsxybYJF.js";import"./CompositeItem-t4AJuCm-.js";import"./ToolbarRootContext-USv7Hl-3.js";import"./composite-D0tirFPb.js";import"./svgIconContainer-D6Wl3-m9.js";import"./PdfViewerSearchBar-A_gCAbp2.js";import"./chevron-up-wrksAtHw.js";import"./chevron-down-DyPw48Bz.js";import"./cross-DA3pEoMX.js";import"./PdfViewerSidebar-CKlmNxFr.js";import"./index-BdrLvqg1.js";import"./index-C7wdlZ1Q.js";import"./index-C8RlHGqn.js";import"./PdfViewerToolbar-CaGDj3oE.js";import"./Button-DYK5XWRq.js";import"./chevron-right-DnDRfasm.js";import"./Input-ZBAaH2zD.js";import"./search-B301Jn8l.js";import"./spin-BRZ1-F1z.js";import"./error-CQ18bNi9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4034/2fd09b8523b3f3eaa6c51d358a7b520a135c7868/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
