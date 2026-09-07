import{j as n}from"./iframe-DV_zKu2G.js";import{B as e}from"./BasePdfViewer-BQ7PShCs.js";import"./preload-helper-NfN-SgeO.js";import"./index-Dg4pCXXs.js";import"./BasePdfViewer.module.css-ctQegrJL.js";import"./PdfViewerAnnotationLayer-C8LOgoir.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CEU5DdKw.js";import"./PdfViewerOutlineSidebar-Ca-sy0AQ.js";import"./PdfViewerSidebarHeader-BcEs4BVi.js";import"./useBaseUiId-B5XoADBe.js";import"./useControlled-93X90FOH.js";import"./CompositeRoot-B0KjWhm9.js";import"./CompositeItem-CHs--B7N.js";import"./ToolbarRootContext-D3r4geEZ.js";import"./composite-DcSj9RrZ.js";import"./svgIconContainer-kLwaY0s0.js";import"./PdfViewerSearchBar-HLbSVi7b.js";import"./chevron-up-CXTvmrDk.js";import"./chevron-down-D7mWu-TA.js";import"./cross-APJrfIvW.js";import"./PdfViewerSidebar-qD7h_65i.js";import"./index-LNDJ7X8H.js";import"./index-Qh3Fcvsg.js";import"./index-CEG-DU55.js";import"./PdfViewerToolbar-DZNGCg2P.js";import"./Button-BVbWdILw.js";import"./chevron-right-BlKifVkk.js";import"./Input-DFXIqK_7.js";import"./search-DYE1hvQ2.js";import"./spin-CH0RxLzD.js";import"./error-DQ-loBpb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/cfacc535ee06c425311c43e14c2fe6848fb173ac/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
