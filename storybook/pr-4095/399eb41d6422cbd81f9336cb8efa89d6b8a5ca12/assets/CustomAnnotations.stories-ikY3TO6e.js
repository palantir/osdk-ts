import{j as n}from"./iframe-D9Hj5gXP.js";import{B as e}from"./BasePdfViewer-CSeUb2qB.js";import"./preload-helper-46igzL0d.js";import"./index-BGKBGloN.js";import"./BasePdfViewer.module.css-CJelcq4Q.js";import"./PdfViewerAnnotationLayer-BWirtDna.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C73j4qFz.js";import"./PdfViewerOutlineSidebar-Dlm9LwFq.js";import"./PdfViewerSidebarHeader-B5aksAKj.js";import"./useBaseUiId-B3UGffNT.js";import"./useControlled-Bt5_5gUM.js";import"./CompositeRoot-DERhFUms.js";import"./CompositeItem-DWvpMhCv.js";import"./ToolbarRootContext-D-kNo729.js";import"./composite-aH77Cbrs.js";import"./svgIconContainer-DUAmOtu_.js";import"./PdfViewerSearchBar-CDjOoSI-.js";import"./chevron-up-DawkhJbQ.js";import"./chevron-down-CTUGvO1x.js";import"./cross-Q-Rh6Md8.js";import"./PdfViewerSidebar-CE1gxUcn.js";import"./index-dBvJuZc1.js";import"./index-AnDVD4rM.js";import"./index-B3OkYupr.js";import"./PdfViewerToolbar-CsTspNFJ.js";import"./Button-Djg1VeWx.js";import"./chevron-right-FtdeSo8R.js";import"./Input-CbGZkwW7.js";import"./search-Itm3619L.js";import"./spin-BruYpLLQ.js";import"./error-CBRvRAY4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4095/399eb41d6422cbd81f9336cb8efa89d6b8a5ca12/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
