import{j as n}from"./iframe-DzKgN3qu.js";import{B as e}from"./BasePdfViewer-D6TYIuNI.js";import"./preload-helper-Bq44pRuA.js";import"./index-BdOs7mw_.js";import"./BasePdfViewer.module.css-DF2HcsLo.js";import"./PdfViewerAnnotationLayer-CWv-gk9P.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CIUEHYx2.js";import"./PdfViewerOutlineSidebar-BwmohKoM.js";import"./PdfViewerSidebarHeader-C_1g8e4N.js";import"./useBaseUiId-Dv29B-pr.js";import"./useControlled-DrMtPDwW.js";import"./CompositeRoot-7r82i8q4.js";import"./CompositeItem-yqIim0nf.js";import"./ToolbarRootContext-CCsiwlz9.js";import"./composite-CC7knVWa.js";import"./svgIconContainer-XLXcJGX1.js";import"./PdfViewerSearchBar-Vr9ngm6y.js";import"./chevron-up-CI5dW6fR.js";import"./chevron-down-vPjMV4aO.js";import"./cross-qDkjCQ52.js";import"./PdfViewerSidebar-ChvXvdR0.js";import"./index-DZ2KvGi_.js";import"./index-Gldmiip-.js";import"./index-C67GGcUR.js";import"./PdfViewerToolbar-Dh_QbeZb.js";import"./Button-M7h6gJdh.js";import"./chevron-right-DxXFFiSa.js";import"./Input-CzkZobpW.js";import"./search-C4jktGRC.js";import"./spin-DI9V2JjK.js";import"./error-T16LD8HE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4010/ab9c4d9a65febdfc096051bea34ee1fb145f8d8f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
