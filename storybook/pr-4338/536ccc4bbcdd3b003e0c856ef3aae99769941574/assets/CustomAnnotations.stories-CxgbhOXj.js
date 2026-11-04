import{j as n}from"./iframe-B89B5CWM.js";import{B as e}from"./BasePdfViewer-WtPstKKo.js";import"./preload-helper-BQ99I6nt.js";import"./index-D9SW0Yle.js";import"./BasePdfViewer.module.css-DiRyNkZ4.js";import"./PdfViewerAnnotationLayer-jlC-OUy_.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DRMM5buo.js";import"./PdfViewerOutlineSidebar-B3wuMY9u.js";import"./PdfViewerSidebarHeader-D0tN3U42.js";import"./useBaseUiId-DtDRBSq4.js";import"./useControlled-oTZtcuwA.js";import"./CompositeRoot-C40CMzTq.js";import"./CompositeItem-CiUmrhhL.js";import"./ToolbarRootContext-BUhhyvqJ.js";import"./composite-B50sO1rH.js";import"./svgIconContainer-ChPhhCD3.js";import"./PdfViewerSearchBar-DRI2AazI.js";import"./chevron-up-CDsSHZnt.js";import"./chevron-down-C8YyWC3O.js";import"./cross-BbpWCkxQ.js";import"./PdfViewerSidebar-B1FEwzSR.js";import"./index-B5gePnV1.js";import"./index-BWtJkqTj.js";import"./index-m1HPcpqW.js";import"./PdfViewerToolbar-BHYPZ07w.js";import"./Button-Y1tATrz0.js";import"./chevron-right-Drph_yb3.js";import"./Input-BTItB3zo.js";import"./search-BIvcGDFg.js";import"./spin-DEbYGW1X.js";import"./error-yAZoJobu.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4338/536ccc4bbcdd3b003e0c856ef3aae99769941574/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
