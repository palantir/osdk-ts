import{j as n}from"./iframe-BjnXfZ9H.js";import{B as e}from"./BasePdfViewer-Bk9G0Gsy.js";import"./preload-helper-bepxIrLy.js";import"./index-BelFyW9j.js";import"./BasePdfViewer.module.css-D3LsN83-.js";import"./PdfViewerAnnotationLayer-Lrd_DzIh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9q3yFhoj.js";import"./PdfViewerOutlineSidebar-NBkA7Wpf.js";import"./PdfViewerSidebarHeader-VeIQQ5k_.js";import"./useBaseUiId--nXvl9pb.js";import"./useControlled-30IDLW3T.js";import"./CompositeRoot-Djh9YnPA.js";import"./CompositeItem-DVl86_s7.js";import"./ToolbarRootContext-Dapwrg0X.js";import"./composite-CmHNarO8.js";import"./svgIconContainer-CwvuHzUD.js";import"./PdfViewerSearchBar-IxNZGHfP.js";import"./chevron-up-DsjO8iRj.js";import"./chevron-down-C_lHJsgk.js";import"./cross-Ca4hBGJI.js";import"./PdfViewerSidebar-BvTcofRl.js";import"./index-C3tw8knN.js";import"./index-B42gKKnv.js";import"./index-BA9yDYNK.js";import"./PdfViewerToolbar-BdHKowoL.js";import"./Button-87n6zTQD.js";import"./chevron-right-muJaTNtG.js";import"./Input-DOBVQBLE.js";import"./search-4U4uPWIz.js";import"./spin-vrSDzm81.js";import"./error-B6h0Ljte.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3977/82dfefde37812077dbbbaa7a93639f59af1bf906/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
