import{j as n}from"./iframe-BLyAG4qt.js";import{B as e}from"./BasePdfViewer-C4vKj94n.js";import"./preload-helper-X2unNE1v.js";import"./index-DRHjeWhY.js";import"./BasePdfViewer.module.css-Dv8j4mTl.js";import"./PdfViewerAnnotationLayer-D6sVObGV.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Vtj35nIp.js";import"./PdfViewerOutlineSidebar-CAk8ykQ9.js";import"./PdfViewerSidebarHeader-DfhI3mXu.js";import"./useBaseUiId-BsqYTkrj.js";import"./useControlled-vEPHT0r_.js";import"./CompositeRoot-CvOAWP7c.js";import"./CompositeItem-DKNH-seI.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./composite-DXp5HadG.js";import"./svgIconContainer-BYhpNXbV.js";import"./PdfViewerSearchBar-RTgB5Auc.js";import"./chevron-up-DarVkq9V.js";import"./chevron-down-Dl_PyCCQ.js";import"./cross-zpmkdN3j.js";import"./PdfViewerSidebar-CJE2wqvH.js";import"./index-D1BfEv3K.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./PdfViewerToolbar-D1QTAqF_.js";import"./Button-C4LVX8xd.js";import"./chevron-right-C9oKwSRR.js";import"./Input-COYDi8CV.js";import"./search-BnzIM1pO.js";import"./spin-BqqJJ9k6.js";import"./error-CALDIyj0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4110/707238789649888bfb5d79b902b8930ccb4f6b3d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
