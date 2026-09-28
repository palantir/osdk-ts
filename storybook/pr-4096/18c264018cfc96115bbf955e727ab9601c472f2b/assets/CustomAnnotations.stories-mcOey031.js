import{j as n}from"./iframe-Dtb1PIwC.js";import{B as e}from"./BasePdfViewer-Xr5XLa7Q.js";import"./preload-helper-CrZ439aZ.js";import"./index-CLrFOtS8.js";import"./BasePdfViewer.module.css-D8L-Gitd.js";import"./PdfViewerAnnotationLayer-BxwF1ihI.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BrmM7Jj7.js";import"./PdfViewerOutlineSidebar-CISqyHUF.js";import"./PdfViewerSidebarHeader-DwClTKAO.js";import"./useBaseUiId-COzzw9eg.js";import"./useControlled-C9h-MgnN.js";import"./CompositeRoot-kBz1TnJC.js";import"./CompositeItem-DJjbAwA2.js";import"./ToolbarRootContext-CVyIw6JT.js";import"./composite-BY6IafNz.js";import"./svgIconContainer-DpSb0Wlf.js";import"./PdfViewerSearchBar-Q7v43WBt.js";import"./chevron-up-BwMh7bxG.js";import"./chevron-down-CjmVxAZS.js";import"./cross-CVJIQSJP.js";import"./PdfViewerSidebar-BEXUpls1.js";import"./index-BYzRMw1m.js";import"./index-v7pWAnnW.js";import"./index-0o9LwOHv.js";import"./PdfViewerToolbar-CvWSNso1.js";import"./Button-CLxSMUqH.js";import"./chevron-right-RHWSxcp_.js";import"./Input-77thj6XN.js";import"./search-BvnVhgRx.js";import"./spin-D8OEjAhE.js";import"./error-BTkWOlta.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4096/18c264018cfc96115bbf955e727ab9601c472f2b/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
