import{j as n}from"./iframe-CZutwAHo.js";import{B as e}from"./BasePdfViewer-CJ5mTbmg.js";import"./preload-helper-Cn3SJHww.js";import"./index-CppgNV0M.js";import"./BasePdfViewer.module.css-QoniOcjE.js";import"./PdfViewerAnnotationLayer-D7ks1G5v.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DFH1kdNg.js";import"./PdfViewerOutlineSidebar-DQtFlS8I.js";import"./PdfViewerSidebarHeader-Du4QaCj4.js";import"./useBaseUiId-CtEICjky.js";import"./useControlled-DwVRdNhF.js";import"./CompositeRoot-C8u2mIP6.js";import"./CompositeItem-DdZNAqnt.js";import"./ToolbarRootContext-FQPAQT5c.js";import"./composite-mcUSxhXz.js";import"./svgIconContainer-CmX1H1mx.js";import"./PdfViewerSearchBar-BOajyowB.js";import"./chevron-up-Do7i4imw.js";import"./chevron-down--5qYG9Xz.js";import"./cross-D02obdgD.js";import"./PdfViewerSidebar-CBOw9D8T.js";import"./index-io1wfiP6.js";import"./index-B50GZKUg.js";import"./index-2k1Tvx5C.js";import"./PdfViewerToolbar-D6bwXwRz.js";import"./Button-sSK8eFI-.js";import"./chevron-right-ZQQVd5_L.js";import"./Input-oDj_0Z0d.js";import"./search-C59PF3w9.js";import"./spin-DsPd2PjO.js";import"./error-CZtG4Hsy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4116/a91324351fe43aae5c7a47eea48e8da20290f37b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
