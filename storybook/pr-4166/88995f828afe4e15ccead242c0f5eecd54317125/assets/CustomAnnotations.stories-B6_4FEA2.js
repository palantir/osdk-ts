import{j as n}from"./iframe-YrpSpTvs.js";import{B as e}from"./BasePdfViewer-BbPbeC60.js";import"./preload-helper-DxNq55wa.js";import"./index-BrVf8lWl.js";import"./BasePdfViewer.module.css-COsDKw2j.js";import"./PdfViewerAnnotationLayer-BH-Wyn48.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ChEHRNaN.js";import"./PdfViewerOutlineSidebar-3A1Nrfrm.js";import"./PdfViewerSidebarHeader-DoPp7Yih.js";import"./useBaseUiId-nYNd-3tJ.js";import"./useControlled-2o6j3dfP.js";import"./CompositeRoot-CtHmiIPr.js";import"./CompositeItem-B56fR4fH.js";import"./ToolbarRootContext-8z2gQ1ff.js";import"./composite-5Mv9D3-A.js";import"./svgIconContainer-BtBzrjkO.js";import"./PdfViewerSearchBar-CY8v_kHD.js";import"./chevron-up-G8psbIi6.js";import"./chevron-down-BfPcmD3R.js";import"./cross-B0Aawxg9.js";import"./PdfViewerSidebar-DGCcVo64.js";import"./index-BS-m42I7.js";import"./index-Di4tHAvA.js";import"./index-BIHLBcFj.js";import"./PdfViewerToolbar-DXljP_QJ.js";import"./Button-CYGEL5Qg.js";import"./chevron-right-0xY0j62D.js";import"./Input-32CO0l-U.js";import"./search-B0P1cBIF.js";import"./spin-NMKaKDe9.js";import"./error-DewscpxX.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4166/88995f828afe4e15ccead242c0f5eecd54317125/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
