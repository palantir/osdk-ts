import{j as n}from"./iframe-C3h4Q1BU.js";import{B as e}from"./BasePdfViewer-BpGS1uzo.js";import"./preload-helper-CA8PdwhG.js";import"./index-CuMmyLu1.js";import"./BasePdfViewer.module.css-DbAFLXxL.js";import"./PdfViewerAnnotationLayer-BmS9mFDa.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DQEjwBMB.js";import"./PdfViewerOutlineSidebar-DmBR6QxW.js";import"./PdfViewerSidebarHeader-BS6v9QFy.js";import"./useBaseUiId-CW_7Ddvm.js";import"./useControlled-CJNnVZBn.js";import"./CompositeRoot-BRvgbfd5.js";import"./CompositeItem-DI8BefCP.js";import"./ToolbarRootContext-AG_e6eyt.js";import"./composite-CYiVeAjT.js";import"./svgIconContainer-DnZbbW9L.js";import"./PdfViewerSearchBar-C2GJ3ZnT.js";import"./chevron-up-C5Kuivww.js";import"./chevron-down-BDOZijvO.js";import"./cross-B1EMHtko.js";import"./PdfViewerSidebar-Bp-PIYHt.js";import"./index-DeSqFGSS.js";import"./index-CLYARYT8.js";import"./index-Xgl-RbZw.js";import"./PdfViewerToolbar-CK6zmxt4.js";import"./Button-CgHUffbd.js";import"./chevron-right-CdSw7b20.js";import"./Input-LpvjeHcx.js";import"./search-BrzFjKOS.js";import"./spin-DG4hxKvX.js";import"./error-MSHCVYku.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/7f33926537b2917d3fcb4b2b1d9d4dbb14079dd7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
