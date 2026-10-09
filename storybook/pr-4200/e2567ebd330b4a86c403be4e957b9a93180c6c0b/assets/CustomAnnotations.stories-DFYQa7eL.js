import{j as n}from"./iframe-u7IuoPqS.js";import{B as e}from"./BasePdfViewer-BpQ5Jyr6.js";import"./preload-helper-Cj56MnTO.js";import"./index-BoeQsLqp.js";import"./BasePdfViewer.module.css-CioDctez.js";import"./PdfViewerAnnotationLayer-CiQwGHpa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cy-KQU6S.js";import"./PdfViewerOutlineSidebar-PytAEYy_.js";import"./PdfViewerSidebarHeader-CR6jJoxR.js";import"./useBaseUiId-BbTWfvqf.js";import"./useControlled-Bz9okVK9.js";import"./CompositeRoot-lYIF_IB9.js";import"./CompositeItem-KI1SOpIs.js";import"./ToolbarRootContext-DD30MDHZ.js";import"./composite-CN58o8c7.js";import"./svgIconContainer-B7-2IFM8.js";import"./PdfViewerSearchBar-CcBp-mQQ.js";import"./chevron-up-D3_AW2ZB.js";import"./chevron-down-J58PJfTC.js";import"./cross-C6E9vWMV.js";import"./PdfViewerSidebar-CUQbP6cI.js";import"./index-B0Ziw4xI.js";import"./index-Dj4--fik.js";import"./index-D32Dt5Vb.js";import"./PdfViewerToolbar-DnrabRO7.js";import"./Button-CvzuhgBL.js";import"./chevron-right-Dqzw_DoP.js";import"./Input-zHybezEW.js";import"./search-DFsiEXmE.js";import"./spin-0Z3XOlUZ.js";import"./error-BqAhf9VK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4200/e2567ebd330b4a86c403be4e957b9a93180c6c0b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
