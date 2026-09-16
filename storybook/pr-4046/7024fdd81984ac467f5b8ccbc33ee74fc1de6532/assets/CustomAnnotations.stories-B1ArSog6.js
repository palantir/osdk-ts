import{j as n}from"./iframe-DaCuFEr4.js";import{B as e}from"./BasePdfViewer-BdzKrfKk.js";import"./preload-helper-CH__3C9o.js";import"./index-DBgsNfjF.js";import"./BasePdfViewer.module.css-C1zI1tNE.js";import"./PdfViewerAnnotationLayer-COJs5GwV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXV4-MLN.js";import"./PdfViewerOutlineSidebar-CNlHuIcU.js";import"./PdfViewerSidebarHeader-KQN-j8bD.js";import"./useBaseUiId-ONC8Xt4g.js";import"./useControlled-qOz3lv_a.js";import"./CompositeRoot-a5XcNEy2.js";import"./CompositeItem-CUKWIiHk.js";import"./ToolbarRootContext-BhpmgE0w.js";import"./composite-dd7jjZk4.js";import"./svgIconContainer-xI7GONU5.js";import"./PdfViewerSearchBar-CB0i3I6D.js";import"./chevron-up-Wbqk9-ry.js";import"./chevron-down-kPE5lOM8.js";import"./cross-Dvh7Mb4q.js";import"./PdfViewerSidebar-CZcDlZY-.js";import"./index-CGnRKytQ.js";import"./index-dtUyYAkL.js";import"./index-B2p2pg25.js";import"./PdfViewerToolbar-C5Gm7vDt.js";import"./Button-BSyutd6a.js";import"./chevron-right-DKAWtf1g.js";import"./Input-9OWE4hHY.js";import"./search-D050E2Ix.js";import"./spin-DdKkev4B.js";import"./error-C-IGdotI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4046/7024fdd81984ac467f5b8ccbc33ee74fc1de6532/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
