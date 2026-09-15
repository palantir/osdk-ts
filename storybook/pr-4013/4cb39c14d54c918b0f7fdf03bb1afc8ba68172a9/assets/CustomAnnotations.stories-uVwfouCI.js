import{j as n}from"./iframe-dxrUGHlK.js";import{B as e}from"./BasePdfViewer-CdXzx5sk.js";import"./preload-helper-B9qIDFMl.js";import"./index-DPQcu4-a.js";import"./BasePdfViewer.module.css-CKngqjT1.js";import"./PdfViewerAnnotationLayer-BsyGd9vf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BB9bMfQN.js";import"./PdfViewerOutlineSidebar-Dh4bNyiZ.js";import"./PdfViewerSidebarHeader-NGiY2S2b.js";import"./useBaseUiId-BsvKb-r1.js";import"./useControlled-D5pah6Ut.js";import"./CompositeRoot-DtrxZkVS.js";import"./CompositeItem-BLdzDdC9.js";import"./ToolbarRootContext-Cm84R3Vn.js";import"./composite-Dw-SYZmG.js";import"./svgIconContainer-D-3aEKZU.js";import"./PdfViewerSearchBar-mMlOi6eI.js";import"./chevron-up-BdMarpuW.js";import"./chevron-down-Ci5voemn.js";import"./cross-Dj8MH7yM.js";import"./PdfViewerSidebar-CPQRcbZC.js";import"./index-BZzuVaIM.js";import"./index-C0ofq-ja.js";import"./index-BY143isZ.js";import"./PdfViewerToolbar-BbjQt_3P.js";import"./Button-v2rih8HU.js";import"./chevron-right-BF7wUEUo.js";import"./Input-C2FrKznv.js";import"./search-CVhjqWpu.js";import"./spin-CsbEpitK.js";import"./error-DiHcLZ6r.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/4cb39c14d54c918b0f7fdf03bb1afc8ba68172a9/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
