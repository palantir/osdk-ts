import{j as n}from"./iframe-SRdlKq9b.js";import{B as e}from"./BasePdfViewer-BhfeoGSs.js";import"./preload-helper-s1eLnSv0.js";import"./index-DD8FCudr.js";import"./BasePdfViewer.module.css-B8A7Xds1.js";import"./PdfViewerAnnotationLayer-twjzebzv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKYnqjXf.js";import"./PdfViewerOutlineSidebar-DhV-Ve98.js";import"./PdfViewerSidebarHeader-BFzfDn3u.js";import"./useBaseUiId-B4J9k2RX.js";import"./useControlled-wCYPw1x7.js";import"./CompositeRoot-ClqTf6kG.js";import"./CompositeItem-CxO1LzKy.js";import"./ToolbarRootContext-D6KNZ6Ak.js";import"./composite-CZ2o_96f.js";import"./svgIconContainer-BcXM3VSp.js";import"./PdfViewerSearchBar-XS1QV7nY.js";import"./chevron-up-C59nTuy_.js";import"./chevron-down--GHDODIE.js";import"./cross-CXZKrh1h.js";import"./PdfViewerSidebar-Ba1Waymu.js";import"./index-DhMuGg7E.js";import"./index-B4jPuaLR.js";import"./index-Dji29e1U.js";import"./PdfViewerToolbar-Bwh3Dry4.js";import"./Button-D5IcZbYw.js";import"./chevron-right-BIg0iFRe.js";import"./Input-DAJATtsq.js";import"./search-BIvi-2TY.js";import"./spin-DaDhDvcd.js";import"./error-DFAQrfbx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4134/a3800e0b56756a7f4b672f5b7ef3ce555de9cbf0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
