import{j as n}from"./iframe-DfNFuvd8.js";import{B as e}from"./BasePdfViewer-DZbNXZlb.js";import"./preload-helper-B2A7KixS.js";import"./index-hJ034l85.js";import"./BasePdfViewer.module.css-D_in-y_o.js";import"./PdfViewerAnnotationLayer-C0FKZoRX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Ds1EgoTz.js";import"./PdfViewerOutlineSidebar-MHRjq6I6.js";import"./PdfViewerSidebarHeader-DLaWMWBO.js";import"./useBaseUiId-Bo6GSES5.js";import"./useControlled-P4f8RlVJ.js";import"./CompositeRoot-SfYs0Up-.js";import"./CompositeItem-C2W2AWaC.js";import"./ToolbarRootContext-BppEIMJO.js";import"./composite-D6AWaxnU.js";import"./svgIconContainer-B6TYwpfX.js";import"./PdfViewerSearchBar-ClyD9BK4.js";import"./chevron-up-DPk2RPjn.js";import"./chevron-down-C8YJ1kBl.js";import"./cross-CBZgOvDJ.js";import"./PdfViewerSidebar-lHof0iF-.js";import"./index-D4IU9xHw.js";import"./index-DO9KDqDU.js";import"./index-Co9EvdKx.js";import"./PdfViewerToolbar-D61toMJZ.js";import"./Button-BqZDxH8m.js";import"./chevron-right-CypUrES5.js";import"./Input-DQxNJVQ9.js";import"./search-C0uD-Uv6.js";import"./spin-BCyI-_Fe.js";import"./error-ThwmBgve.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3974/691f5c1ad87dc123229a320ebbe7be90392dfe14/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
