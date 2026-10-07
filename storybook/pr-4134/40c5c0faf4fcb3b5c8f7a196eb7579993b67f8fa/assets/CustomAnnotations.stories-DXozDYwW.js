import{j as n}from"./iframe-Cm8T158U.js";import{B as e}from"./BasePdfViewer-BjHUZSAe.js";import"./preload-helper-Dg6khx2b.js";import"./index-CgyhAk5D.js";import"./BasePdfViewer.module.css-Drez132c.js";import"./PdfViewerAnnotationLayer-DtCSOBOZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DDz57owk.js";import"./PdfViewerOutlineSidebar-DFzjL5ga.js";import"./PdfViewerSidebarHeader-9L5JJWkv.js";import"./useBaseUiId-DOlC9YEi.js";import"./useControlled-2KbdkYL7.js";import"./CompositeRoot-C7uTznLk.js";import"./CompositeItem-DdfovVZg.js";import"./ToolbarRootContext-81tt_rrb.js";import"./composite-BF9l_TFl.js";import"./svgIconContainer-CwvpItZa.js";import"./PdfViewerSearchBar-DDLsa6Cn.js";import"./chevron-up-DONvJUai.js";import"./chevron-down-CcWrtqn6.js";import"./cross-DRMZ0Z7-.js";import"./PdfViewerSidebar-C82bBFBm.js";import"./index-D9OySAXe.js";import"./index-B-f--Lzy.js";import"./index-DBvuzU0Y.js";import"./PdfViewerToolbar-xQcvqpFj.js";import"./Button-CDJirsdr.js";import"./chevron-right-CgA4kMgd.js";import"./Input-CwlN5ff_.js";import"./search-C5kq4KUb.js";import"./spin-DPE7y9Pf.js";import"./error-W0yg1EoP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4134/40c5c0faf4fcb3b5c8f7a196eb7579993b67f8fa/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
