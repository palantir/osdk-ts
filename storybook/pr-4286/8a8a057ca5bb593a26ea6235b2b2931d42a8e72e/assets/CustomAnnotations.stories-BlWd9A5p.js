import{j as n}from"./iframe-BtrE9oAk.js";import{B as e}from"./BasePdfViewer-3g1TIkHm.js";import"./preload-helper-Ck9jHBT4.js";import"./index-DTswWCN-.js";import"./BasePdfViewer.module.css-Ci9HrKlj.js";import"./PdfViewerAnnotationLayer-DLh_e8XY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-_n4O2_fV.js";import"./PdfViewerOutlineSidebar-DFLNRwox.js";import"./PdfViewerSidebarHeader-Crt_kqBl.js";import"./useBaseUiId-DZ_AJh1G.js";import"./useControlled-BzxnQPZx.js";import"./CompositeRoot-eACoPGGZ.js";import"./CompositeItem-KY2ZDv1b.js";import"./ToolbarRootContext-CiVShHn0.js";import"./composite-DJfjq7Qz.js";import"./svgIconContainer-CMgWIhhO.js";import"./PdfViewerSearchBar-VQYTk1PU.js";import"./chevron-up-BpdlEtXH.js";import"./chevron-down-CGlt-RaH.js";import"./cross-BpApkSFN.js";import"./PdfViewerSidebar-4u6Cx5LA.js";import"./index-Bsvjejoj.js";import"./index-BiKdeyQ9.js";import"./index-DAqFPrmn.js";import"./PdfViewerToolbar-C9JxT6yS.js";import"./Button-Dt_Nxhrh.js";import"./chevron-right-9bdhqDnc.js";import"./Input-DP5nsCAr.js";import"./search-DH4c7KHc.js";import"./spin-B1AZbeQj.js";import"./error-CWqhrvJ7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4286/8a8a057ca5bb593a26ea6235b2b2931d42a8e72e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
