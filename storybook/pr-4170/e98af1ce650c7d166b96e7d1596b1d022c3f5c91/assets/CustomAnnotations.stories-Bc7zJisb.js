import{j as n}from"./iframe-q2c2VLg1.js";import{B as e}from"./BasePdfViewer-CLGb0yYE.js";import"./preload-helper-Dd4fXQyN.js";import"./index-CRaifptZ.js";import"./BasePdfViewer.module.css-BhvA2JQx.js";import"./PdfViewerAnnotationLayer-BMIz35Jw.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DOG2wh02.js";import"./PdfViewerOutlineSidebar-Cb1YaglW.js";import"./PdfViewerSidebarHeader-8udpdpqv.js";import"./useBaseUiId-omTFJ4IU.js";import"./useControlled-CAFIwmV7.js";import"./CompositeRoot-34k3_Kr-.js";import"./CompositeItem-DvufjjXa.js";import"./ToolbarRootContext-gOhTdtut.js";import"./composite-NSumfvPY.js";import"./svgIconContainer-BlrvzrEz.js";import"./PdfViewerSearchBar-Bn22xYiG.js";import"./chevron-up-XvGVS-mL.js";import"./chevron-down-BiLdY5Pu.js";import"./cross-CcrMbm-0.js";import"./PdfViewerSidebar-CqCuAdAE.js";import"./index-Br8J5rfr.js";import"./index-4j_oKqKk.js";import"./index-9q1QNwoC.js";import"./PdfViewerToolbar-Ct_J3koE.js";import"./Button-BsjIA1gg.js";import"./chevron-right-DF3ZNCMV.js";import"./Input-BRmugyzW.js";import"./search-B-fHJPoD.js";import"./spin-BkH7-Xde.js";import"./error-D-r93luQ.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4170/e98af1ce650c7d166b96e7d1596b1d022c3f5c91/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
