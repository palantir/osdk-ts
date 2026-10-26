import{j as n}from"./iframe-HJ0Gtc-x.js";import{B as e}from"./BasePdfViewer-III4KBU4.js";import"./preload-helper-BOUoT_Gy.js";import"./index-211_BqLo.js";import"./BasePdfViewer.module.css-RjgXnXmJ.js";import"./PdfViewerAnnotationLayer-y57KjwKf.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCfkHz93.js";import"./PdfViewerOutlineSidebar-BMyImXiD.js";import"./PdfViewerSidebarHeader-CLXo5Xbh.js";import"./useBaseUiId-CeZXZ9Z0.js";import"./useControlled-C74o2pv-.js";import"./CompositeRoot-BEn1KuXL.js";import"./CompositeItem-CHrD2JLR.js";import"./ToolbarRootContext-Cec3nuK8.js";import"./composite-CuUXCjDd.js";import"./svgIconContainer-BOUC7MPM.js";import"./PdfViewerSearchBar-BRazA5yA.js";import"./chevron-up-CMNFkWrY.js";import"./chevron-down-Db91ZRmD.js";import"./cross-ChjkGLAA.js";import"./PdfViewerSidebar-KD_AfK3r.js";import"./index-BbA9vrwp.js";import"./index-CAQybw0C.js";import"./index-BPe5620H.js";import"./PdfViewerToolbar-C-tA663X.js";import"./Button-Cg7ItP1u.js";import"./chevron-right-CfnAmICL.js";import"./Input-BRC4lGnf.js";import"./search-BjFqXd51.js";import"./spin-C2Gbrlgv.js";import"./error-BQ1AWTRy.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4260/8cc38dc4ebd1bf36ba7ba7a58acdda048944d521/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
