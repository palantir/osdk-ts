import{j as n}from"./iframe-C0wU5abY.js";import{B as e}from"./BasePdfViewer-C-xmjtJK.js";import"./preload-helper-DBF01-cG.js";import"./index-BLQzpxSF.js";import"./BasePdfViewer.module.css-DLxb5J3x.js";import"./PdfViewerAnnotationLayer-BkiAyXuv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DTFUZOsq.js";import"./PdfViewerOutlineSidebar-Y0dqTEd6.js";import"./PdfViewerSidebarHeader-CWm9gvcK.js";import"./useBaseUiId-D1MC7GbA.js";import"./useControlled-jkUj0hrw.js";import"./CompositeRoot-BqNQVx2b.js";import"./CompositeItem-Bqkqz40D.js";import"./ToolbarRootContext-CLHzdGXk.js";import"./composite-BoBrXPGo.js";import"./svgIconContainer-CMAKke71.js";import"./PdfViewerSearchBar-DHG51YiI.js";import"./chevron-up-Y4azxcQ2.js";import"./chevron-down-BwqCCX_Z.js";import"./cross-DjbVostP.js";import"./PdfViewerSidebar-Dsp5kRIV.js";import"./index-BPOkQniY.js";import"./index-Ca4Lp3-b.js";import"./index-VDAEj1qs.js";import"./PdfViewerToolbar-BMyUelGp.js";import"./Button-w-E8GgnT.js";import"./chevron-right-CAawPzh4.js";import"./Input-CuYpucpk.js";import"./search-Kac11RBU.js";import"./spin-Cb1EhGUT.js";import"./error-B8Sv0Q4K.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4329/0703b84ba40ad0956052dd79018e0e7323b222ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
