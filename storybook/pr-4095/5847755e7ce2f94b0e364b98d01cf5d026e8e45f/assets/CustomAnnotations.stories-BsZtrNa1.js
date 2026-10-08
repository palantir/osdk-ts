import{j as n}from"./iframe-CYRFLlEO.js";import{B as e}from"./BasePdfViewer-D-6tZgOu.js";import"./preload-helper-ChluBdBb.js";import"./index-DgFaecLv.js";import"./BasePdfViewer.module.css-T_KvBq1y.js";import"./PdfViewerAnnotationLayer-im5bThOJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-eZ3PryMZ.js";import"./PdfViewerOutlineSidebar-BldZvSyh.js";import"./PdfViewerSidebarHeader-BxMTkas1.js";import"./useBaseUiId-CT8xqfBr.js";import"./useControlled-D5UJw3Fq.js";import"./CompositeRoot-D_az8Pw9.js";import"./CompositeItem-EG5A4Ctt.js";import"./ToolbarRootContext-DIul4zOr.js";import"./composite-DBnR4BVO.js";import"./svgIconContainer-DXkF8wrQ.js";import"./PdfViewerSearchBar-iMNQiEzA.js";import"./chevron-up-y_OSlWJk.js";import"./chevron-down-QtZPW63O.js";import"./cross-DBpyyU9C.js";import"./PdfViewerSidebar-Do79OJIq.js";import"./index-BjdI_b09.js";import"./index-C8sdjwtp.js";import"./index-BCjTJI3_.js";import"./PdfViewerToolbar-DsoOXCfk.js";import"./Button-CGEba4bS.js";import"./chevron-right-DZ_Enpwr.js";import"./Input-CemPVcnY.js";import"./search-gMbThLhN.js";import"./spin-ByUU5jdD.js";import"./error-CvsmrG6o.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4095/5847755e7ce2f94b0e364b98d01cf5d026e8e45f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
