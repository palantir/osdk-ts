import{j as n}from"./iframe-BZeHWWBM.js";import{B as e}from"./BasePdfViewer-iFyFTojy.js";import"./preload-helper-BMO_GDYl.js";import"./index-BghiDG-K.js";import"./BasePdfViewer.module.css-CrB8Ywwn.js";import"./PdfViewerAnnotationLayer-CnRXz4o_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BGJkiKse.js";import"./PdfViewerOutlineSidebar-JWe6SlI5.js";import"./PdfViewerSidebarHeader-yxxM3bx5.js";import"./useBaseUiId-DiD1p4wn.js";import"./useControlled-BuZ3yaTV.js";import"./CompositeRoot-oRfK9LBg.js";import"./CompositeItem-DFk3jTw_.js";import"./ToolbarRootContext-Uoj_ihh4.js";import"./composite-BY8Pgpco.js";import"./svgIconContainer-P70a1ca6.js";import"./PdfViewerSearchBar-8k-BnM_3.js";import"./chevron-up-Dw1HlDJ8.js";import"./chevron-down-C-j3k1fh.js";import"./cross-DAs0FyHT.js";import"./PdfViewerSidebar-EcMUZewZ.js";import"./index-DA_WNnQg.js";import"./index-ssl2u5fL.js";import"./index-Demepb3A.js";import"./PdfViewerToolbar-XUZCj8W6.js";import"./Button-SYhaaomn.js";import"./chevron-right-D35qH4vr.js";import"./Input-d8OQBydu.js";import"./search-MR2i21ku.js";import"./spin-u2ZUch4c.js";import"./error-Bpqu1oQt.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4150/e66a37bac9aed9004ce81f66ed7e7cea35ff79ed/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
