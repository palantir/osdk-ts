import{j as n}from"./iframe-CHEKlg6X.js";import{B as e}from"./BasePdfViewer-CUicpPit.js";import"./preload-helper-Bk_EBvkM.js";import"./index-BlVg7-ny.js";import"./BasePdfViewer.module.css-C0sVv9N0.js";import"./PdfViewerAnnotationLayer-EHEDSCSh.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DiyHENHN.js";import"./PdfViewerOutlineSidebar-DRnpaqmg.js";import"./PdfViewerSidebarHeader-D6IrLWVM.js";import"./useBaseUiId-Dm5MMLjS.js";import"./useControlled-YILXX2lb.js";import"./CompositeRoot-DMYuCTXX.js";import"./CompositeItem-BM163bD9.js";import"./ToolbarRootContext-Cjz1--hk.js";import"./composite-CfCX0gh6.js";import"./svgIconContainer-CkU_wGfW.js";import"./PdfViewerSearchBar-DVwfQpyg.js";import"./chevron-up-CG3q86df.js";import"./chevron-down-2mN8R6m0.js";import"./cross-CLXDm_xy.js";import"./PdfViewerSidebar-Dt7E5Zew.js";import"./index-CaLR8Vgq.js";import"./index-D9r-VgWS.js";import"./index-B4M03-o8.js";import"./PdfViewerToolbar-Bf1hqyjU.js";import"./Button-BeqL8QWK.js";import"./chevron-right-_kA8t25p.js";import"./Input-BQ285Nrh.js";import"./search-C2zDUTqA.js";import"./spin-D-sGa9QB.js";import"./error-DR3tFMqe.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4033/bba7c6499ee56e2c6ebd92b1896e489361bf1377/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
