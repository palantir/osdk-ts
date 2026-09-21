import{j as n}from"./iframe-CjpAd4U5.js";import{B as e}from"./BasePdfViewer-BJ6LrAzv.js";import"./preload-helper-BfNxESlv.js";import"./index-CFyMtNDf.js";import"./BasePdfViewer.module.css-CBWGqiuR.js";import"./PdfViewerAnnotationLayer-Bstc1YrJ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-zitOaYnx.js";import"./PdfViewerOutlineSidebar-BQPpcnzu.js";import"./PdfViewerSidebarHeader-CTkE4Fte.js";import"./useBaseUiId-DtGYbhuk.js";import"./useControlled-DlmQuXZO.js";import"./CompositeRoot-B27X4oaO.js";import"./CompositeItem-M0I4N5Qo.js";import"./ToolbarRootContext-pZWEREev.js";import"./composite-CXKEjPEl.js";import"./svgIconContainer-BfRjvWya.js";import"./PdfViewerSearchBar-Bb3L9UE1.js";import"./chevron-up-B4XpbNM_.js";import"./chevron-down-Dk_9PWbo.js";import"./cross-YCEgVYb5.js";import"./PdfViewerSidebar-DID0pTHO.js";import"./index-D-J9KFgM.js";import"./index-CESQmif6.js";import"./index-BqxRrYRP.js";import"./PdfViewerToolbar-BrxzFb6J.js";import"./Button-B8Qahzmt.js";import"./chevron-right-CgDOv9aq.js";import"./Input-BMeqWiRY.js";import"./search-CXQZDVwK.js";import"./spin-DEMYbdg9.js";import"./error-DP0C5EXb.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4063/ef9eac50a042fa20ad9211b8b27077aaaa2693e5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
