import{j as n}from"./iframe-CCEjzOPC.js";import{B as e}from"./BasePdfViewer-B8eWf9tU.js";import"./preload-helper-DImdHWFo.js";import"./index-DgoUsAmK.js";import"./BasePdfViewer.module.css-BqbMzIq1.js";import"./PdfViewerAnnotationLayer-DqmvB-ur.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-f-FpfjI0.js";import"./PdfViewerOutlineSidebar-D8qT7ejo.js";import"./PdfViewerSidebarHeader-CEe8sam6.js";import"./useBaseUiId-j3ufExoT.js";import"./useControlled-D5RejEGV.js";import"./CompositeRoot-DWLdPvud.js";import"./CompositeItem-vBJlJ_jv.js";import"./ToolbarRootContext-CugNg6qm.js";import"./composite-C0q05pny.js";import"./svgIconContainer-Coaz20-Z.js";import"./PdfViewerSearchBar-D81saovZ.js";import"./chevron-up-CXsJ3DIB.js";import"./chevron-down-D9MyH17B.js";import"./cross-BGMsRd6B.js";import"./PdfViewerSidebar-bzR4CgTA.js";import"./index-D3oslL3x.js";import"./index-BilPMlQA.js";import"./index-D9nMHWCp.js";import"./PdfViewerToolbar-8hXsZE8j.js";import"./Button-2G_ar31r.js";import"./chevron-right-BiuyLltR.js";import"./Input-CGqEOpN_.js";import"./search-BPL1vhq_.js";import"./spin-CRv9J6Ua.js";import"./error-8gbxpDNd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3998/8bf39ab17fbe7c0fb9262988f720aeb567c94c49/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
