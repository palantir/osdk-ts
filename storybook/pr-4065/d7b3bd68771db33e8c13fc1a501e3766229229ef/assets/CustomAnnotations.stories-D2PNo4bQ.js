import{j as n}from"./iframe-BkN_38ur.js";import{B as e}from"./BasePdfViewer-DYFdJez2.js";import"./preload-helper-BysSMJyv.js";import"./index-VCNAMxPB.js";import"./BasePdfViewer.module.css-CCkZJu_g.js";import"./PdfViewerAnnotationLayer-Bpbd65kZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DGaM5vdR.js";import"./PdfViewerOutlineSidebar-znVonwwh.js";import"./PdfViewerSidebarHeader-BxxqGVva.js";import"./useBaseUiId-DDXpceTn.js";import"./useControlled-Cl0okxKJ.js";import"./CompositeRoot-B6tfnWh3.js";import"./CompositeItem-DeZdbGTL.js";import"./ToolbarRootContext-DsnyQOq9.js";import"./composite-DTpp6U8p.js";import"./svgIconContainer-CleM6Ots.js";import"./PdfViewerSearchBar-qRDlO47h.js";import"./chevron-up-D-KCmq92.js";import"./chevron-down-DQ_KkOEg.js";import"./cross-QuNtfWNx.js";import"./PdfViewerSidebar-BmcCH_pr.js";import"./index-tJ30rsuQ.js";import"./index-B8WRO5V1.js";import"./index-B4VzS2Ja.js";import"./PdfViewerToolbar-BSk8kPkj.js";import"./Button-Bz7lNxsT.js";import"./chevron-right-5yQmx5HF.js";import"./Input-BB5NVTdl.js";import"./search-DLVM4UyR.js";import"./spin-CkboCgBh.js";import"./error-B2ZdHohT.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4065/d7b3bd68771db33e8c13fc1a501e3766229229ef/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
