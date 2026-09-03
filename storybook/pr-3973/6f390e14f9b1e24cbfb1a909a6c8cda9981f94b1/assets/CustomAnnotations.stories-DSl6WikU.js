import{j as n}from"./iframe-Cxs4teez.js";import{B as e}from"./BasePdfViewer-DIuCWME5.js";import"./preload-helper-Bd6Vgg8g.js";import"./index-C3kmvWsS.js";import"./BasePdfViewer.module.css-D8v6yBUs.js";import"./PdfViewerAnnotationLayer-BwVyFrhm.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DZ-FrdeJ.js";import"./PdfViewerOutlineSidebar-w-_uuIDy.js";import"./PdfViewerSidebarHeader-CJjKz96g.js";import"./useBaseUiId-DWXmNFpC.js";import"./useControlled-Dc-gXlj3.js";import"./CompositeRoot-BbpRV3hw.js";import"./CompositeItem-4Ik-gd3d.js";import"./ToolbarRootContext-BD8ceMmu.js";import"./composite-b3NzNsDh.js";import"./svgIconContainer-JiM41EbN.js";import"./PdfViewerSearchBar-cmDZB7Lo.js";import"./chevron-up-D6Etz7I_.js";import"./chevron-down-DR1MLtBA.js";import"./cross-D5j5wcq7.js";import"./PdfViewerSidebar-qQaOycbU.js";import"./index-CTzs5x76.js";import"./index-C7HiqnbK.js";import"./index-WVEl5G15.js";import"./PdfViewerToolbar-hyyd87xX.js";import"./Button-B-HuJTwa.js";import"./chevron-right-Dff7I2nR.js";import"./Input-BYExG4yH.js";import"./search-BrqbiSOv.js";import"./spin-U25dJV0l.js";import"./error-CSDPFrAs.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3973/6f390e14f9b1e24cbfb1a909a6c8cda9981f94b1/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
