import{j as n}from"./iframe-DMLeRer3.js";import{B as e}from"./BasePdfViewer-lM2-B1Oq.js";import"./preload-helper-CgrwvKPK.js";import"./index-uCsQBnfO.js";import"./BasePdfViewer.module.css-oEkIZ4Lo.js";import"./PdfViewerAnnotationLayer-NrGnSNB6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DCPrnDbw.js";import"./PdfViewerOutlineSidebar-BfLmFbqX.js";import"./PdfViewerSidebarHeader-AtZjeEOX.js";import"./useBaseUiId-C4s8ZVxT.js";import"./useControlled-DG760Vv3.js";import"./CompositeRoot-D2UIQAv4.js";import"./CompositeItem-BKFtY3yw.js";import"./ToolbarRootContext-DJJ5b_fP.js";import"./composite-Cge9zcMx.js";import"./svgIconContainer-COt-rC22.js";import"./PdfViewerSearchBar-BvmWqxWM.js";import"./chevron-up-BFhbhHf5.js";import"./chevron-down-Cn9rULd1.js";import"./cross-BxDqlCZv.js";import"./PdfViewerSidebar-DDV9Wv5d.js";import"./index-C9zE8P46.js";import"./index-XhF3-Ii5.js";import"./index-vxfuwNf-.js";import"./PdfViewerToolbar-QuKUX5Xt.js";import"./Button-DPPusxtK.js";import"./chevron-right-C8-m40Ze.js";import"./Input-LP4KcDLo.js";import"./search-C183X4Rd.js";import"./spin-BQROtAlx.js";import"./error-CtIw9Q7f.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3992/f53aba066d66f5de46e1ddce5e858ddc07e1bd3e/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
