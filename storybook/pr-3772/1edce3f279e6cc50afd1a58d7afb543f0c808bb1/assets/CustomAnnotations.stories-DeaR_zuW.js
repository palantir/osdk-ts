import{j as n}from"./iframe-B4a1M7YQ.js";import{B as e}from"./BasePdfViewer-BkaV4VOo.js";import"./preload-helper-DKPqJros.js";import"./index-CEnsUSRk.js";import"./BasePdfViewer.module.css-bMkMkFT2.js";import"./PdfViewerAnnotationLayer-BCUrjQay.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CgXBvMsM.js";import"./PdfViewerOutlineSidebar-CpGePzes.js";import"./PdfViewerSidebarHeader-BDQgtbbO.js";import"./useBaseUiId-BdmpNM9R.js";import"./useControlled-BwTzIPm3.js";import"./CompositeRoot-C9GneDFH.js";import"./CompositeItem-DufHQAne.js";import"./ToolbarRootContext-BOcgfqza.js";import"./composite-DYFcQXK_.js";import"./svgIconContainer-dKO81zeU.js";import"./PdfViewerSearchBar-799O8IxK.js";import"./chevron-up-CcQ54ayo.js";import"./chevron-down-DCl-dnpE.js";import"./cross-DdxU_GSh.js";import"./PdfViewerSidebar-BE0Msg8Q.js";import"./index-C8n7J5dc.js";import"./index-BGoKHZOt.js";import"./index-Bzr9bqEh.js";import"./PdfViewerToolbar-CzvqQFDK.js";import"./Button-aRzyNEAE.js";import"./chevron-right-CvbAuBd2.js";import"./Input-CQ1CPhUS.js";import"./search-ByNZE4lU.js";import"./spin-DQQDOoFa.js";import"./error-B-p2MHss.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/1edce3f279e6cc50afd1a58d7afb543f0c808bb1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
