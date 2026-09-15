import{j as n}from"./iframe-i_9Nw0aL.js";import{B as e}from"./BasePdfViewer-5YLSo0Zr.js";import"./preload-helper-B6z7q6ev.js";import"./index-xy7OH4WM.js";import"./BasePdfViewer.module.css-BqJsqkyU.js";import"./PdfViewerAnnotationLayer-C78QyEUY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C5LsTgfP.js";import"./PdfViewerOutlineSidebar-Dde66wMO.js";import"./PdfViewerSidebarHeader-CQzLwxQg.js";import"./useBaseUiId-BMuu8nEn.js";import"./useControlled-gY6NMr8Z.js";import"./CompositeRoot-BeR-tiBg.js";import"./CompositeItem-CcQI67Uz.js";import"./ToolbarRootContext-C05xSZ6f.js";import"./composite-BEolDa-D.js";import"./svgIconContainer-3Y9_T1l7.js";import"./PdfViewerSearchBar-EL2APkwG.js";import"./chevron-up-C8kRn7e0.js";import"./chevron-down-D5tyPu8s.js";import"./cross-QqYP1fee.js";import"./PdfViewerSidebar-Ck_Zqsqy.js";import"./index-DABPjbUn.js";import"./index-DFV1oDTw.js";import"./index-DBCrB76S.js";import"./PdfViewerToolbar-Cb_s3fm3.js";import"./Button-Cqo_9NuU.js";import"./chevron-right-RF8KUQPg.js";import"./Input-DSjQkga5.js";import"./search-CEIky3LJ.js";import"./spin-u7Se95nR.js";import"./error-BtW_-Bd0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/c6131ae1e7007e4cffc4d43553a7d199905d1a99/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
