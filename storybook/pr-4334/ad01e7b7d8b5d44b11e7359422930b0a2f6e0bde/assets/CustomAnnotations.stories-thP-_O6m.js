import{j as n}from"./iframe-A_fOpVjR.js";import{B as e}from"./BasePdfViewer-DV4PmVyZ.js";import"./preload-helper-NNWOvscG.js";import"./index-C7FsEBhG.js";import"./BasePdfViewer.module.css-DW_43y1b.js";import"./PdfViewerAnnotationLayer-YZANLZbR.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BRoCHyFa.js";import"./PdfViewerOutlineSidebar-CujzbsEV.js";import"./PdfViewerSidebarHeader-BCviZvil.js";import"./useBaseUiId-C7m94P3Q.js";import"./useControlled-C2rTfK3U.js";import"./CompositeRoot-D1ENIokx.js";import"./CompositeItem-CZZ_uEuP.js";import"./ToolbarRootContext-DqquyoSz.js";import"./composite-BNlZpCYa.js";import"./svgIconContainer-Bq9Z_PVa.js";import"./PdfViewerSearchBar-D7rwg90p.js";import"./chevron-up-CUM2XUTZ.js";import"./chevron-down-C0LTAe4-.js";import"./cross-BwNW8yAx.js";import"./PdfViewerSidebar-B9eBwU7N.js";import"./index-BLNyRWLa.js";import"./index-CSGRTjjX.js";import"./index-BpdiA8C2.js";import"./PdfViewerToolbar-CfV6Oo5W.js";import"./Button-DqOCaaxJ.js";import"./chevron-right-DMrQ4Xxu.js";import"./Input-CPD69t9E.js";import"./search-DjdTcbXm.js";import"./spin-BcGU_Pt4.js";import"./error-CBOQy5rF.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4334/ad01e7b7d8b5d44b11e7359422930b0a2f6e0bde/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
