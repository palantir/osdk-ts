import{j as n}from"./iframe-DLzx97EJ.js";import{B as e}from"./BasePdfViewer-BmCpXvZ3.js";import"./preload-helper-CmYTg0Pf.js";import"./index-BEQknSG7.js";import"./BasePdfViewer.module.css-D9f4JZtL.js";import"./PdfViewerAnnotationLayer-CyItciQL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BCrWYLCV.js";import"./PdfViewerOutlineSidebar-C12CcoRT.js";import"./PdfViewerSidebarHeader-BJpxg098.js";import"./useBaseUiId-CAg2kwlj.js";import"./useControlled-BbqDqbUq.js";import"./CompositeRoot-Ba8Rcn-3.js";import"./CompositeItem-zOuWTjc0.js";import"./ToolbarRootContext-N07wipSz.js";import"./composite-TVTsKD6c.js";import"./svgIconContainer-C-g24xF0.js";import"./PdfViewerSearchBar-Bcn7OsrB.js";import"./chevron-up-Ce58O9Gj.js";import"./chevron-down-C33gMPot.js";import"./cross-DRLacgjp.js";import"./PdfViewerSidebar-51YUJHEd.js";import"./index-D_0Hlfon.js";import"./index-CgT906ZM.js";import"./index-Cte0d9nS.js";import"./PdfViewerToolbar-CJ7FrLvA.js";import"./Button-CdJ05kOF.js";import"./chevron-right-Cqarwrtc.js";import"./Input-qCKZZo4z.js";import"./search-C5FqELUQ.js";import"./spin-CnMRGTI-.js";import"./error-DMQmvEXe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4373/5caa51d0c26f9337b9b9987d9900fdf865273251/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
