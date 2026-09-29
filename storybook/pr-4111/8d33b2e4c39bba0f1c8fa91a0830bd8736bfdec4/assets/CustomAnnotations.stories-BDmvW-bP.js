import{j as n}from"./iframe-DKYmESdc.js";import{B as e}from"./BasePdfViewer-uq3CwJ3U.js";import"./preload-helper-D5LE5Idy.js";import"./index-DiIAgi_U.js";import"./BasePdfViewer.module.css-DxfynlAF.js";import"./PdfViewerAnnotationLayer-L0wt40Fu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BWxC9JdA.js";import"./PdfViewerOutlineSidebar-tUj6B0d8.js";import"./PdfViewerSidebarHeader-wtgERN1h.js";import"./useBaseUiId-CdKuMMMb.js";import"./useControlled-B4q39qZO.js";import"./CompositeRoot-DH-62Ccm.js";import"./CompositeItem-DhBadV4y.js";import"./ToolbarRootContext-CrwTeoix.js";import"./composite-DHljAWKo.js";import"./svgIconContainer-D8ijfEF1.js";import"./PdfViewerSearchBar-_UBQiXn4.js";import"./chevron-up-BmWTrK3U.js";import"./chevron-down-D1R0n3KO.js";import"./cross-yKYTlWK6.js";import"./PdfViewerSidebar-B9y_jjI4.js";import"./index-CC7Zqv6C.js";import"./index-Dh-P4ImN.js";import"./index-BEPjmphW.js";import"./PdfViewerToolbar-CcAD_5Jr.js";import"./Button-DgkmSaF3.js";import"./chevron-right-BrBBJJsR.js";import"./Input-BxCkIabd.js";import"./search-B7mMrQlf.js";import"./spin-BHEzC4mP.js";import"./error-DPhIreuO.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4111/8d33b2e4c39bba0f1c8fa91a0830bd8736bfdec4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
