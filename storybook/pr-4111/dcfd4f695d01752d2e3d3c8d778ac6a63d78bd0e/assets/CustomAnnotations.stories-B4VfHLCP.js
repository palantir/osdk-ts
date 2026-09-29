import{j as n}from"./iframe-BkR_0Whf.js";import{B as e}from"./BasePdfViewer-BzSdB3cs.js";import"./preload-helper-BZj2lHf4.js";import"./index-ZGE4mIMl.js";import"./BasePdfViewer.module.css-CMGd0t2j.js";import"./PdfViewerAnnotationLayer-BOeNk63q.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D3Hbxobg.js";import"./PdfViewerOutlineSidebar-BUCEQHvH.js";import"./PdfViewerSidebarHeader-CsC6dtRO.js";import"./useBaseUiId-D0GFLUCc.js";import"./useControlled-qGG-lubz.js";import"./CompositeRoot-Dh9p28vf.js";import"./CompositeItem-DJJJBa43.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./composite-DK0lUWCR.js";import"./svgIconContainer-Cq5Gigac.js";import"./PdfViewerSearchBar-BnmpbE3c.js";import"./chevron-up-o1Z4ivEH.js";import"./chevron-down-D-JVojHo.js";import"./cross-Cj_dISDs.js";import"./PdfViewerSidebar-BnMU5_h4.js";import"./index-BWbnaTYz.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./PdfViewerToolbar-DYckw3dq.js";import"./Button-9bj61-xy.js";import"./chevron-right-H2x6QkH_.js";import"./Input-iGBf8GKC.js";import"./search-BYwC6oDp.js";import"./spin-DAlxH2zz.js";import"./error-CceWhdeD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4111/dcfd4f695d01752d2e3d3c8d778ac6a63d78bd0e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
