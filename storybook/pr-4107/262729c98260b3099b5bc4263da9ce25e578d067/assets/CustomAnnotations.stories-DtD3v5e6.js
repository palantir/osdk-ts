import{j as n}from"./iframe-CXrJqDi7.js";import{B as e}from"./BasePdfViewer-B3UswZf4.js";import"./preload-helper-jkRaFgLU.js";import"./index-CIjDsdU0.js";import"./BasePdfViewer.module.css-CFPImY32.js";import"./PdfViewerAnnotationLayer-CY9ZD141.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BjIgoCOH.js";import"./PdfViewerOutlineSidebar-CLoJ3Lfm.js";import"./PdfViewerSidebarHeader-CPRJT_z9.js";import"./useBaseUiId-DRTWV3IQ.js";import"./useControlled-BrDZ81ve.js";import"./CompositeRoot-BrsESzgy.js";import"./CompositeItem-CyZPBPBK.js";import"./ToolbarRootContext-Dha7jpb4.js";import"./composite-BIMYEycB.js";import"./svgIconContainer-BzSV1llx.js";import"./PdfViewerSearchBar-hWMpo_GV.js";import"./chevron-up-jgcO2esY.js";import"./chevron-down-vVCEooOb.js";import"./cross-BukSyOKz.js";import"./PdfViewerSidebar-DNlyxjDO.js";import"./index-WbZsn1IX.js";import"./index-rAYh6pbi.js";import"./index-CUgOIZQ8.js";import"./PdfViewerToolbar-DWqbuXlv.js";import"./Button-BnGcPvMs.js";import"./chevron-right-92U_yXkN.js";import"./Input-CvxpQ6Xp.js";import"./search-Dyn6N2H3.js";import"./spin-BN6Bc9G7.js";import"./error-bx5NADv9.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4107/262729c98260b3099b5bc4263da9ce25e578d067/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
