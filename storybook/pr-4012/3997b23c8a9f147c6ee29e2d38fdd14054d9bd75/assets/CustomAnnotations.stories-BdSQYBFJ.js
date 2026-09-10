import{j as n}from"./iframe-BFPzVvxY.js";import{B as e}from"./BasePdfViewer-CsRoQMEj.js";import"./preload-helper-CFSQ1G8J.js";import"./index-CCGax6tv.js";import"./BasePdfViewer.module.css-C5ENWO8t.js";import"./PdfViewerAnnotationLayer-CrIrr6u4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DEGV9pLs.js";import"./PdfViewerOutlineSidebar-CFK6pCZT.js";import"./PdfViewerSidebarHeader-Zo95aovO.js";import"./useBaseUiId-lA3GGoRZ.js";import"./useControlled-CS4AozJ9.js";import"./CompositeRoot-DN2463Ao.js";import"./CompositeItem-hoe_aJWZ.js";import"./ToolbarRootContext-Bn6OEZQ8.js";import"./composite-ByiulZct.js";import"./svgIconContainer-zvRTjm1U.js";import"./PdfViewerSearchBar-CEIo8y8w.js";import"./chevron-up-CPyZWxMU.js";import"./chevron-down-Ui6vbKSY.js";import"./cross-CB2SiIfn.js";import"./PdfViewerSidebar-5zbQM0Ut.js";import"./index-D76rkl6E.js";import"./index-CDsjmQfs.js";import"./index-CQTk_3Md.js";import"./PdfViewerToolbar-BwhDMoff.js";import"./Button-DM9BYVFF.js";import"./chevron-right-l3nGihMq.js";import"./Input-SASUrwvz.js";import"./search-B9sXG8EA.js";import"./spin-B_pe3jjg.js";import"./error-C6XCbteP.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4012/3997b23c8a9f147c6ee29e2d38fdd14054d9bd75/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
