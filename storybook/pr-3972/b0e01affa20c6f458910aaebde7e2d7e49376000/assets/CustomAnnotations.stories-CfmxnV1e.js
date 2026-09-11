import{j as n}from"./iframe-D5Tg4ktw.js";import{B as e}from"./BasePdfViewer-BOyG8J42.js";import"./preload-helper-BaIqC2Pe.js";import"./index-BEbB4IUm.js";import"./BasePdfViewer.module.css-CHSq3v7k.js";import"./PdfViewerAnnotationLayer-DBoJ3DWL.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-OlQYmdyC.js";import"./PdfViewerOutlineSidebar-DMeC2yTp.js";import"./PdfViewerSidebarHeader-B0oWKLF0.js";import"./useBaseUiId-BdvoItIk.js";import"./useControlled-DObGwXHJ.js";import"./CompositeRoot-BRGopZjr.js";import"./CompositeItem-C5_2nepJ.js";import"./ToolbarRootContext-0E-Oi6aL.js";import"./composite-B1gx-sbX.js";import"./svgIconContainer-C3wCuOXB.js";import"./PdfViewerSearchBar-Bzer5j4k.js";import"./chevron-up-DIJxNvtO.js";import"./chevron-down-C1ACHifJ.js";import"./cross-DzUcTLFz.js";import"./PdfViewerSidebar-Bop030IO.js";import"./index-Deb3KNPH.js";import"./index-CFXN4yab.js";import"./index-DJsS0_Xm.js";import"./PdfViewerToolbar-R-lpChve.js";import"./Button-DiryTlNK.js";import"./chevron-right-DFibO6-T.js";import"./Input-CN7F7SIp.js";import"./search-DeZTwCkl.js";import"./spin-DiNU2h6O.js";import"./error-B5UKi7xe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3972/b0e01affa20c6f458910aaebde7e2d7e49376000/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
