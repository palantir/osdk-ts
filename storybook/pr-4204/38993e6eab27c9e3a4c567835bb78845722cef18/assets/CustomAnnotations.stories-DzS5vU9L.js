import{j as n}from"./iframe-BPD7a-d3.js";import{B as e}from"./BasePdfViewer-BqMN_nHl.js";import"./preload-helper-BMJg2fth.js";import"./index-DWlOJTtZ.js";import"./BasePdfViewer.module.css-Cc8d0T2c.js";import"./PdfViewerAnnotationLayer-CUu0ydNM.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CXNy52vc.js";import"./PdfViewerOutlineSidebar-BOAnxKMJ.js";import"./PdfViewerSidebarHeader-bpa1gGID.js";import"./useBaseUiId-B7NeBfTl.js";import"./useControlled-DcoiTjSg.js";import"./CompositeRoot-BKUcpFOa.js";import"./CompositeItem-CQbGZkro.js";import"./ToolbarRootContext-CvDFIQMo.js";import"./composite-2r4XaYyI.js";import"./svgIconContainer-9WeLc1W4.js";import"./PdfViewerSearchBar-C7gKlCcs.js";import"./chevron-up-BTzeox3B.js";import"./chevron-down-TG9TSSoU.js";import"./cross-BQBN2sBj.js";import"./PdfViewerSidebar-DJ9Dvfpn.js";import"./index-BUYfos0b.js";import"./index-BFdep0Pu.js";import"./index-CPwIgA5j.js";import"./PdfViewerToolbar-CxlEw2XR.js";import"./Button-J8RQxXRy.js";import"./chevron-right-qQX3aKpG.js";import"./Input-BsWtOrbL.js";import"./search-DDY46Bsb.js";import"./spin-BFybIQLR.js";import"./error-DxTVaEkU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4204/38993e6eab27c9e3a4c567835bb78845722cef18/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
