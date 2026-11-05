import{j as n}from"./iframe-BRIJTziU.js";import{B as e}from"./BasePdfViewer-Dmf68ygG.js";import"./preload-helper-C7wNDItT.js";import"./index-A6JnTqM7.js";import"./BasePdfViewer.module.css-uVmOg1uX.js";import"./PdfViewerAnnotationLayer-CpcNd1Oh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DNxam5ik.js";import"./PdfViewerOutlineSidebar-C--GpIh7.js";import"./PdfViewerSidebarHeader-DfUxNy3L.js";import"./useBaseUiId-BsprSJc0.js";import"./useControlled-C4JFDSuR.js";import"./CompositeRoot-c2XCuNRz.js";import"./CompositeItem-CJpL3T-F.js";import"./ToolbarRootContext-BQGWwMmx.js";import"./composite-C9avNQ9h.js";import"./svgIconContainer-CIdhA9rp.js";import"./PdfViewerSearchBar-BBkU6IT5.js";import"./chevron-up-BEWxaHRE.js";import"./chevron-down-DQOobcC7.js";import"./cross-DvI1_HyP.js";import"./PdfViewerSidebar-D4-1B-30.js";import"./index-D3hbdvY7.js";import"./index-D9UptnGB.js";import"./index-B8iBQzP0.js";import"./PdfViewerToolbar-C23reBYx.js";import"./Button-Dh4qqTQa.js";import"./chevron-right-kkXrbyCb.js";import"./Input-Boj06qte.js";import"./search-BB6i5fl7.js";import"./spin-B1kcVIIQ.js";import"./error-D4dPzE3W.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4333/24bc30b6f8ddbede2d2af5e89b198fe6063d22a1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
