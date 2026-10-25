import{j as n}from"./iframe-Cr8Hjkao.js";import{B as e}from"./BasePdfViewer-n4IUilae.js";import"./preload-helper-CeOoJBco.js";import"./index-DRoLNVdY.js";import"./BasePdfViewer.module.css-B5I3mQi-.js";import"./PdfViewerAnnotationLayer-B8ZYAs8c.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CuR_qyNj.js";import"./PdfViewerOutlineSidebar-y1H96BaH.js";import"./PdfViewerSidebarHeader-4cLiHRtC.js";import"./useBaseUiId-BJlElnor.js";import"./useControlled-qAgRHhDO.js";import"./CompositeRoot-Czmwub35.js";import"./CompositeItem-RD-StT-2.js";import"./ToolbarRootContext-C1DQaCtc.js";import"./composite-EK_Kp5ER.js";import"./svgIconContainer-F-4GL1p-.js";import"./PdfViewerSearchBar-CrDL27M6.js";import"./chevron-up-DMVw7GjQ.js";import"./chevron-down-DyxXbZDq.js";import"./cross-95TP_pkM.js";import"./PdfViewerSidebar-JWF0xGHe.js";import"./index-DMNMq9tJ.js";import"./index-ALPgotdH.js";import"./index-ByH-ncsi.js";import"./PdfViewerToolbar-B-Dh0JOc.js";import"./Button-C24gAlnE.js";import"./chevron-right-BYSyPZ5s.js";import"./Input-DELuQIly.js";import"./search-COCkrCII.js";import"./spin-Sd4-qt7S.js";import"./error-DaMdq9UW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4251/476529625f877cc2ba8ec04f6d7a456a2fe948b5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
