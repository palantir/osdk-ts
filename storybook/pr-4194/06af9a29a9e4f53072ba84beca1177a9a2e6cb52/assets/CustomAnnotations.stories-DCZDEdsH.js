import{j as n}from"./iframe-Dig_Ahq7.js";import{B as e}from"./BasePdfViewer-DX0cfHX1.js";import"./preload-helper-Eyc3oojg.js";import"./index-BAoTCyK2.js";import"./BasePdfViewer.module.css-f06tqEOd.js";import"./PdfViewerAnnotationLayer-CPy19uY3.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-gmemh2me.js";import"./PdfViewerOutlineSidebar-CBtq1nHe.js";import"./PdfViewerSidebarHeader-C85LB2Ae.js";import"./useBaseUiId-BXYV1Ucu.js";import"./useControlled-9l0-iUGA.js";import"./CompositeRoot-CgIqtHlb.js";import"./CompositeItem-CjjvTweq.js";import"./ToolbarRootContext-5tRY-prW.js";import"./composite-GVV5HeYl.js";import"./svgIconContainer-Cx17DJom.js";import"./PdfViewerSearchBar-BxqSR1q4.js";import"./chevron-up-VVP3vy4s.js";import"./chevron-down-D5J97Xaa.js";import"./cross-BbZdDJWd.js";import"./PdfViewerSidebar-DawMHPEh.js";import"./index-DZ8Usuwg.js";import"./index-r_flECQw.js";import"./index-BkAj4YFS.js";import"./PdfViewerToolbar-DhVqrJwy.js";import"./Button-Cg2kaI0u.js";import"./chevron-right-CZlYQWRQ.js";import"./Input-DERIfaLU.js";import"./search-C4f4g9Ue.js";import"./spin-CFjZcKnU.js";import"./error-D0UPEL3v.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4194/06af9a29a9e4f53072ba84beca1177a9a2e6cb52/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
