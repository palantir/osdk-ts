import{j as n}from"./iframe-DO7dF-ar.js";import{B as e}from"./BasePdfViewer-DMHv5_8m.js";import"./preload-helper-BW5WH-mc.js";import"./index-kenPv2GE.js";import"./BasePdfViewer.module.css-DRiv-wav.js";import"./PdfViewerAnnotationLayer-BLzVA28s.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CRxRlTjq.js";import"./PdfViewerOutlineSidebar-DuLZ95Jn.js";import"./PdfViewerSidebarHeader-B9XPgtSM.js";import"./useBaseUiId-Bt-nl6bS.js";import"./useControlled-6UP7zcXc.js";import"./CompositeRoot-BaakZJv5.js";import"./CompositeItem-BwVsaSQK.js";import"./ToolbarRootContext-CZAMPnmu.js";import"./composite-DP63OVsA.js";import"./svgIconContainer-DjMCTipa.js";import"./PdfViewerSearchBar-0wVc1_kw.js";import"./chevron-up-4kQ7rw_l.js";import"./chevron-down-C1ai5XRC.js";import"./cross-C1UL2-2h.js";import"./PdfViewerSidebar-Dtmuy-0M.js";import"./index-CoQO0q6S.js";import"./index-ChtT1bsq.js";import"./index-DTtqbecA.js";import"./PdfViewerToolbar-D5dgAH4J.js";import"./Button-CizE_ePi.js";import"./chevron-right-D04s-5Lb.js";import"./Input-CK_329wL.js";import"./search-BLUkB-J4.js";import"./spin-BvuR2gFg.js";import"./error-D0RjPgCd.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4136/d5c3f9a3f5432fa44d07119e5a68804fa6686b85/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
