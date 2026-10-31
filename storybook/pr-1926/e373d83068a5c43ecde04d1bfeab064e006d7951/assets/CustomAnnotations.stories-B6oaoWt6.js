import{j as n}from"./iframe-0Iz5vwcT.js";import{B as e}from"./BasePdfViewer-CJ8eB4a0.js";import"./preload-helper-DPuYeI1F.js";import"./index-CwqL2BSp.js";import"./BasePdfViewer.module.css-BiS9pe0S.js";import"./PdfViewerAnnotationLayer-c5nLpHg2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CJcUjf_p.js";import"./PdfViewerOutlineSidebar-Be_Zo40W.js";import"./PdfViewerSidebarHeader-DcaKdHvh.js";import"./useBaseUiId-BzcgVOgr.js";import"./useControlled-BgJ32gqU.js";import"./CompositeRoot-CNlW4c9i.js";import"./CompositeItem-DmRUbVI5.js";import"./ToolbarRootContext-C3DWskzf.js";import"./composite-N0Lz-u2v.js";import"./svgIconContainer--rVYZd1H.js";import"./PdfViewerSearchBar-D4JCi0vc.js";import"./chevron-up-DcAtfW_g.js";import"./chevron-down-BAJ5mZyN.js";import"./cross-zS2Wnz2V.js";import"./PdfViewerSidebar-tC8ME53G.js";import"./index-Cl9Abjho.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./PdfViewerToolbar-lbUzGLcg.js";import"./Button-DmPkGrX2.js";import"./chevron-right-y_CQpaOO.js";import"./Input-CxV_aY0Y.js";import"./search-C60pdPoy.js";import"./spin-7T13QWSd.js";import"./error-D9h6iLxx.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-1926/e373d83068a5c43ecde04d1bfeab064e006d7951/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
