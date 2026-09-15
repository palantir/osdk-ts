import{j as n}from"./iframe-DjTsTlya.js";import{B as e}from"./BasePdfViewer-CW8hwGY2.js";import"./preload-helper-DOwvcOZH.js";import"./index-CRTtk6ac.js";import"./BasePdfViewer.module.css-CBt6CvDh.js";import"./PdfViewerAnnotationLayer-Ce2dfTtD.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRdVSWpu.js";import"./PdfViewerOutlineSidebar-BeMWuRBN.js";import"./PdfViewerSidebarHeader-BVRNOLKV.js";import"./useBaseUiId-BzNc-3Ql.js";import"./useControlled-BVHEmv7i.js";import"./CompositeRoot-BGq7MJ-d.js";import"./CompositeItem-BuvWaDdm.js";import"./ToolbarRootContext-DfW4g7RO.js";import"./composite-0nzRqKiC.js";import"./svgIconContainer-xPgA_yJ1.js";import"./PdfViewerSearchBar-Dv-QAd_R.js";import"./chevron-up-BDD-Ihiy.js";import"./chevron-down-Crh_WC6g.js";import"./cross-Cvq5D40f.js";import"./PdfViewerSidebar-CkeCJspi.js";import"./index-C3payG2R.js";import"./index-y5c47ww6.js";import"./index-DqxuM6At.js";import"./PdfViewerToolbar-DUAwMLtJ.js";import"./Button-DyYtieLu.js";import"./chevron-right-Dg_j8dGP.js";import"./Input-D8ax6gQv.js";import"./search-Bt_OBQnD.js";import"./spin-gpAKVIds.js";import"./error-DgpTog1A.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/25cc8c448b1ff8c12e8cc161ee598ec6fd19415c/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
