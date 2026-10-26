import{j as n}from"./iframe-ChS3imFp.js";import{B as e}from"./BasePdfViewer-DTM_lVxb.js";import"./preload-helper-CbLZMJZq.js";import"./index-BhUaDBrt.js";import"./BasePdfViewer.module.css-D7QxARHE.js";import"./PdfViewerAnnotationLayer-XOE-KAbZ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-BUC1olXm.js";import"./PdfViewerOutlineSidebar-tlB0yFTP.js";import"./PdfViewerSidebarHeader-YdpIyRXt.js";import"./useBaseUiId-D54mwsVu.js";import"./useControlled-BRbOyxdk.js";import"./CompositeRoot-CR-SOxfB.js";import"./CompositeItem-Ciy3kTde.js";import"./ToolbarRootContext-Ciy-U0ts.js";import"./composite-BXiRclhX.js";import"./svgIconContainer-CrPK_Tf2.js";import"./PdfViewerSearchBar-DWO3bo4C.js";import"./chevron-up-BtexXqlJ.js";import"./chevron-down-CE8oNUyN.js";import"./cross-B14JKiqa.js";import"./PdfViewerSidebar-C8ZO7o0l.js";import"./index-x3Y6GJ5x.js";import"./index-q2j62sEE.js";import"./index-jVTOKRrt.js";import"./PdfViewerToolbar-BHdQV_PT.js";import"./Button-DheVbQ5T.js";import"./chevron-right-2186zfFz.js";import"./Input-Ceo2lduN.js";import"./search-DsoYH40Z.js";import"./spin-BsX-XVG5.js";import"./error-qSLqjDm7.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4253/a238361703204ac78f72bda35fca28cea29b5bf2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
