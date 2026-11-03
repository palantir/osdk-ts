import{j as n}from"./iframe-CvOjOlaX.js";import{B as e}from"./BasePdfViewer-XxYFUhy-.js";import"./preload-helper-CMIwN0Ht.js";import"./index-CrAKByIV.js";import"./BasePdfViewer.module.css-CS7G9jaH.js";import"./PdfViewerAnnotationLayer-1nQ56Sfs.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DtGGfLUN.js";import"./PdfViewerOutlineSidebar-allfpWgw.js";import"./PdfViewerSidebarHeader-MUH0IPp6.js";import"./useBaseUiId-2b2yWiLC.js";import"./useControlled-Bk4S-y5O.js";import"./CompositeRoot-Dik6S4f6.js";import"./CompositeItem-CqY36BxB.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./composite-DBq50y_B.js";import"./svgIconContainer-CCgDAq3h.js";import"./PdfViewerSearchBar-Q_dnxO6t.js";import"./chevron-up-CGfHgAPT.js";import"./chevron-down-DE6gjpOR.js";import"./cross-DiBcry41.js";import"./PdfViewerSidebar-DQRM2gBM.js";import"./index-hoOdhAdW.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./PdfViewerToolbar-ButAyDRs.js";import"./Button-VY6TA0Ac.js";import"./chevron-right-Bd3FDsuH.js";import"./Input-B3WzxSEN.js";import"./search-C9_Jgha_.js";import"./spin-C_j8e1Tw.js";import"./error-BYaZivRW.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4321/f03cf6e2be430efbcc5420457f909181d9b87a56/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
