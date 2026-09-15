import{j as n}from"./iframe-BcjmHG5Y.js";import{B as e}from"./BasePdfViewer-BnwBAcSO.js";import"./preload-helper-CevB4zUw.js";import"./index-WgcqtCT6.js";import"./BasePdfViewer.module.css-tai0kSJY.js";import"./PdfViewerAnnotationLayer-D5JX9aV4.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-2Xejid9Q.js";import"./PdfViewerOutlineSidebar-DC7S75s4.js";import"./PdfViewerSidebarHeader-C6vvu423.js";import"./useBaseUiId-CYrtGdJE.js";import"./useControlled-6NYxLXP3.js";import"./CompositeRoot-C_bSEZIK.js";import"./CompositeItem-DLw_ttOE.js";import"./ToolbarRootContext-DAX0lKDl.js";import"./composite-D6B2PGWO.js";import"./svgIconContainer-CoM5Z7Ve.js";import"./PdfViewerSearchBar-CNwGzLCF.js";import"./chevron-up-CtIGJGzt.js";import"./chevron-down-yt_M0O0c.js";import"./cross-DoMlZBaZ.js";import"./PdfViewerSidebar-CXhLhpxd.js";import"./index-BuLxCPA9.js";import"./index-CsMXJwKN.js";import"./index-DpV3ZQ0J.js";import"./PdfViewerToolbar-D8Gu7KmF.js";import"./Button-DJfJDABU.js";import"./chevron-right-CKyvtAtA.js";import"./Input-e_01wq9D.js";import"./search-jO8my80A.js";import"./spin-Bv0dbPBc.js";import"./error-CYyfg8wo.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3772/f84cd7c0ef01ff828b540ed3e345f74f13b3989e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
