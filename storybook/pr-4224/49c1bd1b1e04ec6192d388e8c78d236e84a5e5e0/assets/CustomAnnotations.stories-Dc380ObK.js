import{j as n}from"./iframe-C4UMSUV8.js";import{B as e}from"./BasePdfViewer-iga0fp3v.js";import"./preload-helper-BqsIy_YL.js";import"./index-Dlv7asCS.js";import"./BasePdfViewer.module.css-Ak3nPOuj.js";import"./PdfViewerAnnotationLayer-Ch_N3FcB.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClUew2zN.js";import"./PdfViewerOutlineSidebar-RxL3lDwr.js";import"./PdfViewerSidebarHeader-Cm_hUtvl.js";import"./useBaseUiId-BfnaHgsG.js";import"./useControlled-DaMNSDAG.js";import"./CompositeRoot-BWiYgqjG.js";import"./CompositeItem-DdxiUYfL.js";import"./ToolbarRootContext-DVOP2BC1.js";import"./composite-BaqTaPKU.js";import"./svgIconContainer-AOO7GD-s.js";import"./PdfViewerSearchBar-SvNYbmRl.js";import"./chevron-up-I5wkW0rm.js";import"./chevron-down-OaulZx0F.js";import"./cross-DzO2_pjl.js";import"./PdfViewerSidebar-8ig9blke.js";import"./index-BlMVnv-1.js";import"./index-Dm12TBSV.js";import"./index-DMrzx1Mz.js";import"./PdfViewerToolbar-BS8IU3IK.js";import"./Button-3fs9_LlW.js";import"./chevron-right-C-zrQz2s.js";import"./Input-Dd7hmS3r.js";import"./search-D1rWsfme.js";import"./spin-D0jhQAV7.js";import"./error-Dz-jjHSU.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4224/49c1bd1b1e04ec6192d388e8c78d236e84a5e5e0/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
