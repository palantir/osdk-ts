import{j as n}from"./iframe-DiEwqi1M.js";import{B as e}from"./BasePdfViewer-BSVIZIO4.js";import"./preload-helper-ClSjrKqp.js";import"./index-C5HZMqqF.js";import"./BasePdfViewer.module.css-CzxKMtdF.js";import"./PdfViewerAnnotationLayer-Cxqyuzfx.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-9n3mE8mo.js";import"./PdfViewerOutlineSidebar-BnkVFwPo.js";import"./PdfViewerSidebarHeader-D99oBUC3.js";import"./useBaseUiId-BzjC-o1k.js";import"./useControlled-BF2DtUKW.js";import"./CompositeRoot-BQDYDRc8.js";import"./CompositeItem-DTryuWNv.js";import"./ToolbarRootContext-D-rTQkYB.js";import"./composite-DPWnr1eN.js";import"./svgIconContainer-DEpavXsM.js";import"./PdfViewerSearchBar-ClHUmAur.js";import"./chevron-up-C7lXuzkr.js";import"./chevron-down-D04sNIFr.js";import"./cross-CTKZHD3L.js";import"./PdfViewerSidebar-DLPfbtC4.js";import"./index-3NYfUjbF.js";import"./index-Cz06B6jq.js";import"./index-lRW4o_Vc.js";import"./PdfViewerToolbar-CBOnGsSv.js";import"./Button-C4dfwxaK.js";import"./chevron-right-C38p3g34.js";import"./Input-DNKlbqfx.js";import"./search-rt5xI3z4.js";import"./spin-mPNHapOj.js";import"./error-CTX_J0NI.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4338/6f018f6522faf1791d18082116169514edf5c0ce/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
