import{j as n}from"./iframe-CBNXxCfo.js";import{B as e}from"./BasePdfViewer-CKxp5Rs2.js";import"./preload-helper-hNq2x0aF.js";import"./index-tOjn3DuJ.js";import"./BasePdfViewer.module.css-DkKHFuhy.js";import"./PdfViewerAnnotationLayer-CzlGzKPY.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CmVr_JmI.js";import"./PdfViewerOutlineSidebar-HEj6bnlq.js";import"./PdfViewerSidebarHeader-D2ObZO4z.js";import"./useBaseUiId-DYvTCLZM.js";import"./useControlled-C7MVIRPF.js";import"./CompositeRoot-BIgxY0lU.js";import"./CompositeItem-CMo1LSw0.js";import"./ToolbarRootContext-BkEzRPqI.js";import"./composite-DK294pzn.js";import"./svgIconContainer-Aeg62PdB.js";import"./PdfViewerSearchBar-CM2HQfb5.js";import"./chevron-up-D5hUGuwy.js";import"./chevron-down-CDGLawXt.js";import"./cross-ByQeE0-e.js";import"./PdfViewerSidebar-xTZwnYDu.js";import"./index-D9bbJoJ6.js";import"./index-CWKiu_fE.js";import"./index-FTKj7eco.js";import"./PdfViewerToolbar-DQyzU6rK.js";import"./Button-DGZpthjp.js";import"./chevron-right-BcvNqrF2.js";import"./Input-B4HJdzdZ.js";import"./search-DDNU23bi.js";import"./spin-Db4Slf1r.js";import"./error-DX2juQ7l.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4337/69a2a4513b700ad4d309d8b15cd84b19a40823e5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
