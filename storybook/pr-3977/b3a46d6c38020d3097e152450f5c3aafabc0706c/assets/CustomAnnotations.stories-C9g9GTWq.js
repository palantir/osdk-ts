import{j as n}from"./iframe-C-b6oTOJ.js";import{B as e}from"./BasePdfViewer-Bb1GxKDl.js";import"./preload-helper-BeH59gqJ.js";import"./index-DE1s0YYF.js";import"./BasePdfViewer.module.css-DjwK060C.js";import"./PdfViewerAnnotationLayer-CQ2_MTI6.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D540CxjQ.js";import"./PdfViewerOutlineSidebar-BoNQ4lFb.js";import"./PdfViewerSidebarHeader-BjeOX70j.js";import"./useBaseUiId-CkMODpS3.js";import"./useControlled-g-pxj8O4.js";import"./CompositeRoot-By7QrvDw.js";import"./CompositeItem-BEGPA2jt.js";import"./ToolbarRootContext-D9YuleTy.js";import"./composite-4UqYDIuK.js";import"./svgIconContainer-OHRV30Tv.js";import"./PdfViewerSearchBar-DAOxzz1O.js";import"./chevron-up-BOSh8gY-.js";import"./chevron-down-D7cmGpd4.js";import"./cross-CHQB6uFl.js";import"./PdfViewerSidebar-8csFJavl.js";import"./index-D6jWMBsi.js";import"./index-0ZNUZbhg.js";import"./index-BVjVMQ97.js";import"./PdfViewerToolbar-Bo_jdLCk.js";import"./Button-CV_yYG-R.js";import"./chevron-right-CHRf1YWp.js";import"./Input-BSxN1vwO.js";import"./search-JVftW7k-.js";import"./spin-CYHqXpOb.js";import"./error-ByhaKTr1.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3977/b3a46d6c38020d3097e152450f5c3aafabc0706c/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
