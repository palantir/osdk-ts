import{j as n}from"./iframe-civNld3i.js";import{B as e}from"./BasePdfViewer-0Ud8wJxW.js";import"./preload-helper-DGob3pd3.js";import"./index-Bkk9aIG7.js";import"./BasePdfViewer.module.css-D-f8OHvS.js";import"./PdfViewerAnnotationLayer-DSgLlPZk.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIR_NhDB.js";import"./PdfViewerOutlineSidebar-D1Y7IJYH.js";import"./PdfViewerSidebarHeader-DYgolAhL.js";import"./useBaseUiId-DfebwqrC.js";import"./useControlled-DSRlTv1D.js";import"./CompositeRoot-DOU_4ZY5.js";import"./CompositeItem-CyFsxOTP.js";import"./ToolbarRootContext-CpIc7UTm.js";import"./composite-C8tN05lQ.js";import"./svgIconContainer-Cbt7mtvH.js";import"./PdfViewerSearchBar-Ct9Y7OOk.js";import"./chevron-up-DlEjIu5F.js";import"./chevron-down-Cc8MdjVP.js";import"./cross-Bl6bAFo8.js";import"./PdfViewerSidebar-DvSSTWIC.js";import"./index-Bz_nIjTo.js";import"./index-BcfoxrgG.js";import"./index-C2RAlQU3.js";import"./PdfViewerToolbar-wbYXTm7p.js";import"./Button-_66b78aL.js";import"./chevron-right-DRWn86pt.js";import"./Input-CzHf5EpN.js";import"./search-ulrdH098.js";import"./spin-VLZzdbNB.js";import"./error-9MfXm3EE.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4224/0becf1df59de6fb0e82485305765f38c260a8e22/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
