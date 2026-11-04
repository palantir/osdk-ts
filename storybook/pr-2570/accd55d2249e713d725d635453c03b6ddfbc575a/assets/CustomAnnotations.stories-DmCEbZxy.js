import{j as n}from"./iframe-BJ8SXgdR.js";import{B as e}from"./BasePdfViewer-CNUIpvfY.js";import"./preload-helper-V6nC4EeU.js";import"./index-Bw4Jw5oO.js";import"./BasePdfViewer.module.css-DPrkewLm.js";import"./PdfViewerAnnotationLayer-B2RlmuD2.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-MSBP5yfl.js";import"./PdfViewerOutlineSidebar-DHDm9CmK.js";import"./PdfViewerSidebarHeader-DLs5KpYu.js";import"./useBaseUiId-M7m_99-n.js";import"./useControlled-CjUkOTZX.js";import"./CompositeRoot-mA4aiOB2.js";import"./CompositeItem-ehmW8yGD.js";import"./ToolbarRootContext-r3sR1laS.js";import"./composite-BEEWgOuz.js";import"./svgIconContainer-CsUfQGRN.js";import"./PdfViewerSearchBar-BBSZGtSb.js";import"./chevron-up-BfwT6KUO.js";import"./chevron-down-oM9ZgJIx.js";import"./cross-Cg7DwYSC.js";import"./PdfViewerSidebar-B8IfUIpF.js";import"./index-CctNg8Ui.js";import"./index-DxcYU98l.js";import"./index--VHPLkHF.js";import"./PdfViewerToolbar-DWjJ5cOy.js";import"./Button-DRmMomPf.js";import"./chevron-right-ClxRe565.js";import"./Input-Bx9J3YZM.js";import"./search-Dw_fxnZ-.js";import"./spin-DY2xoM3E.js";import"./error-C-Q6AIHf.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-2570/accd55d2249e713d725d635453c03b6ddfbc575a/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
