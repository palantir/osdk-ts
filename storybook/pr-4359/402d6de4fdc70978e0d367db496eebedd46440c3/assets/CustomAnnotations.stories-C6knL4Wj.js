import{j as n}from"./iframe-vYbyM6ZV.js";import{B as e}from"./BasePdfViewer-D22QNC4v.js";import"./preload-helper-tlI1dOrD.js";import"./index-MNGJ9mHV.js";import"./BasePdfViewer.module.css-bgWNX4FG.js";import"./PdfViewerAnnotationLayer-D59sdRvU.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-PP9LOE7u.js";import"./PdfViewerOutlineSidebar-DExXphMg.js";import"./PdfViewerSidebarHeader-CiAYEvBj.js";import"./useBaseUiId-ByptStcX.js";import"./useControlled-D5IPizVc.js";import"./CompositeRoot-dbaIZ2L7.js";import"./CompositeItem-D-60Q45b.js";import"./ToolbarRootContext-0aJ-Z7Lw.js";import"./composite-DaPRapKm.js";import"./svgIconContainer-DfARiMaj.js";import"./PdfViewerSearchBar-CrGU-Otd.js";import"./chevron-up-3Jv4vGQo.js";import"./chevron-down-CCDvggT2.js";import"./cross-BEbCovKj.js";import"./PdfViewerSidebar-DJUkeIlu.js";import"./index-BdDLYcYB.js";import"./index-D1tTu4S3.js";import"./index-CFPLyZ8s.js";import"./PdfViewerToolbar-DER3FCSi.js";import"./Button-CkPI_2po.js";import"./chevron-right-rXA-ZcpZ.js";import"./Input-B1kKyDDu.js";import"./search-Ci6nyrFb.js";import"./spin-ahPxpKP6.js";import"./error-bzzwZ2XW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4359/402d6de4fdc70978e0d367db496eebedd46440c3/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
