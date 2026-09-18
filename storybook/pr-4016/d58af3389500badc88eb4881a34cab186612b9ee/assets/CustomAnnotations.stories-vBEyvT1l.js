import{j as n}from"./iframe-DlB65lJW.js";import{B as e}from"./BasePdfViewer-BMWvNSeu.js";import"./preload-helper-DV_Jg5FM.js";import"./index-B8sBGRC5.js";import"./BasePdfViewer.module.css-MP1g0fU_.js";import"./PdfViewerAnnotationLayer-D38SuFAQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Cyd0OVyP.js";import"./PdfViewerOutlineSidebar-CS1stO4f.js";import"./PdfViewerSidebarHeader-Baf8JETy.js";import"./useBaseUiId-C0JAm9wS.js";import"./useControlled-CQNoni_g.js";import"./CompositeRoot-CV1MWrY1.js";import"./CompositeItem-PpZ3j7ZS.js";import"./ToolbarRootContext-BDX936Z-.js";import"./composite-CUY2PD51.js";import"./svgIconContainer-DE9YLrbK.js";import"./PdfViewerSearchBar-CHiNa1eO.js";import"./chevron-up-CLmE4ohw.js";import"./chevron-down-BHTjgyZJ.js";import"./cross-BYT-n1qT.js";import"./PdfViewerSidebar-BKayBHhh.js";import"./index-D-Hc9dUX.js";import"./index-Dk8pEk6M.js";import"./index-vvEU_kVM.js";import"./PdfViewerToolbar-DO_hZH2r.js";import"./Button-C6hVNenO.js";import"./chevron-right-BbCT-pbW.js";import"./Input-CXcuZUCe.js";import"./search-DUnv4tIx.js";import"./spin-K5Ep1epe.js";import"./error-DriOx_PR.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4016/d58af3389500badc88eb4881a34cab186612b9ee/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
