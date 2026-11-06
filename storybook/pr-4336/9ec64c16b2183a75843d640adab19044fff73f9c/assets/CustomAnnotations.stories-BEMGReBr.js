import{j as n}from"./iframe-29gR9XhZ.js";import{B as e}from"./BasePdfViewer-ar9JMT39.js";import"./preload-helper-DlT-mGxO.js";import"./index-CrsEpx0M.js";import"./BasePdfViewer.module.css-BHGFA3r6.js";import"./PdfViewerAnnotationLayer-r4YF1qPM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-1OeFBWCV.js";import"./PdfViewerOutlineSidebar-8rymVOmP.js";import"./PdfViewerSidebarHeader-BUThlEeJ.js";import"./useBaseUiId-s8FPLP5u.js";import"./useControlled-DH4JcH5f.js";import"./CompositeRoot-BhXeyUrp.js";import"./CompositeItem-7um1p8gd.js";import"./ToolbarRootContext-Vw1tC3hX.js";import"./composite-C-osCGVl.js";import"./svgIconContainer-B81IYS8r.js";import"./PdfViewerSearchBar-B5LeJG40.js";import"./chevron-up-BqCjK7xm.js";import"./chevron-down-C2ebRgMi.js";import"./cross-CuUhPQxd.js";import"./PdfViewerSidebar-C0iGa4Zz.js";import"./index-DG-eMoMu.js";import"./index-DdlQpJHG.js";import"./index-BVNMC1S5.js";import"./PdfViewerToolbar-DsVY6J_U.js";import"./Button-DYk_F-qJ.js";import"./chevron-right-CZTyla85.js";import"./Input-5lsFnUBK.js";import"./search-DAxbo9jb.js";import"./spin-8Gvb7hZy.js";import"./error-C8ioQ8xA.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4336/9ec64c16b2183a75843d640adab19044fff73f9c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
