import{j as n}from"./iframe-B1dY-uMG.js";import{B as e}from"./BasePdfViewer-CmtY2hsr.js";import"./preload-helper-CsaNr_BP.js";import"./index-J8POe0xc.js";import"./BasePdfViewer.module.css-C8mKOMrC.js";import"./PdfViewerAnnotationLayer-Ct6rie_i.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRTO8h3v.js";import"./PdfViewerOutlineSidebar-CNXW4CxF.js";import"./PdfViewerSidebarHeader-7KfedryQ.js";import"./useBaseUiId-BEMvDf4X.js";import"./useControlled-Q3FRIAaO.js";import"./CompositeRoot-Bi0nYZ5H.js";import"./CompositeItem-DJ7Q7uHL.js";import"./ToolbarRootContext-B2VcC1-l.js";import"./composite-DafZoXqK.js";import"./svgIconContainer-Hqh_F8lK.js";import"./PdfViewerSearchBar-JD90zajQ.js";import"./chevron-up-CeiRgD-2.js";import"./chevron-down-DfdYdGBP.js";import"./cross-CGzVaZsI.js";import"./PdfViewerSidebar-BiK3k2Mm.js";import"./index-BxyuVSQw.js";import"./index-DfE0OqSo.js";import"./index-De6BIYNw.js";import"./PdfViewerToolbar-COskw3Ge.js";import"./Button-WD0YpcbL.js";import"./chevron-right-D0zYFpMT.js";import"./Input-Bow4iCTS.js";import"./search-NElMm_h6.js";import"./spin-Bio8Zsw0.js";import"./error-BzEZzAbM.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4337/805aca10f3c1320b99e9ab0a0a903d1061d8c341/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
