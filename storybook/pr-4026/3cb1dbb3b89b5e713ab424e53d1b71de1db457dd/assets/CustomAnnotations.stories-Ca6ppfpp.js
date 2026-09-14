import{j as n}from"./iframe-CQYW_eB-.js";import{B as e}from"./BasePdfViewer-D8f2QGow.js";import"./preload-helper-D9TT_d3h.js";import"./index-T0VZSE-0.js";import"./BasePdfViewer.module.css-GTylaezv.js";import"./PdfViewerAnnotationLayer-D-VU7fPB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-lSNMO0ru.js";import"./PdfViewerOutlineSidebar-DehhKt31.js";import"./PdfViewerSidebarHeader-C0DgT7AF.js";import"./useBaseUiId-CLAYvn4B.js";import"./useControlled-Z2EDTbBt.js";import"./CompositeRoot-RzKBvRBE.js";import"./CompositeItem-B2O_tBvb.js";import"./ToolbarRootContext-DdcVqPbo.js";import"./composite-BSIyIiZo.js";import"./svgIconContainer-BqHGQtsP.js";import"./PdfViewerSearchBar-Btkrhv0V.js";import"./chevron-up-Cucjq9dM.js";import"./chevron-down-3SfwSm8L.js";import"./cross-4hmynEDT.js";import"./PdfViewerSidebar-DzRf_jd4.js";import"./index-Cw-CpLvV.js";import"./index-e5OIlOnL.js";import"./index-B0AlVUaG.js";import"./PdfViewerToolbar-B1HT4Czr.js";import"./Button-CYh2Cp69.js";import"./chevron-right-D4m-4aBV.js";import"./Input-BafxkRHB.js";import"./search-Dr6j30rS.js";import"./spin-DUaAw7tV.js";import"./error-Cu14UhDr.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4026/3cb1dbb3b89b5e713ab424e53d1b71de1db457dd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
