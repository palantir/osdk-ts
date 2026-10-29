import{j as n}from"./iframe-BJLBRZOh.js";import{B as e}from"./BasePdfViewer-Db2evUmT.js";import"./preload-helper-BwUp_7F1.js";import"./index-C9_BYSi8.js";import"./BasePdfViewer.module.css-CW-uYbi2.js";import"./PdfViewerAnnotationLayer-C_iCznU3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B3QH9JlD.js";import"./PdfViewerOutlineSidebar-B_ZwIgJg.js";import"./PdfViewerSidebarHeader-C7xqzhXl.js";import"./useBaseUiId-LHwOB3kw.js";import"./useControlled-DvCQBOjX.js";import"./CompositeRoot-CtmknFFC.js";import"./CompositeItem-B-vP8lxH.js";import"./ToolbarRootContext-DhgC0mq4.js";import"./composite-BxFzj_3L.js";import"./svgIconContainer-CQ7lEg_v.js";import"./PdfViewerSearchBar-CKy-2xFA.js";import"./chevron-up-C0uzKY6c.js";import"./chevron-down-PUEKZFzz.js";import"./cross-DYYKBVG2.js";import"./PdfViewerSidebar-DkfCBouP.js";import"./index-BxHhiHH9.js";import"./index-MgR6vtA5.js";import"./index-Cf7wbzeY.js";import"./PdfViewerToolbar-Bw0mWyBy.js";import"./Button-B1QFNCxV.js";import"./chevron-right-HqwkoTZj.js";import"./Input-DotRyYSg.js";import"./search-lm4u23Jr.js";import"./spin-ldEkp2xB.js";import"./error-RXBYB8o8.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4292/216f91581ed06d44fdc4c341c5e2119e170a61c5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
