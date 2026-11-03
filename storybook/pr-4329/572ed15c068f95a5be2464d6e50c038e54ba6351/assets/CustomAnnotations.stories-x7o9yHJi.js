import{j as n}from"./iframe-WKt3pp3u.js";import{B as e}from"./BasePdfViewer-Bmwd36rK.js";import"./preload-helper-C-2N1dom.js";import"./index-Cn0NPQc9.js";import"./BasePdfViewer.module.css-CXtGAwpK.js";import"./PdfViewerAnnotationLayer-hwXyjbVu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZELayKa.js";import"./PdfViewerOutlineSidebar-DHwVmyII.js";import"./PdfViewerSidebarHeader-qGk5Zx9N.js";import"./useBaseUiId-KSUwx5Md.js";import"./useControlled-CFMpFbMm.js";import"./CompositeRoot-THw1aWyv.js";import"./CompositeItem-Bj3DFZfQ.js";import"./ToolbarRootContext-BEEAtmxq.js";import"./composite-B4lF1Gsb.js";import"./svgIconContainer-Dd6XoJmG.js";import"./PdfViewerSearchBar-BcmGXkCF.js";import"./chevron-up-Ov-XdWcZ.js";import"./chevron-down-sDl6Q2Tv.js";import"./cross-4ZdF9rso.js";import"./PdfViewerSidebar-jSYBUh2W.js";import"./index-D0XVpPOf.js";import"./index-CyjL2alN.js";import"./index-CK4IlmQS.js";import"./PdfViewerToolbar-D7GVaPrD.js";import"./Button-cNgJCMyB.js";import"./chevron-right-CTrkTFbd.js";import"./Input-Caz2RzvD.js";import"./search-Dn1087-G.js";import"./spin-QDhS7Eyn.js";import"./error-Cfg0wGHf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4329/572ed15c068f95a5be2464d6e50c038e54ba6351/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
