import{j as n}from"./iframe-nl_vu0vo.js";import{B as e}from"./BasePdfViewer-B5yOb4MO.js";import"./preload-helper-Dj6yhN1L.js";import"./index-Bw4Di_Av.js";import"./BasePdfViewer.module.css-DsMr-gwW.js";import"./PdfViewerAnnotationLayer-CBCJK-Bg.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D_8aeEYk.js";import"./PdfViewerOutlineSidebar-CPeibiwp.js";import"./PdfViewerSidebarHeader-BYTLYgeL.js";import"./useBaseUiId-BIN8dWsl.js";import"./useControlled-BwxmcO0L.js";import"./CompositeRoot-D3g13w29.js";import"./CompositeItem-ylAvuyxw.js";import"./ToolbarRootContext-C4XGK6eV.js";import"./composite-BrMY9sNC.js";import"./svgIconContainer-dVj22x2p.js";import"./PdfViewerSearchBar-BOlwrNdI.js";import"./chevron-up-GkIkPLav.js";import"./chevron-down-Cg1zW2dH.js";import"./cross-BwLhOV3t.js";import"./PdfViewerSidebar-BDFkWT_D.js";import"./index-CvPJeLDe.js";import"./index-DbGOmI0j.js";import"./index-Bt64noRU.js";import"./PdfViewerToolbar-DUsuNHkz.js";import"./Button-B0tw-VeI.js";import"./chevron-right-CnDg9pAx.js";import"./Input-DsULXrnF.js";import"./search-Cx3JC5DT.js";import"./spin-4WlVPlDJ.js";import"./error-CXoZGWHU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4241/9d31f6fb092c30379b8d691fb3601ff2265fff1a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
