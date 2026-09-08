import{j as t}from"./iframe-Xc_JH78I.js";import"./pdf-viewer-C33F1GDH.js";import{B as e}from"./PdfViewer-DFM3n76K.js";import"./preload-helper-AYl1pujm.js";import"./withOsdkMetrics-CzAtW5Pc.js";import"./svgIconContainer-CQmggZ37.js";import"./useBaseUiId-BI3SiDaB.js";import"./Input-BFx2x6nA.js";import"./index-BLCrQc9J.js";import"./index-CsuxBpJ0.js";import"./CompositeRoot-DQx8BA1N.js";import"./CompositeItem-B_3aLVYQ.js";import"./ToolbarRootContext-we2pFgZ9.js";import"./index-Bp1R9O-s.js";import"./chevron-right-B5er9inO.js";import"./spin-BsDWnG40.js";import"./error-D-Pc-XbV.js";const{fn:s}=__STORYBOOK_MODULE_TEST__,l="/osdk-ts/storybook/pr-3979/54db001b8716acd8fdda1d28e509d5303813053b/compressed.tracemonkey-pldi-09.pdf";function c({annotation:n}){return t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:n.label??"Note"})}function i({annotation:n}){return t.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:n.label??"1"})}const p=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:n=>t.jsx(c,{...n})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:n=>t.jsx(i,{...n})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:n=>t.jsx(i,{...n})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],S={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:l,annotations:p,onAnnotationClick:s()},render:n=>t.jsx("div",{style:{height:"600px"},children:t.jsx(e,{...n})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
/>`}}}};var a,r,d;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(d=(r=o.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};const v=["CustomAnnotation"];export{o as CustomAnnotation,v as __namedExportsOrder,S as default};
