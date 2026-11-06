import{j as n}from"./iframe-CwWTpKqE.js";import{B as e}from"./BasePdfViewer-kDT8r57t.js";import"./preload-helper-B09VY0AV.js";import"./index-ibAAsAIP.js";import"./BasePdfViewer.module.css-BTARtyz1.js";import"./PdfViewerAnnotationLayer-DWmhEYHW.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-cRbyNB48.js";import"./PdfViewerOutlineSidebar-Bpq2Nav8.js";import"./PdfViewerSidebarHeader-CescMaoe.js";import"./useBaseUiId-KfzYfEP4.js";import"./useControlled-Bv0Nsxvt.js";import"./CompositeRoot-B31q0jDA.js";import"./CompositeItem-DdcfEsM9.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./composite-BQxf11e7.js";import"./svgIconContainer-BQKxLrqz.js";import"./PdfViewerSearchBar-oJhtLNaG.js";import"./chevron-up--_jL__5r.js";import"./chevron-down-CndDBIBA.js";import"./cross-DKdi2fit.js";import"./PdfViewerSidebar-Cxh5P7it.js";import"./index-Cf9g6rai.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./PdfViewerToolbar-Eh5OK9cW.js";import"./Button-CRkFmj-6.js";import"./chevron-right-YUIedYD6.js";import"./Input-Chlp8aHK.js";import"./search-sqlqxwkc.js";import"./spin-C0wYKf4d.js";import"./error-DLpjz71D.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4343/66327b07c2612e89fb6ec9bd1d5b856905ac3a17/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
