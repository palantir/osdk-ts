import{j as n}from"./iframe-DX9GTmTS.js";import{B as e}from"./BasePdfViewer-B7Ik1yZK.js";import"./preload-helper-BJHRWIj0.js";import"./index-qD7KPbHv.js";import"./BasePdfViewer.module.css-CM0kH4Z7.js";import"./PdfViewerAnnotationLayer-CNdFX5xk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Be3bZCfc.js";import"./PdfViewerOutlineSidebar-J72h8Gkb.js";import"./PdfViewerSidebarHeader-BI3nX7Bu.js";import"./useBaseUiId-LIEARN9F.js";import"./useControlled-Bbq2I_dd.js";import"./CompositeRoot-Bv91Ukc9.js";import"./CompositeItem-CDg-ghY6.js";import"./ToolbarRootContext-HucsP966.js";import"./composite-YtQb8O1c.js";import"./svgIconContainer-DiXmcE79.js";import"./PdfViewerSearchBar-Bx-c0Fu7.js";import"./chevron-up-CHv3hu-4.js";import"./chevron-down-DasCvZc6.js";import"./cross-CnnW3pn0.js";import"./PdfViewerSidebar-Djospvqk.js";import"./index-B6DX-C20.js";import"./index-D6AHn8lU.js";import"./index-BFmznvox.js";import"./PdfViewerToolbar-ht-C_2Nb.js";import"./Button-B-xJiokr.js";import"./chevron-right-BsVP4_og.js";import"./Input-D3jwcYVb.js";import"./search-CpS_oLmz.js";import"./spin-BLxO64LV.js";import"./error-BLx5cAN8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/75a72d169c67295ca4bc3a7e95c24debf2cf178a/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
