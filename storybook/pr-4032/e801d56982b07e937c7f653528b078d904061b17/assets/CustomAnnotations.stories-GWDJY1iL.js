import{j as n}from"./iframe-2Mr1t1V8.js";import{B as e}from"./BasePdfViewer-Efy9pgnt.js";import"./preload-helper-C_t9encF.js";import"./index-4lXnLG4B.js";import"./BasePdfViewer.module.css-SfQ1yc5k.js";import"./PdfViewerAnnotationLayer-C6kPEYVu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DHlY4_4q.js";import"./PdfViewerOutlineSidebar-C-9Ljj6R.js";import"./PdfViewerSidebarHeader-PH0Ogeg7.js";import"./useBaseUiId-k8zppgsU.js";import"./useControlled-BcBqikwr.js";import"./CompositeRoot-SxKHBNrD.js";import"./CompositeItem-C0DzT1s7.js";import"./ToolbarRootContext-BbL0J01R.js";import"./composite-DgP8pe-I.js";import"./svgIconContainer-tMp-Mvzu.js";import"./PdfViewerSearchBar-mDSla9_S.js";import"./chevron-up-BOsS9HEx.js";import"./chevron-down-DjlK2aIq.js";import"./cross-BRuFKM6t.js";import"./PdfViewerSidebar-Dz1lWyx2.js";import"./index-C4bdzjhC.js";import"./index-5aB3LLsM.js";import"./index-CkMbtK8j.js";import"./PdfViewerToolbar-BhNzZgfE.js";import"./Button-C2c9HqHX.js";import"./chevron-right-DDR6wgwY.js";import"./Input-BAjujx0C.js";import"./search-ysbzXeyh.js";import"./spin-BWhhKayT.js";import"./error-ppckuRwj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4032/e801d56982b07e937c7f653528b078d904061b17/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
