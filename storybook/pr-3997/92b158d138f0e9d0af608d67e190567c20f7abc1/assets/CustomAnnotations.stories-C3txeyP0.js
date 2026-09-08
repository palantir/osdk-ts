import{j as n}from"./iframe-CxUFDRLk.js";import{B as e}from"./BasePdfViewer-BZKGnBwj.js";import"./preload-helper-BOCVFqPP.js";import"./index-D3P2PnfT.js";import"./BasePdfViewer.module.css-K1nydPuK.js";import"./PdfViewerAnnotationLayer-V_1V33mS.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DukEMzAf.js";import"./PdfViewerOutlineSidebar-BQwEeTdT.js";import"./PdfViewerSidebarHeader-DksbqRuM.js";import"./useBaseUiId-B_I-AE6w.js";import"./useControlled-i_PgyXUB.js";import"./CompositeRoot-D76SJMup.js";import"./CompositeItem-Bm2eQNpM.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./composite-C6x_RQDW.js";import"./svgIconContainer-lhP_uqYt.js";import"./PdfViewerSearchBar-gzjDB-kn.js";import"./chevron-up-m4GjfVhN.js";import"./chevron-down-CGVLA0Cv.js";import"./cross-BABVEZtV.js";import"./PdfViewerSidebar-BYsJdo7F.js";import"./index-Dh-mEvCI.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./PdfViewerToolbar-BwNf96zt.js";import"./Button-DfD1hoUH.js";import"./chevron-right-Ez3WupoT.js";import"./Input-BnQ1Pqm-.js";import"./search-Bycz8Mke.js";import"./spin-1pkT-4VB.js";import"./error-D-IJQZZn.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3997/92b158d138f0e9d0af608d67e190567c20f7abc1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
