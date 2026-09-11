import{j as n}from"./iframe-DwYLkjIm.js";import{B as e}from"./BasePdfViewer-Bz_525CN.js";import"./preload-helper-ATh-df95.js";import"./index-BjvNbQ5u.js";import"./BasePdfViewer.module.css-DjwGQFbX.js";import"./PdfViewerAnnotationLayer-CsK0itnE.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-efj28Q1T.js";import"./PdfViewerOutlineSidebar-vOyjNg7X.js";import"./PdfViewerSidebarHeader-Dh05ChLP.js";import"./useBaseUiId-BLNd3-C8.js";import"./useControlled-B5ZJB9TM.js";import"./CompositeRoot-D2N9YbOp.js";import"./CompositeItem-CqCnARzh.js";import"./ToolbarRootContext-y1EgqHY_.js";import"./composite-DkREeV9G.js";import"./svgIconContainer-BO0D2b3B.js";import"./PdfViewerSearchBar-UgxAGeGh.js";import"./chevron-up-BMGLxzIX.js";import"./chevron-down-gw5VoLqI.js";import"./cross-8A5W1-mq.js";import"./PdfViewerSidebar-jRIaG_pg.js";import"./index-C80pQDpv.js";import"./index-DaP8hSau.js";import"./index-Cp5k1JkI.js";import"./PdfViewerToolbar-BLcCkOHL.js";import"./Button-De4eCp5V.js";import"./chevron-right-HEh5H6mH.js";import"./Input-COaOuFmv.js";import"./search-DbuZ2eC4.js";import"./spin-rErBRrsV.js";import"./error-CtWk7aa4.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/8cd92914478d40883453ed2b94ba7a9385d1ca96/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
