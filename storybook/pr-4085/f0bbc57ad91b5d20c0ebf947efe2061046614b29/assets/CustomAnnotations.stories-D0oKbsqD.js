import{j as n}from"./iframe-DUMXb5nI.js";import{B as e}from"./BasePdfViewer-D9jyAdT8.js";import"./preload-helper-BJwXp4Q-.js";import"./index-BbwFJ-ta.js";import"./BasePdfViewer.module.css-EXz7eVf8.js";import"./PdfViewerAnnotationLayer-MUNk1WCL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument--uT6X3D4.js";import"./PdfViewerOutlineSidebar-DLijMWu9.js";import"./PdfViewerSidebarHeader-lN_cgCi1.js";import"./useBaseUiId-_e14ZC1l.js";import"./useControlled-BDe8NiPs.js";import"./CompositeRoot-bLUdZNHz.js";import"./CompositeItem-HBdNGEyu.js";import"./ToolbarRootContext-LKaZxJnb.js";import"./composite-D-SRMe6j.js";import"./svgIconContainer-sVTzBKmW.js";import"./PdfViewerSearchBar-JFPU6FMX.js";import"./chevron-up-D6G-6csF.js";import"./chevron-down-C-ZMpNeB.js";import"./cross-D_uZDyQx.js";import"./PdfViewerSidebar-DdAy3GKE.js";import"./index-CwUqs_yy.js";import"./index-CNSnRqug.js";import"./index-DYmqgljQ.js";import"./PdfViewerToolbar-pzB_gNaQ.js";import"./Button-BgjvY2h6.js";import"./chevron-right-BYcD7BDQ.js";import"./Input-DiFVGF-l.js";import"./search-TGSQVeh_.js";import"./spin-BKKmdTjU.js";import"./error-Cm3UeO8R.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4085/f0bbc57ad91b5d20c0ebf947efe2061046614b29/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
