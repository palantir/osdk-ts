import{j as n}from"./iframe-BxIl83OC.js";import{B as e}from"./BasePdfViewer-D76FYV1K.js";import"./preload-helper-Yx9ZNNpK.js";import"./index-yC7dwiLI.js";import"./BasePdfViewer.module.css-GHxePSa2.js";import"./PdfViewerAnnotationLayer-Yltuc3T5.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DJ1C3NPz.js";import"./PdfViewerOutlineSidebar-D8JHKiiC.js";import"./PdfViewerSidebarHeader-BiLa1yji.js";import"./useBaseUiId-CCOPhUcB.js";import"./useControlled-CtfWN5zI.js";import"./CompositeRoot-Devs8rOn.js";import"./CompositeItem-DIHWAmd-.js";import"./ToolbarRootContext-Cmwitb-c.js";import"./composite-DAGYlNi4.js";import"./svgIconContainer-Bt0ZQcKE.js";import"./PdfViewerSearchBar-B3fj7-lr.js";import"./chevron-up-a_1jNvoE.js";import"./chevron-down-DZwG3tYI.js";import"./cross-CxqX2dHR.js";import"./PdfViewerSidebar-DIgvfXT6.js";import"./index-CcNahi7P.js";import"./index-DcRZYv45.js";import"./index-DjiV5TS-.js";import"./PdfViewerToolbar-BHR8-1Ei.js";import"./Button-D5WuY3ON.js";import"./chevron-right-BgAtLp3Y.js";import"./Input-But5XUYJ.js";import"./search-C6ABKevT.js";import"./spin-DSrlfVK6.js";import"./error-DJcTH0_A.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4050/501ed7b0ec4918720add4de60b0b2aa529ed2f16/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
