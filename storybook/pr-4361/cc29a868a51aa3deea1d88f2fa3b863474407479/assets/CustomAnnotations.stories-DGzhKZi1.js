import{j as n}from"./iframe-B_zRUDuE.js";import{B as e}from"./BasePdfViewer-DL2PVFS_.js";import"./preload-helper-CxVJftgz.js";import"./index-sn9mtHlU.js";import"./BasePdfViewer.module.css-CWqfZV37.js";import"./PdfViewerAnnotationLayer-DjT6i1Ue.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BvfWs4CC.js";import"./PdfViewerOutlineSidebar-CZ-v93ul.js";import"./PdfViewerSidebarHeader-Cupy7n1_.js";import"./useBaseUiId-8u_jCgH6.js";import"./useControlled-DlwI9PYM.js";import"./CompositeRoot-DabLffaR.js";import"./CompositeItem-LThRFFEu.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./composite-CiMgDYUm.js";import"./svgIconContainer-CxXL_oXh.js";import"./PdfViewerSearchBar-bIVaehP_.js";import"./chevron-up-Cu1qiw7I.js";import"./chevron-down-C87rVGKO.js";import"./cross-_ERVYG6L.js";import"./PdfViewerSidebar-CrlOHY6d.js";import"./index-Cq4s-83z.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./PdfViewerToolbar-O6wtHzX6.js";import"./Button-CY0tELjq.js";import"./chevron-right-Bx8U6jva.js";import"./Input-Db4KedVJ.js";import"./search-C1xWyvK0.js";import"./spin-BtbQsrFZ.js";import"./error-Co0vxDqJ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4361/cc29a868a51aa3deea1d88f2fa3b863474407479/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
