import{j as n}from"./iframe-BdamuBSW.js";import{B as e}from"./BasePdfViewer-CfuEivHT.js";import"./preload-helper-DZ9xmEaG.js";import"./index-CzCGUNDu.js";import"./BasePdfViewer.module.css-DNaam48w.js";import"./PdfViewerAnnotationLayer-uA9U8qiX.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BlGRZKJK.js";import"./PdfViewerOutlineSidebar-B5sPVgvF.js";import"./PdfViewerSidebarHeader-BiZaCb4D.js";import"./useBaseUiId-CrCJEUlz.js";import"./useControlled-D5iM1jy5.js";import"./CompositeRoot-D_N-KuvT.js";import"./CompositeItem-BuuNoifa.js";import"./ToolbarRootContext-VKjIBJTb.js";import"./composite-Bvo9YAgy.js";import"./svgIconContainer-CGhkkD0s.js";import"./PdfViewerSearchBar-BIIHkJvh.js";import"./chevron-up-uP8S8emQ.js";import"./chevron-down-BM9a4BBi.js";import"./cross-CLaBWSw6.js";import"./PdfViewerSidebar-BKCJ2olr.js";import"./index-Djo-XrZC.js";import"./index-B5Cmbtjp.js";import"./index-BCh8Pu1q.js";import"./PdfViewerToolbar-CKIh_5KU.js";import"./Button-NcM8hPFP.js";import"./chevron-right-DrMBe7og.js";import"./Input-vUwBhrLX.js";import"./search-XGjCTgti.js";import"./spin-DyzQzq41.js";import"./error-DKUZpZvu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4188/e5f58be32e36ecd1b18165bc485813185a059d93/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
