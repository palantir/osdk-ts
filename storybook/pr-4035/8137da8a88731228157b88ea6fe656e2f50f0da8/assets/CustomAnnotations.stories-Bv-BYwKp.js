import{j as n}from"./iframe-xdaTYGRj.js";import{B as e}from"./BasePdfViewer-C01ZWVxN.js";import"./preload-helper-DZUDwwCn.js";import"./index-BdPDvpnl.js";import"./BasePdfViewer.module.css-ysIP3xHH.js";import"./PdfViewerAnnotationLayer-a6OUmBfE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-sLooy4_p.js";import"./PdfViewerOutlineSidebar-CD4l53he.js";import"./PdfViewerSidebarHeader-Byj7gQQN.js";import"./useBaseUiId-CxUh_Q__.js";import"./useControlled-BvC-sVWY.js";import"./CompositeRoot-Bs6SmXSZ.js";import"./CompositeItem-Cl6_46jA.js";import"./ToolbarRootContext-5SJeTWub.js";import"./composite-BBMq-zQx.js";import"./svgIconContainer-exvQzp4T.js";import"./PdfViewerSearchBar-Chg5nS8u.js";import"./chevron-up-Bbf1YR7J.js";import"./chevron-down-aagd7exO.js";import"./cross-CSoA2ZQa.js";import"./PdfViewerSidebar-DciFNHEa.js";import"./index-CUVjcwyy.js";import"./index-ChGZ1vto.js";import"./index-DjfesuTU.js";import"./PdfViewerToolbar-YqP-gY08.js";import"./Button-DhIcXnSN.js";import"./chevron-right-DiPujZJc.js";import"./Input-CVYxdw6a.js";import"./search-Ba1wUlyN.js";import"./spin-B6Fp9DIr.js";import"./error-CApwHpph.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4035/8137da8a88731228157b88ea6fe656e2f50f0da8/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
