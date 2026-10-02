import{j as n}from"./iframe-hU9JLApV.js";import{B as e}from"./BasePdfViewer-DlMgAcfW.js";import"./preload-helper-AOIAtsF4.js";import"./index-hWpPzCns.js";import"./BasePdfViewer.module.css-DPlVy2VX.js";import"./PdfViewerAnnotationLayer-Dzjl8T_l.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B96Z0p_f.js";import"./PdfViewerOutlineSidebar-B06XdwdH.js";import"./PdfViewerSidebarHeader-CM9eCSi5.js";import"./useBaseUiId-D4EPdJVo.js";import"./useControlled-Ee3F40Eh.js";import"./CompositeRoot-BkcZDV_2.js";import"./CompositeItem-D6B-PBPX.js";import"./ToolbarRootContext-CBnaAJo0.js";import"./composite-CG9ZuuKA.js";import"./svgIconContainer-C2qhBo7T.js";import"./PdfViewerSearchBar-CcXW7m5Q.js";import"./chevron-up-D0o9u8ZK.js";import"./chevron-down--KZfqGJl.js";import"./cross-B2QeVIfm.js";import"./PdfViewerSidebar-CLl6W5dm.js";import"./index-DcEtsm11.js";import"./index-B1eIq1Hb.js";import"./index-DQGyJzH9.js";import"./PdfViewerToolbar-C49HZ1_S.js";import"./Button-DajEVgZJ.js";import"./chevron-right-eUo-XoOk.js";import"./Input-BRXbodNm.js";import"./search-B_1m1rLM.js";import"./spin-CJnOlVzn.js";import"./error-C7_JEIae.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4137/74e16fa7caf6d265bf77e76f10fafac14b77a811/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
