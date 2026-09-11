import{j as n}from"./iframe-gIP5vbeg.js";import{B as e}from"./BasePdfViewer-BpCSXUSP.js";import"./preload-helper-DCg2y8p9.js";import"./index-Wi5AWfmM.js";import"./BasePdfViewer.module.css-CIN1IfLc.js";import"./PdfViewerAnnotationLayer-BU35OA98.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DpNZmHUF.js";import"./PdfViewerOutlineSidebar-DdSJWCtj.js";import"./PdfViewerSidebarHeader-C_PwJbnf.js";import"./useBaseUiId-Dr1rdLlf.js";import"./useControlled-Ch-R23iR.js";import"./CompositeRoot-vh8LJivO.js";import"./CompositeItem-GAdV3l7-.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./composite-DMSJBqo2.js";import"./svgIconContainer-DxHht3SG.js";import"./PdfViewerSearchBar-C9XqM0YJ.js";import"./chevron-up-Fc7IP0ti.js";import"./chevron-down-DCLBAa3z.js";import"./cross-B_HnIjdo.js";import"./PdfViewerSidebar-451Oui7L.js";import"./index-TRPDJKbO.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./PdfViewerToolbar-BV7b16qN.js";import"./Button-CcxNlLiB.js";import"./chevron-right-CMrJ8JE4.js";import"./Input-BP15Y0-R.js";import"./search-CUlcmVhj.js";import"./spin-CyS39kzv.js";import"./error-3Pj1FJ1e.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/4c92c5c7ee555757e3c4bb24dcb281b338131450/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
