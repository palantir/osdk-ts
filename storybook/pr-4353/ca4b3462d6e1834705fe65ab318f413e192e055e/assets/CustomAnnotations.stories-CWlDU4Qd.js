import{j as n}from"./iframe-C-tkmioo.js";import{B as e}from"./BasePdfViewer-BpGhbyGg.js";import"./preload-helper-DfuNKgCp.js";import"./index-mhh8JEg6.js";import"./BasePdfViewer.module.css-CoYPXmf-.js";import"./PdfViewerAnnotationLayer-BgqscmiO.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DKvN2AoI.js";import"./PdfViewerOutlineSidebar-Bf2_BKny.js";import"./PdfViewerSidebarHeader-DBVvTYD7.js";import"./useBaseUiId-Cm7MFvra.js";import"./useControlled-C9aUqxO7.js";import"./CompositeRoot-CG7HGsV7.js";import"./CompositeItem-Byuaai_8.js";import"./ToolbarRootContext-BgWudj9O.js";import"./composite-C8fhvEre.js";import"./svgIconContainer-CWpp_2jS.js";import"./PdfViewerSearchBar-c4mg8daO.js";import"./chevron-up-0X7OS9a0.js";import"./chevron-down-CDLMbCJ_.js";import"./cross-C44ftUHc.js";import"./PdfViewerSidebar-DZpXN_HU.js";import"./index-C_kRO_H9.js";import"./index-hoVNSPuR.js";import"./index-B90a8S-M.js";import"./PdfViewerToolbar-CbAV2RCo.js";import"./Button-CGB2DjlW.js";import"./chevron-right-Cf2q8DiW.js";import"./Input-DLE-7B-W.js";import"./search-i-B1QBlz.js";import"./spin-DVCJK9LM.js";import"./error-CXAWYJfd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4353/ca4b3462d6e1834705fe65ab318f413e192e055e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
