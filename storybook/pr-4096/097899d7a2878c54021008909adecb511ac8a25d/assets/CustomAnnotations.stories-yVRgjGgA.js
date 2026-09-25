import{j as n}from"./iframe-BDbu9q2A.js";import{B as e}from"./BasePdfViewer-BH06hB-y.js";import"./preload-helper-D6UvTfT_.js";import"./index-DEdyH3XD.js";import"./BasePdfViewer.module.css-BKuwnxjo.js";import"./PdfViewerAnnotationLayer-B9fAR95w.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-qSx5bU5J.js";import"./PdfViewerOutlineSidebar-CYVYiXHZ.js";import"./PdfViewerSidebarHeader-DepBrFp-.js";import"./useBaseUiId-CtmE4PNK.js";import"./useControlled-BgF6R6qa.js";import"./CompositeRoot-CD7yt0Kv.js";import"./CompositeItem-C6O1ODqo.js";import"./ToolbarRootContext-BVuL7AT2.js";import"./composite-qafLk_f6.js";import"./svgIconContainer-BgjPZfOH.js";import"./PdfViewerSearchBar-CCqDDgOW.js";import"./chevron-up-BED3RZzI.js";import"./chevron-down-CbFUQfJ_.js";import"./cross-Bo4wpdXT.js";import"./PdfViewerSidebar-Bw-XxYqA.js";import"./index-BlDxMK-s.js";import"./index-pcLxGNcq.js";import"./index-D3cIaVh4.js";import"./PdfViewerToolbar-BRuCPRy_.js";import"./Button-_DMppLDt.js";import"./chevron-right-DpcRnrIn.js";import"./Input-D0XLj4En.js";import"./search-0NZlkEeX.js";import"./spin-ztbn6an1.js";import"./error-fH6ihPoO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4096/097899d7a2878c54021008909adecb511ac8a25d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
