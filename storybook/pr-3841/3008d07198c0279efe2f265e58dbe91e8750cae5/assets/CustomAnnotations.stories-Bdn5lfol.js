import{j as n}from"./iframe-D-uQiAEU.js";import{B as e}from"./BasePdfViewer-DEZteKVq.js";import"./preload-helper-p4UgLAci.js";import"./index-BAcJFtsj.js";import"./BasePdfViewer.module.css-Bmm1WLWo.js";import"./PdfViewerAnnotationLayer-JLEGaNl3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CiwFsPfU.js";import"./PdfViewerOutlineSidebar-B1woPrxn.js";import"./PdfViewerSidebarHeader-Bzs9kijr.js";import"./useBaseUiId-ChN6vCz4.js";import"./useControlled-CCwQc26W.js";import"./CompositeRoot-B5ftoauG.js";import"./CompositeItem-gF6WPsof.js";import"./ToolbarRootContext-DCPVbVwA.js";import"./composite-DTJJNp0D.js";import"./svgIconContainer-BwquE4X7.js";import"./PdfViewerSearchBar-DjQW7NOB.js";import"./chevron-up-CHHQGUfp.js";import"./chevron-down-BwXU5HA0.js";import"./cross-Cxa7qZ4s.js";import"./PdfViewerSidebar-_N1_d2H5.js";import"./index-C2SgD6rg.js";import"./index-BoPOR_G0.js";import"./index-TpgQ4q1W.js";import"./PdfViewerToolbar-6v26Vzfj.js";import"./Button-DI6776iG.js";import"./chevron-right-Mnm-VRsL.js";import"./Input-DgsAa7tc.js";import"./search-C_-XZuxq.js";import"./spin-CLWPb3W8.js";import"./error-CnFMhHrw.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3841/3008d07198c0279efe2f265e58dbe91e8750cae5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
