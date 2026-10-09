import{j as n}from"./iframe-DgBlFB-Q.js";import{B as e}from"./BasePdfViewer-DsqbTS71.js";import"./preload-helper-Ckmup5sP.js";import"./index-BMtmTjMy.js";import"./BasePdfViewer.module.css-BRL4Dp6t.js";import"./PdfViewerAnnotationLayer-DLhKs6l-.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BIvcV-MS.js";import"./PdfViewerOutlineSidebar-D7PSH4Bk.js";import"./PdfViewerSidebarHeader-Bx6aYh6L.js";import"./useBaseUiId-64Qj4RH9.js";import"./useControlled-CHdQNKZn.js";import"./CompositeRoot-TcDwVcp-.js";import"./CompositeItem-i9lnYJRv.js";import"./ToolbarRootContext-qAA2IXiR.js";import"./composite-CMuAYTfG.js";import"./svgIconContainer-D-J2n4Ka.js";import"./PdfViewerSearchBar--ymWi_4o.js";import"./chevron-up-BXK6fdgq.js";import"./chevron-down-DTLIZ0ai.js";import"./cross-BnOVBF-i.js";import"./PdfViewerSidebar-BurUeoDp.js";import"./index-D32ZsVcf.js";import"./index-Cyc1Gn9L.js";import"./index-M-GOHxvS.js";import"./PdfViewerToolbar-DyhCii3R.js";import"./Button-Bq1DJjhz.js";import"./chevron-right-EpcEzA0l.js";import"./Input-MozziWfa.js";import"./search-CH52w7PT.js";import"./spin-DELmZ1z8.js";import"./error-BOa7JtYq.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3985/f30f69064a20ff5223d90b5f24b4fb841ab01990/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
