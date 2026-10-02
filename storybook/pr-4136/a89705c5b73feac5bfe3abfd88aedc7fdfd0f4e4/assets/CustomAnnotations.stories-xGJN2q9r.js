import{j as n}from"./iframe-PECeEW3T.js";import{B as e}from"./BasePdfViewer-DkMpIXVK.js";import"./preload-helper-C6A5QCy5.js";import"./index-BjSahMIP.js";import"./BasePdfViewer.module.css-BERhPMGu.js";import"./PdfViewerAnnotationLayer-BrN0b3vv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dwesw1hK.js";import"./PdfViewerOutlineSidebar-eJsxdMV9.js";import"./PdfViewerSidebarHeader-DiXpkJKM.js";import"./useBaseUiId-D-8DZjqe.js";import"./useControlled-rCZffMic.js";import"./CompositeRoot-BwnSttYY.js";import"./CompositeItem-CUJUUY83.js";import"./ToolbarRootContext-CpX9GNwO.js";import"./composite-Ce7Nqskp.js";import"./svgIconContainer-B-v0aTHG.js";import"./PdfViewerSearchBar-CeS0jbgU.js";import"./chevron-up-DtnaTWWl.js";import"./chevron-down-CxtRUuHx.js";import"./cross-jtAUAPzX.js";import"./PdfViewerSidebar-BAoD7iGt.js";import"./index-BKt47rIQ.js";import"./index-ieJWeIAg.js";import"./index-C9QXfA_d.js";import"./PdfViewerToolbar-Doa2YsHn.js";import"./Button-LcQP4ZCC.js";import"./chevron-right-Co8Ck9Wc.js";import"./Input-Dyun1iu7.js";import"./search-CpCpMqWp.js";import"./spin-BvuiarGB.js";import"./error-BJrA_-EN.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4136/a89705c5b73feac5bfe3abfd88aedc7fdfd0f4e4/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
