import{j as n}from"./iframe-CrY1A4wu.js";import{B as e}from"./BasePdfViewer-DuIfvs-u.js";import"./preload-helper-BFzS6-eq.js";import"./index-BbE0G0zt.js";import"./BasePdfViewer.module.css-BDMKe1-V.js";import"./PdfViewerAnnotationLayer-C1KYVwCx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOlf-uUA.js";import"./PdfViewerOutlineSidebar-BJ8lf9vr.js";import"./PdfViewerSidebarHeader-_7vlhdDc.js";import"./useBaseUiId-Cs8gIZmf.js";import"./useControlled-BE-RLK2-.js";import"./CompositeRoot-B3d_W05X.js";import"./CompositeItem-51mDofen.js";import"./ToolbarRootContext-Coy-eXOe.js";import"./composite-AFOTQ2-F.js";import"./svgIconContainer-B3_v06mI.js";import"./PdfViewerSearchBar-BvYZQiI7.js";import"./chevron-up-DlFp49_F.js";import"./chevron-down-Bu2NJksL.js";import"./cross-CzBl0tbg.js";import"./PdfViewerSidebar-CIvOCKcy.js";import"./index-CAMlkz_c.js";import"./index-C3rJi8nM.js";import"./index-DV4D4tWk.js";import"./PdfViewerToolbar-CEF04A50.js";import"./Button-C9zZFhV6.js";import"./chevron-right-CZUwqizw.js";import"./Input-DUtiftPz.js";import"./search-DZE4oD9r.js";import"./spin-Dn3nTwY1.js";import"./error-CvnsbzcB.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4019/9de5c8bd6f8f6fae7b48ee4bbc01f1dbd223ed94/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
