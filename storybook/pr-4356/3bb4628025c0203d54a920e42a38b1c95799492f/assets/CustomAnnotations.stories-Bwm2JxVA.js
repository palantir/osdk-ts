import{j as n}from"./iframe-BL-M0CJv.js";import{B as e}from"./BasePdfViewer-BP8bI_kl.js";import"./preload-helper-C0zkmkXS.js";import"./index-Db0LO39w.js";import"./BasePdfViewer.module.css-DBmeaex8.js";import"./PdfViewerAnnotationLayer-OhWGJbKt.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-CoNnB-Vh.js";import"./PdfViewerOutlineSidebar-BqkmquLV.js";import"./PdfViewerSidebarHeader-Bk7os_Ao.js";import"./useBaseUiId-TPr_qZ_1.js";import"./useControlled-CKiiitZS.js";import"./CompositeRoot-CepNNprH.js";import"./CompositeItem-XRZQ4yN6.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./composite-Dx0NSDUH.js";import"./svgIconContainer-BX2v_cR0.js";import"./PdfViewerSearchBar-CuqqluiH.js";import"./chevron-up-BgUSDG1D.js";import"./chevron-down-5PA4SDET.js";import"./cross-x8jhhqfq.js";import"./PdfViewerSidebar-7dfTRQ5W.js";import"./index-BFvrjhEh.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./PdfViewerToolbar-CPLsSMob.js";import"./Button-CC9Ubwa3.js";import"./chevron-right-B5fRg1vB.js";import"./Input-EsCXPtCp.js";import"./search-BiWkoGJW.js";import"./spin-KJeevf4k.js";import"./error-BIo7wVIV.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-4356/3bb4628025c0203d54a920e42a38b1c95799492f/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
