import{j as n}from"./iframe-DXehzrLy.js";import{B as e}from"./BasePdfViewer-BlG_Qvkx.js";import"./preload-helper-kK_P88Zt.js";import"./index-CXAIDCBV.js";import"./BasePdfViewer.module.css-DxTtGfWI.js";import"./PdfViewerAnnotationLayer-BBu1l4Xv.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DY898vYv.js";import"./PdfViewerOutlineSidebar-COkJqRlf.js";import"./PdfViewerSidebarHeader-BKeYZlMu.js";import"./useBaseUiId-DZnCUGwj.js";import"./useControlled-Dzo11YgF.js";import"./CompositeRoot-IrgHa_Dk.js";import"./CompositeItem-B8unsUL4.js";import"./ToolbarRootContext-CjkOTyMm.js";import"./composite-DYr_GRHn.js";import"./svgIconContainer-DQDL5XU9.js";import"./PdfViewerSearchBar-CsROVLo6.js";import"./chevron-up-CdeLDbJF.js";import"./chevron-down-D0FRwBSH.js";import"./cross-CRuTMTSr.js";import"./PdfViewerSidebar-nfVr5nOf.js";import"./index-19DjQapZ.js";import"./index-D0HNivTS.js";import"./index-BZAJEyr8.js";import"./PdfViewerToolbar-Bn2RsePG.js";import"./Button-arOEvFAs.js";import"./chevron-right--YJFJTbI.js";import"./Input-CpfpiQM-.js";import"./search-DeuEp5ow.js";import"./spin-BqsZPZrl.js";import"./error-DuLOR7GK.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4264/472416b6f380c69f9bd4c7aba08c3055fc29d455/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
