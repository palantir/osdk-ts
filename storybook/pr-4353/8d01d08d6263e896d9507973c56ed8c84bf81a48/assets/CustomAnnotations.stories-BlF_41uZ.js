import{j as n}from"./iframe-2CZ5tyet.js";import{B as e}from"./BasePdfViewer-CyLDmSNy.js";import"./preload-helper-PdhlwSnk.js";import"./index-BEbGGmzC.js";import"./BasePdfViewer.module.css-C8b_AzH6.js";import"./PdfViewerAnnotationLayer-Dd5p3ukB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D9ZbFeZN.js";import"./PdfViewerOutlineSidebar-8WiHnCg-.js";import"./PdfViewerSidebarHeader-B4TVUbFg.js";import"./useBaseUiId-DmeaPkXN.js";import"./useControlled-Dh1VVbb0.js";import"./CompositeRoot-76cTM_3o.js";import"./CompositeItem-_M4T2kN5.js";import"./ToolbarRootContext-C-QqQ4cn.js";import"./composite-D3k21xgh.js";import"./svgIconContainer-CNOiLZ-C.js";import"./PdfViewerSearchBar-By1XArfG.js";import"./chevron-up-C0GYKdBI.js";import"./chevron-down-9zPbKgFH.js";import"./cross-L_JwSQIU.js";import"./PdfViewerSidebar-BqZsPWDv.js";import"./index-DlBbVzYN.js";import"./index-DJ2zkz4W.js";import"./index-BzLD7IFo.js";import"./PdfViewerToolbar-CAV7Vpmh.js";import"./Button-eNpy85xj.js";import"./chevron-right-mixEo0wD.js";import"./Input-nyDT7hKf.js";import"./search-DVGk6bce.js";import"./spin-CJbnDIaV.js";import"./error-_JBSJ8K6.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4353/8d01d08d6263e896d9507973c56ed8c84bf81a48/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
