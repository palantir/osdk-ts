import{j as n}from"./iframe-CxXsZYaL.js";import{B as e}from"./BasePdfViewer-CfnI9GnA.js";import"./preload-helper-Dt2THrkM.js";import"./index-DPiocoAy.js";import"./BasePdfViewer.module.css-Dgm47h2P.js";import"./PdfViewerAnnotationLayer-BH8zIGdl.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--Zl3u4P2.js";import"./PdfViewerOutlineSidebar-B3sE-pAy.js";import"./PdfViewerSidebarHeader-p1Dv2uHI.js";import"./useBaseUiId-Bv8MvEl3.js";import"./useControlled-CCbrWuYr.js";import"./CompositeRoot-ZVj8zSQs.js";import"./CompositeItem-ltfNlpKQ.js";import"./ToolbarRootContext-DwwnRCz6.js";import"./composite-DTKgIMa8.js";import"./svgIconContainer-B1eyjN3k.js";import"./PdfViewerSearchBar-BAp3wtcq.js";import"./chevron-up-fhAvyM3e.js";import"./chevron-down-LKr_hJQt.js";import"./cross-DyjS402Z.js";import"./PdfViewerSidebar-CWpPuR_b.js";import"./index-CvA8CM7Y.js";import"./index-Cegb6wp-.js";import"./index-BIZErmx-.js";import"./PdfViewerToolbar-Bu_bRuTJ.js";import"./Button-By61fxAS.js";import"./chevron-right-De3JpDtO.js";import"./Input-CWxuf688.js";import"./search-DvGGeQU1.js";import"./spin-CZmLGr5c.js";import"./error-D5twijSF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4101/4b7d013da5d763b9df3e159ea5e5e71f66ad2cda/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
