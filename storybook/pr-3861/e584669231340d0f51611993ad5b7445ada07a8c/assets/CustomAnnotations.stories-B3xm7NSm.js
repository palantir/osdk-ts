import{j as n}from"./iframe-CtGIC4wf.js";import{B as e}from"./BasePdfViewer-CgnPqdEn.js";import"./preload-helper-Ch20KRc2.js";import"./index-D-8enqIL.js";import"./BasePdfViewer.module.css-DJ_esRYH.js";import"./PdfViewerAnnotationLayer-BvkQq_t6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BuC57QWx.js";import"./PdfViewerOutlineSidebar-BhQDqhWq.js";import"./PdfViewerSidebarHeader-B7i5b0Y5.js";import"./useBaseUiId-DmITm_fg.js";import"./useControlled-Dn14MKUN.js";import"./CompositeRoot-om5jhTSf.js";import"./CompositeItem-Blb9OYTf.js";import"./ToolbarRootContext-u5ji7rvZ.js";import"./composite-BpxrOvE9.js";import"./svgIconContainer-CIwPC-KF.js";import"./PdfViewerSearchBar-B6HvsJLh.js";import"./chevron-up-Bd3-i9IO.js";import"./chevron-down-kLepJLrY.js";import"./cross-7ld4MA3o.js";import"./PdfViewerSidebar-RKCHn4VB.js";import"./index-CJuiV3p2.js";import"./index-DaOQzUZN.js";import"./index-BSpR3dVY.js";import"./PdfViewerToolbar-CAcOa_Un.js";import"./Button-Bzw6-RIC.js";import"./chevron-right-B9e5fgH9.js";import"./Input-CpszBXLO.js";import"./search-w1jm1zVn.js";import"./spin-CeGF-HQs.js";import"./error-C6MzmjpC.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3861/e584669231340d0f51611993ad5b7445ada07a8c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
