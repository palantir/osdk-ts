import{j as n}from"./iframe-KfcHTeg1.js";import{B as e}from"./BasePdfViewer-uSBVJITR.js";import"./preload-helper-Bb9isu9Z.js";import"./index-R7bO3Ag2.js";import"./BasePdfViewer.module.css-BvhsX8xh.js";import"./PdfViewerAnnotationLayer-DM1SOATv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-HglXcJhf.js";import"./PdfViewerOutlineSidebar-CoGC9ZfE.js";import"./PdfViewerSidebarHeader-BffAz82a.js";import"./useBaseUiId-BkW36jG5.js";import"./useControlled-BGj-689N.js";import"./CompositeRoot-qV1MXk6I.js";import"./CompositeItem-D4098fQy.js";import"./ToolbarRootContext-C0NLRCfZ.js";import"./composite-SXE3lJSt.js";import"./svgIconContainer-Bg10ywbV.js";import"./PdfViewerSearchBar-tBmDraOw.js";import"./chevron-up-m63Rpbjo.js";import"./chevron-down-Vk4ljz0Y.js";import"./cross-CsyJ80xs.js";import"./PdfViewerSidebar-Dg-ujMj5.js";import"./index-BPifgcSB.js";import"./index-Bw8KhB5T.js";import"./index-C2P4ds86.js";import"./PdfViewerToolbar-CZQaUH4r.js";import"./Button-DOEhPeJL.js";import"./chevron-right-B7zBiXz4.js";import"./Input-CN3mZMt5.js";import"./search-srmRE2lv.js";import"./spin-DEZpjMOy.js";import"./error-BE8S7DUo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4064/c3f0c0044d6e13e2052bd2b96829fcc362831d98/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
