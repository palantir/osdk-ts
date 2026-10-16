import{j as n}from"./iframe-DMhUx0Fg.js";import{B as e}from"./BasePdfViewer-BJL6hMSV.js";import"./preload-helper-Cihlk8Ge.js";import"./index-Cml4Y89r.js";import"./BasePdfViewer.module.css-Daks1CRM.js";import"./PdfViewerAnnotationLayer-VKEb4ALk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DdXthZ4I.js";import"./PdfViewerOutlineSidebar-BnRUDzqu.js";import"./PdfViewerSidebarHeader-C1as9rug.js";import"./useBaseUiId-Cn1m1c-i.js";import"./useControlled-BnYANE82.js";import"./CompositeRoot-B48OK5Gf.js";import"./CompositeItem-CruspLcZ.js";import"./ToolbarRootContext-D6p48e5t.js";import"./composite-ElTKsJn6.js";import"./svgIconContainer-BbR8LDbO.js";import"./PdfViewerSearchBar-C59Sp_jW.js";import"./chevron-up-DDcEa6jV.js";import"./chevron-down-DfsmE1o_.js";import"./cross-B04SzZ9a.js";import"./PdfViewerSidebar-etvsWfSi.js";import"./index-Cg1qZyT8.js";import"./index-BdVR8K9f.js";import"./index-DHMpAz6_.js";import"./PdfViewerToolbar-BsNLxRkm.js";import"./Button-BVqDK7_w.js";import"./chevron-right-sD1RyOne.js";import"./Input-CMBfU9Th.js";import"./search-BhCWHTId.js";import"./spin-CjO__POM.js";import"./error-BGNhUAbf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4230/64af29bb9d7c1963c25cb32523febaa0a6f36bd1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
