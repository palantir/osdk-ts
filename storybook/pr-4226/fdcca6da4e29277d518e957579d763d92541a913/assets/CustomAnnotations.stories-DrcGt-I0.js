import{j as n}from"./iframe-B6ilqw57.js";import{B as e}from"./BasePdfViewer-CtPE3ljk.js";import"./preload-helper-D-9CJsjA.js";import"./index-DbyNdYIV.js";import"./BasePdfViewer.module.css-DFx9-Rbl.js";import"./PdfViewerAnnotationLayer-BpSDJpRw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVOYjvEP.js";import"./PdfViewerOutlineSidebar-C8yAjjFV.js";import"./PdfViewerSidebarHeader-BxyW20lH.js";import"./useBaseUiId-DHE-id5O.js";import"./useControlled-B3abm0PF.js";import"./CompositeRoot-CuK8dVS1.js";import"./CompositeItem-C4j1wUUU.js";import"./ToolbarRootContext-DC1oDeWo.js";import"./composite-DlL-mJ_3.js";import"./svgIconContainer-cN2FPQGz.js";import"./PdfViewerSearchBar-vmaBpSwU.js";import"./chevron-up-CoZprayK.js";import"./chevron-down-CMdh2Fjb.js";import"./cross-DPKuiR4p.js";import"./PdfViewerSidebar-DvOX70M6.js";import"./index-FPD_SzEe.js";import"./index-P1JTOsnm.js";import"./index-Df4HlJX1.js";import"./PdfViewerToolbar-DUgGvFtb.js";import"./Button-dJtUFXII.js";import"./chevron-right-DNXlQEZ4.js";import"./Input-DWSs0FOD.js";import"./search-QZJd4Wc4.js";import"./spin-BYwWBAmZ.js";import"./error-DqxELFjs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4226/fdcca6da4e29277d518e957579d763d92541a913/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
