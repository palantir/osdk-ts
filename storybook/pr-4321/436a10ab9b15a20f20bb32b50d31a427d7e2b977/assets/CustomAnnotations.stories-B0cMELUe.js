import{j as n}from"./iframe-BlJB-hqv.js";import{B as e}from"./BasePdfViewer-DetEtpdq.js";import"./preload-helper-AMj6u5EH.js";import"./index-B5X20bPi.js";import"./BasePdfViewer.module.css-cMgGOCe5.js";import"./PdfViewerAnnotationLayer-Cnx-4vma.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-skf9jnIE.js";import"./PdfViewerOutlineSidebar-yQtQoVRV.js";import"./PdfViewerSidebarHeader-CbI-MPsw.js";import"./useBaseUiId-D_Y5M0eI.js";import"./useControlled-CETXoNMf.js";import"./CompositeRoot-D9UGBj9Q.js";import"./CompositeItem-BMH16CTX.js";import"./ToolbarRootContext-Br80IfNP.js";import"./composite-DR-h0Lzn.js";import"./svgIconContainer-LeVtNk5w.js";import"./PdfViewerSearchBar-CgL3HSyg.js";import"./chevron-up-DnaSmLZD.js";import"./chevron-down-CGFUoA8B.js";import"./cross-DteZeQw8.js";import"./PdfViewerSidebar-YZxPcret.js";import"./index-CEuYTBSI.js";import"./index-8mNQJ1FG.js";import"./index-BqrWcgCk.js";import"./PdfViewerToolbar-YwEi2bu4.js";import"./Button-bd2H5948.js";import"./chevron-right-Br-RzKlw.js";import"./Input-DoCeanz4.js";import"./search-VsI7BQQc.js";import"./spin-CII-3vR6.js";import"./error-DWdskqLp.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4321/436a10ab9b15a20f20bb32b50d31a427d7e2b977/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
