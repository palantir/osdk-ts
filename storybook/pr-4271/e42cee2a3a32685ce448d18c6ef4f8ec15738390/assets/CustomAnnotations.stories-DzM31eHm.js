import{j as n}from"./iframe-CEC11uQP.js";import{B as e}from"./BasePdfViewer-BLDcI_MI.js";import"./preload-helper-DVVUuTHt.js";import"./index-PEoHNwfg.js";import"./BasePdfViewer.module.css-DP2xM9Ro.js";import"./PdfViewerAnnotationLayer-BkNWlnlt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CCzZ_YLP.js";import"./PdfViewerOutlineSidebar-D6BdbqWw.js";import"./PdfViewerSidebarHeader-B-_kdxyH.js";import"./useBaseUiId-BjpGd3DR.js";import"./useControlled-DZwN9m8e.js";import"./CompositeRoot-lIII5Bh9.js";import"./CompositeItem-Aj4qkjGh.js";import"./ToolbarRootContext-DUQNKsvO.js";import"./composite-CmpMqd5k.js";import"./svgIconContainer-CbD2_3IP.js";import"./PdfViewerSearchBar-CNg7Y7PN.js";import"./chevron-up-BZqtqOR-.js";import"./chevron-down-6kcuRK_B.js";import"./cross-D6kuzFqN.js";import"./PdfViewerSidebar-CeNUSc63.js";import"./index-pK9n0EOx.js";import"./index-DrOphgIM.js";import"./index-B-Y9FXdo.js";import"./PdfViewerToolbar-9vvx-R0W.js";import"./Button-BJ7HsXYN.js";import"./chevron-right-BCJ_8IKx.js";import"./Input-DBrhN4gs.js";import"./search-3jERTaIF.js";import"./spin-DQI769VT.js";import"./error-BC-ullpf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4271/e42cee2a3a32685ce448d18c6ef4f8ec15738390/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
