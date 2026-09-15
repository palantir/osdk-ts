import{j as n}from"./iframe-DFW0mMZ1.js";import{B as e}from"./BasePdfViewer-R2np4pLV.js";import"./preload-helper-Qawhc3UJ.js";import"./index-o6yCYR6Q.js";import"./BasePdfViewer.module.css-CA7iu7-e.js";import"./PdfViewerAnnotationLayer-BvKfkfTh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-D-shIGwJ.js";import"./PdfViewerOutlineSidebar-DtpPQENJ.js";import"./PdfViewerSidebarHeader-MlQjKMKk.js";import"./useBaseUiId-CXLWSjxr.js";import"./useControlled-CgydVt6m.js";import"./CompositeRoot-C3XNL3G3.js";import"./CompositeItem-CKYwdTed.js";import"./ToolbarRootContext-BwtTYckl.js";import"./composite-C9QpehYt.js";import"./svgIconContainer-VOBSJ15n.js";import"./PdfViewerSearchBar-Db89BLTJ.js";import"./chevron-up-BHMBK8jh.js";import"./chevron-down-s8opNKgU.js";import"./cross-BkPI5BMI.js";import"./PdfViewerSidebar-DMZyLWo9.js";import"./index-B7I1fXI4.js";import"./index-Ntq27F76.js";import"./index-CJTfQw-N.js";import"./PdfViewerToolbar-D13BKr4P.js";import"./Button-6FT0QBh6.js";import"./chevron-right-BmJmRiKY.js";import"./Input-Bw8rrVtq.js";import"./search-B2NWGFRm.js";import"./spin-C3UOvUcZ.js";import"./error-B3Dge2Yv.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4015/bfc20c5eb663ed8bd6415f77d22cc351070fa6d2/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
