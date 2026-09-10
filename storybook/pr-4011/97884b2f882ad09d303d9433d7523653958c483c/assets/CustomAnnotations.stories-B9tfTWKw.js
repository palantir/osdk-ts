import{j as n}from"./iframe-EfiBoZIR.js";import{B as e}from"./BasePdfViewer-B7dEx6yh.js";import"./preload-helper-D_Wykq9t.js";import"./index-0eA-Cgh_.js";import"./BasePdfViewer.module.css-q0mFaiLW.js";import"./PdfViewerAnnotationLayer-BUE2Q6G0.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-hhDMt5Eg.js";import"./PdfViewerOutlineSidebar-CV_Lk9RD.js";import"./PdfViewerSidebarHeader-3ohe6gFe.js";import"./useBaseUiId-cd03ijFK.js";import"./useControlled-RgsLbGbj.js";import"./CompositeRoot-C0VK9r29.js";import"./CompositeItem-Bcq4203w.js";import"./ToolbarRootContext-VaUVpuNK.js";import"./composite-CC9kaygZ.js";import"./svgIconContainer-Daui2Dw7.js";import"./PdfViewerSearchBar-gXIzShsD.js";import"./chevron-up-B0NzWakg.js";import"./chevron-down-Bjf9KWk2.js";import"./cross-BOeJXaLq.js";import"./PdfViewerSidebar-BAGqtaCR.js";import"./index-kHpZltIW.js";import"./index-CaF7GUuf.js";import"./index-B7OwTQ75.js";import"./PdfViewerToolbar-DdqNBi8H.js";import"./Button-WoBFNDMc.js";import"./chevron-right-CWkvq6Yb.js";import"./Input-Bf8UFFCR.js";import"./search-DW9KpidM.js";import"./spin-B780Ry0q.js";import"./error-CzXhBCLL.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4011/97884b2f882ad09d303d9433d7523653958c483c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
