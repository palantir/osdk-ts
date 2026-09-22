import{j as n}from"./iframe-DIhVLHWR.js";import{B as e}from"./BasePdfViewer-CyqP8SV-.js";import"./preload-helper-DLYQvN5u.js";import"./index-yKNrR2B4.js";import"./BasePdfViewer.module.css-2zzjXlCF.js";import"./PdfViewerAnnotationLayer-B31feNvu.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CwDqirP5.js";import"./PdfViewerOutlineSidebar-BbfaHwCv.js";import"./PdfViewerSidebarHeader-CTUaGTQL.js";import"./useBaseUiId-CNPP6ho2.js";import"./useControlled-BGD6VLnv.js";import"./CompositeRoot-DqrzMnzB.js";import"./CompositeItem-oXJFfhwO.js";import"./ToolbarRootContext-DPTQ5YE4.js";import"./composite-tiXb7rK6.js";import"./svgIconContainer-D0TTrVxE.js";import"./PdfViewerSearchBar-DTMxk5fU.js";import"./chevron-up-6zlct0hU.js";import"./chevron-down-Cs6sjnv7.js";import"./cross-B1cvRkvv.js";import"./PdfViewerSidebar-CmBalvOG.js";import"./index-CbR9L2SG.js";import"./index-C5TdACSr.js";import"./index-CHn3e9nX.js";import"./PdfViewerToolbar-Cfg6z7w7.js";import"./Button-vhJFIUHZ.js";import"./chevron-right-XJtMQ-Es.js";import"./Input-BMTQDxuL.js";import"./search-Cy5B3T22.js";import"./spin-B5SuHibV.js";import"./error-BbBgUwm_.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4070/782428ef372211d38221a3819133fb3482d97be5/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
