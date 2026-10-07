import{j as n}from"./iframe-BV8H6lRC.js";import{B as e}from"./BasePdfViewer-B4G3EUmX.js";import"./preload-helper-FghdvxpP.js";import"./index-DU9RRfrb.js";import"./BasePdfViewer.module.css-BZmq6QIG.js";import"./PdfViewerAnnotationLayer-BHuXui-j.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-B_VcMN3g.js";import"./PdfViewerOutlineSidebar-CmzAfdKK.js";import"./PdfViewerSidebarHeader-hTneTus5.js";import"./useBaseUiId-Bch4RCf-.js";import"./useControlled-DFgYtmw-.js";import"./CompositeRoot-CPs-Y_e9.js";import"./CompositeItem-CfY4xOZ4.js";import"./ToolbarRootContext-B0zqLD7S.js";import"./composite-6jNJwuj9.js";import"./svgIconContainer-B2TLggqZ.js";import"./PdfViewerSearchBar-BYyPjfps.js";import"./chevron-up-Bb5GS6oZ.js";import"./chevron-down-CmiHvm8d.js";import"./cross-D92mjgqE.js";import"./PdfViewerSidebar-iY0Wqrjv.js";import"./index-BSOrQZ_c.js";import"./index-fE68LmNS.js";import"./index-ByctvPor.js";import"./PdfViewerToolbar-Cse695cK.js";import"./Button-cZssApwN.js";import"./chevron-right-UpjaBuyL.js";import"./Input-B3KKnPgU.js";import"./search-BlhwHZiG.js";import"./spin-CG9sDkVY.js";import"./error-Bt7eKOT3.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4188/04cbd366ddee0e73ed4b12ada8abcde507e8ff1d/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
