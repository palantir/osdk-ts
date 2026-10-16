import{j as n}from"./iframe-Ce3jEZMI.js";import{B as e}from"./BasePdfViewer-CKQagz6F.js";import"./preload-helper-zFlo1Ag_.js";import"./index-BWRu0lVk.js";import"./BasePdfViewer.module.css-CSpGl1J1.js";import"./PdfViewerAnnotationLayer-y8ak27rw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-EYla1O4o.js";import"./PdfViewerOutlineSidebar-BzY3wUow.js";import"./PdfViewerSidebarHeader-D7ag6p38.js";import"./useBaseUiId-QnL0ah19.js";import"./useControlled-CEIiJDdv.js";import"./CompositeRoot-DM1zo66r.js";import"./CompositeItem-MWi5EakA.js";import"./ToolbarRootContext-DrlyoX7_.js";import"./composite-ow-DJQ4K.js";import"./svgIconContainer-C7wsxhu-.js";import"./PdfViewerSearchBar-DuSNOnlm.js";import"./chevron-up-CIRW580U.js";import"./chevron-down-BQlmJQrq.js";import"./cross-BA6yBz5j.js";import"./PdfViewerSidebar-Des7EW6s.js";import"./index-NRrcQACQ.js";import"./index-BVVmi8IY.js";import"./index-BJoSdgxJ.js";import"./PdfViewerToolbar-T3BnsiQo.js";import"./Button-DAGPL7mA.js";import"./chevron-right-fh9jRJKZ.js";import"./Input-k1XluRBB.js";import"./search-BNuIHYDK.js";import"./spin-CJb9f62b.js";import"./error-C6zcgIRz.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3957/982355ac2af1a0c249885ecd6f8408e87abca2d7/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
