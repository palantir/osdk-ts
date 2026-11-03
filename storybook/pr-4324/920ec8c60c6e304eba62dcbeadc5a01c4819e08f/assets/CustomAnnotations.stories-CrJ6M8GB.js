import{j as n}from"./iframe-9A7AV9Cy.js";import{B as e}from"./BasePdfViewer-DSM3pvKT.js";import"./preload-helper-CK_ZcGGF.js";import"./index-Bkgk7vsR.js";import"./BasePdfViewer.module.css-Dv5WlaXM.js";import"./PdfViewerAnnotationLayer-CyKiGNbT.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CZx8Hn_v.js";import"./PdfViewerOutlineSidebar-vxDYkrsA.js";import"./PdfViewerSidebarHeader-Bqarf29R.js";import"./useBaseUiId-q7QIFNkg.js";import"./useControlled-DIFFKw6v.js";import"./CompositeRoot-BMKjJp3f.js";import"./CompositeItem-DoPsMeEK.js";import"./ToolbarRootContext-DCS282rA.js";import"./composite-CEEJ0vWU.js";import"./svgIconContainer-CR0pIEyo.js";import"./PdfViewerSearchBar-CaXuUliJ.js";import"./chevron-up-DkUeqybM.js";import"./chevron-down-Bi1tvw_Y.js";import"./cross-B7t6TzDw.js";import"./PdfViewerSidebar-DAGiDdoK.js";import"./index-CzE6ZkZ0.js";import"./index-C7xfgMTV.js";import"./index-BV5cRfRG.js";import"./PdfViewerToolbar-gLCjuEuL.js";import"./Button-CKepLiXu.js";import"./chevron-right-Dujl-Bl3.js";import"./Input-CCxEn7sH.js";import"./search-BWRhS2Qj.js";import"./spin-DgS7jHwT.js";import"./error-C8bHM7uj.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4324/920ec8c60c6e304eba62dcbeadc5a01c4819e08f/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
