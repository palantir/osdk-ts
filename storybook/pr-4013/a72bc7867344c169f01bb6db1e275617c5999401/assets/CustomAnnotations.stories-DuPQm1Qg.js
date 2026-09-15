import{j as n}from"./iframe-nH92Qb6I.js";import{B as e}from"./BasePdfViewer-uJ_Q6rCG.js";import"./preload-helper-DVpIcuXN.js";import"./index-wUFT2bRw.js";import"./BasePdfViewer.module.css-DcYhXMB-.js";import"./PdfViewerAnnotationLayer-DjkEfjUi.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BV-AXVM8.js";import"./PdfViewerOutlineSidebar-WO20fs16.js";import"./PdfViewerSidebarHeader-CFdatxWp.js";import"./useBaseUiId-Dbvfrb6U.js";import"./useControlled-B8icxwdl.js";import"./CompositeRoot-C5RkKO9N.js";import"./CompositeItem-BF333Zgu.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./composite-B2ptXcYf.js";import"./svgIconContainer-CCtPkDCx.js";import"./PdfViewerSearchBar-DmNpO4UM.js";import"./chevron-up-CjBACsrO.js";import"./chevron-down-CBmuqb-m.js";import"./cross-HApDVAUs.js";import"./PdfViewerSidebar-C2JOFR5Q.js";import"./index-DgFSfdtE.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./PdfViewerToolbar-DzQa4bw0.js";import"./Button-w7xoCEq9.js";import"./chevron-right-WRJUOi42.js";import"./Input-DzMyb8hK.js";import"./search-D5Opa-iA.js";import"./spin-CHh1mY6m.js";import"./error-BXUm0BgQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4013/a72bc7867344c169f01bb6db1e275617c5999401/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
