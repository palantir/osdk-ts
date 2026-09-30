import{j as n}from"./iframe-DwrFhh8X.js";import{B as e}from"./BasePdfViewer-Ci5jAURJ.js";import"./preload-helper-CtRLQ8d2.js";import"./index-2C7ws8qd.js";import"./BasePdfViewer.module.css-C9XfLbls.js";import"./PdfViewerAnnotationLayer-7xMXV2ra.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-C9wkSrLT.js";import"./PdfViewerOutlineSidebar-ByhmjLJE.js";import"./PdfViewerSidebarHeader-CKYzcCUv.js";import"./useBaseUiId-hjF8-Tkz.js";import"./useControlled-BWpptLO1.js";import"./CompositeRoot-mI7XZoke.js";import"./CompositeItem-Cjr-y7lk.js";import"./ToolbarRootContext-BgJLWr5w.js";import"./composite-CQaDz_1E.js";import"./svgIconContainer-Dfv48f4w.js";import"./PdfViewerSearchBar-EnTENySz.js";import"./chevron-up-DvEyCsoq.js";import"./chevron-down-BBihCk-h.js";import"./cross-CPVTirRP.js";import"./PdfViewerSidebar-CYojo684.js";import"./index-DvIHEHIa.js";import"./index-BkjyrkST.js";import"./index-8KaHvHT1.js";import"./PdfViewerToolbar-BIyp3LrH.js";import"./Button-DEic01Xh.js";import"./chevron-right-rPGgppyE.js";import"./Input-CETxnph3.js";import"./search-B4eh0B39.js";import"./spin-D9kCjEXK.js";import"./error-Cw2yDStD.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4102/cb1cfd46e6d7dec3adcc28bbbb9ae92fc6d2edcd/compressed.tracemonkey-pldi-09.pdf";function c({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const l=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(c,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:l,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
