import{j as n}from"./iframe-DMbRIuDb.js";import{B as e}from"./BasePdfViewer-C6wgr7Ub.js";import"./preload-helper-sYBSF0kM.js";import"./index-Bu-1yS3f.js";import"./BasePdfViewer.module.css-Ba18jtvc.js";import"./PdfViewerAnnotationLayer-CnUBsP49.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D2GQ9zbx.js";import"./PdfViewerOutlineSidebar-CtdWUWpn.js";import"./PdfViewerSidebarHeader-B-o6SmXV.js";import"./useBaseUiId-Ud_ZuwhE.js";import"./useControlled-CIwMJypC.js";import"./CompositeRoot-BQgljQc-.js";import"./CompositeItem-C_Zv4JbC.js";import"./ToolbarRootContext-CnFMRhrV.js";import"./composite-BbcTHbJw.js";import"./svgIconContainer-DRmK9U-I.js";import"./PdfViewerSearchBar-CRz62UuB.js";import"./chevron-up-CQkTRFRH.js";import"./chevron-down-_C5sbwkb.js";import"./cross-D-Gd3Z1L.js";import"./PdfViewerSidebar-BpAlFzLq.js";import"./index-dCYLjsWC.js";import"./index-BqPJnSgL.js";import"./index-DYfyQJ7D.js";import"./PdfViewerToolbar-FkxHBCu4.js";import"./Button-CD6kVtUc.js";import"./chevron-right-CPRHmat1.js";import"./Input-D-dAAgmX.js";import"./search-0CHVsg6w.js";import"./spin-BcqwCgDo.js";import"./error-D_c53g1g.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4339/75b720608b1ec5c232407232160bf397f10e64cf/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
