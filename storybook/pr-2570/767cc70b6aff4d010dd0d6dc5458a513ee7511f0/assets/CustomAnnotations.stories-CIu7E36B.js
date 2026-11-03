import{j as n}from"./iframe-D9CyQ-7D.js";import{B as e}from"./BasePdfViewer-DBS8au0E.js";import"./preload-helper-D5O23N40.js";import"./index-DuJGsL9q.js";import"./BasePdfViewer.module.css-FbWaP5gA.js";import"./PdfViewerAnnotationLayer-BKSuZK47.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-Dwz594lQ.js";import"./PdfViewerOutlineSidebar-DAUt8AcG.js";import"./PdfViewerSidebarHeader-BLQfD2FO.js";import"./useBaseUiId-D_fLEN6E.js";import"./useControlled-C_-Glr9o.js";import"./CompositeRoot-B-6l-Lt8.js";import"./CompositeItem-DcIoFALJ.js";import"./ToolbarRootContext-BcdYYsZZ.js";import"./composite-XfhWG8gu.js";import"./svgIconContainer-AOGkHpnu.js";import"./PdfViewerSearchBar-ac7XZfeI.js";import"./chevron-up-cri8uVAA.js";import"./chevron-down-CdLJsGpG.js";import"./cross-BenluPmH.js";import"./PdfViewerSidebar-lkZR0ROp.js";import"./index-D1YdEA6M.js";import"./index-1c9qBFFa.js";import"./index-AxS2IGOk.js";import"./PdfViewerToolbar-OMVAoW46.js";import"./Button-BQcwiuJB.js";import"./chevron-right-D1e8ovoy.js";import"./Input-CmtlVQ4G.js";import"./search-DGt86ZvF.js";import"./spin-CRStPKws.js";import"./error-C3QVKQPv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-2570/767cc70b6aff4d010dd0d6dc5458a513ee7511f0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
