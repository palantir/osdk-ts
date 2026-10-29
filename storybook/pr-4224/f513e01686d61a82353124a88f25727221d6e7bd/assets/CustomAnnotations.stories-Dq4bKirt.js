import{j as n}from"./iframe-niEbczVm.js";import{B as e}from"./BasePdfViewer-CkxjZ4O_.js";import"./preload-helper-CUjUb6yR.js";import"./index-BEFpPyEu.js";import"./BasePdfViewer.module.css-a0Tje13_.js";import"./PdfViewerAnnotationLayer-Bq_C8nEf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B44gsYSi.js";import"./PdfViewerOutlineSidebar-4bDDmYRu.js";import"./PdfViewerSidebarHeader-DpQ0g8Qd.js";import"./useBaseUiId-CH7YIJgS.js";import"./useControlled-CUyHc-Js.js";import"./CompositeRoot-BoOEKYl_.js";import"./CompositeItem-CsOBUX0g.js";import"./ToolbarRootContext-BRylS6Aj.js";import"./composite-DGaJRBaQ.js";import"./svgIconContainer-9VsGkNZz.js";import"./PdfViewerSearchBar-Cm0QvdNV.js";import"./chevron-up-C56QwOCl.js";import"./chevron-down-BBE32uOg.js";import"./cross-Bcr8pGuL.js";import"./PdfViewerSidebar-Xk1drBO8.js";import"./index-C_O3jDKw.js";import"./index-BbiwM5Qu.js";import"./index-elRiCFtu.js";import"./PdfViewerToolbar-CVon_phC.js";import"./Button-CFI_-pRJ.js";import"./chevron-right-BvVNNQuT.js";import"./Input-B4FHDv-3.js";import"./search-ChyEY49Q.js";import"./spin-DuLiSYYP.js";import"./error-mxcJOglh.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4224/f513e01686d61a82353124a88f25727221d6e7bd/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
