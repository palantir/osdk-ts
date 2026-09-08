import{j as n}from"./iframe-C3HGDapW.js";import{B as e}from"./BasePdfViewer-c7sDm1gZ.js";import"./preload-helper-Dd-r_PP_.js";import"./index-CJ776Wah.js";import"./BasePdfViewer.module.css-BLrfuMSF.js";import"./PdfViewerAnnotationLayer-lYafI2bF.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-DLjPdIMG.js";import"./PdfViewerOutlineSidebar-CRiZ-pLi.js";import"./PdfViewerSidebarHeader-B3h56Uxv.js";import"./useBaseUiId-DDU_oadF.js";import"./useControlled-U-IEPHgG.js";import"./CompositeRoot-Dxm_XJ_M.js";import"./CompositeItem-ug1IBEV3.js";import"./ToolbarRootContext-DquNC5M6.js";import"./composite-C0TGio2P.js";import"./svgIconContainer-CFN5a8Be.js";import"./PdfViewerSearchBar-DePbfSQG.js";import"./chevron-up-B0cng5yR.js";import"./chevron-down-DzjGRqJz.js";import"./cross-D5WvDMJV.js";import"./PdfViewerSidebar-DuRtTMpK.js";import"./index-LE1XJX1v.js";import"./index-DQeQgx2N.js";import"./index-BijSJOSI.js";import"./PdfViewerToolbar-CN5IkpCM.js";import"./Button-D-rdzhRE.js";import"./chevron-right-DprlIXqk.js";import"./Input-BSSKD0Yf.js";import"./search-B43uCRp2.js";import"./spin-dh3qmdFX.js";import"./error-BHy_Uegk.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,s="/osdk-ts/storybook/pr-3878/f9513324b7571c516e44b4377c34b1c595967575/compressed.tracemonkey-pldi-09.pdf";function l({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(59, 130, 246, 0.9)",borderRadius:"6px",color:"#fff",fontSize:"12px",fontWeight:600,padding:"4px 8px",whiteSpace:"nowrap",boxShadow:"0 2px 8px rgba(0,0,0,0.15)"},children:t.label??"Note"})}function i({annotation:t}){return n.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",background:"#ef4444",borderRadius:"50%",color:"#fff",fontSize:"11px",fontWeight:700},children:t.label??"1"})}const c=[{id:"tooltip-1",type:"custom",page:1,rect:{x:55,y:400,width:120,height:28},label:"Key finding",render:t=>n.jsx(l,{...t})},{id:"badge-1",type:"custom",page:1,rect:{x:540,y:692,width:24,height:24},label:"1",render:t=>n.jsx(i,{...t})},{id:"badge-2",type:"custom",page:1,rect:{x:540,y:418,width:24,height:24},label:"2",render:t=>n.jsx(i,{...t})},{id:"highlight-1",type:"highlight",page:1,rect:{x:80,y:700,width:450,height:14},label:"Author line highlight"}],F={title:"Components/DocumentViewer/Renderers/PdfViewer/Recipes",component:e,tags:["beta"],args:{src:s,annotations:c,onAnnotationClick:p()},render:t=>n.jsx("div",{style:{height:"600px"},children:n.jsx(e,{...t})}),argTypes:{src:{control:!1},annotations:{control:"object"},onAnnotationClick:{control:!1,table:{category:"Events"}}}},o={parameters:{docs:{source:{code:`function TooltipAnnotation({ annotation }: PdfAnnotationRenderProps) {
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
