import{j as n}from"./iframe-CfbjiUO2.js";import{B as e}from"./BasePdfViewer-DJB9_lds.js";import"./preload-helper-9qFOutGb.js";import"./index-DhEKv3k8.js";import"./BasePdfViewer.module.css-JwtLv1uZ.js";import"./PdfViewerAnnotationLayer-BUfLzmfL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CVZjzGMV.js";import"./PdfViewerOutlineSidebar-B-yLYXLp.js";import"./PdfViewerSidebarHeader-C1uN5Z6o.js";import"./useBaseUiId-KkzZtg6c.js";import"./useControlled-NF1yqRGY.js";import"./CompositeRoot-CXgLN0Iq.js";import"./CompositeItem-CXj7-nx_.js";import"./ToolbarRootContext-DEszTe9o.js";import"./composite-BLsaDnsq.js";import"./svgIconContainer-n1-XLaqe.js";import"./PdfViewerSearchBar-CIBFGTkz.js";import"./chevron-up-CcxcxHpC.js";import"./chevron-down-7jPpylX5.js";import"./cross-CDv3c9ZT.js";import"./PdfViewerSidebar-Bs4Hob8D.js";import"./index-Bv3dL3pD.js";import"./index-DeN7WaWx.js";import"./index-Cdt2HnwD.js";import"./PdfViewerToolbar-Y1Y0Zxy4.js";import"./Button-BVuGahtR.js";import"./chevron-right-0ZHExpFP.js";import"./Input-C6r2dONX.js";import"./search-BvtxNbE5.js";import"./spin-CtnqQZad.js";import"./error-CdqVFWE7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4393/40caf1a3fbccb3fc6f72ae042078ca77aa3335c5/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
